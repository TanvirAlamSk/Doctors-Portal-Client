import React from 'react';
import footerImg from '../../assets/images/footer.png';

const Footer = () => {
    return (
        <div className='my-8' style={{ background: `url(${footerImg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
            <footer className="footer p-10 justify-between">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <aside>
                <p>Copyright © 2023 - All right reserved by Doctors Portal Industries Ltd</p>
            </aside>
        </div>
    );
};

export default Footer;