import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default  function Footer() {
    return (
        <footer className="flex flex-col bg-slate-400 z-50 justify-center items-center sticky bottom-0 text-white">
            <div className="flex px-4 py-4">
                <FaInstagram className="text-2xl mx-2"/>
                <FaTwitter className="text-2xl mx-2"/>
                <FaYoutube className="text-2xl mx-2"/>
            </div>
            <p>© 2024 ACI</p>
        </footer>
    );
}