import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import app from '../../firebase/Firebase.init';
import { Navigate, useNavigate } from 'react-router-dom';

export const AuthContext = createContext()
const auth = getAuth(app)

const UserContext = ({ children }) => {
    const [user, setUser] = useState([])
    const [loader, setLoader] = useState(true)

    const googleProvider = new GoogleAuthProvider();

    const userJwtVerify = () => {
        onAuthStateChanged(auth, (currentUser) => {
            const email = currentUser.email
            fetch(`https://doctors-portal-server-green-xi.vercel.app/bookings?email=${email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("doctors-portal-token")}`
                }
            })
        })
    }

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const userLogin = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const googleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(() => {
                userJwtVerify();
            })
            .catch((error) => alert(error))
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                localStorage.removeItem("doctors-portal-token")
            })
            .catch(() => { })
    }

    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoader(false)
        })
        return () => unSubscriber()
    }, [])

    const value = { user, loader, createUser, userLogin, googleLogin, logOut }
    return (
        <div>
            <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
        </div>
    );
};

export default UserContext;