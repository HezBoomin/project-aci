import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default  function Footer() {
    return (
        <footer  className=" mt-10 bg-gray-600 z-50 ">
            <div className="flex flex-col justify-center items-center bottom-0 text-white">
                <div className="flex px-4 py-4">
                    <FaInstagram className="text-2xl mx-2"/>
                    <FaTwitter className="text-2xl mx-2"/>
                    <FaYoutube className="text-2xl mx-2"/>
                </div>
                <p>© 2024 ACI Indonesia Raya</p>
            </div>
        </footer>
    );
}