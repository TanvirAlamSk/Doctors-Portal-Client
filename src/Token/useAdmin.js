import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/UserContext/UserContext';


const useAdmin = (email) => {
    const [admin, setAdmin] = useState("")
    const [adminLoader, setAdminLoader] = useState(true)


    useEffect(() => {
        fetch(`https://doctors-portal-server-green-xi.vercel.app/users/admin/${email}`)
            .then((response) => response.json())
            .then((data) => {
                setAdmin(data.isAdmin);
                setAdminLoader(false)
            })
    }, [email])

    return [admin, adminLoader]
};

export default useAdmin;