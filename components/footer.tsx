import { FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "@nextui-org/react";

export default  function Footer() {
    return (
        <footer id="footer"  className=" mt-10 bg-red-900 z-50 ">
            <div className="flex flex-col justify-between items-center bottom-0 text-white">
                <div className="flex px-4 py-4">
                    <p className="flex pr-5">Contact Us On</p>
                    <Link color="foreground" href="https://www.instagram.com/concreteaci/p/C7WrYSeO-wB/?img_index=1">
                        <FaInstagram  className="text-2xl mx-2 text-white"/>
                    </Link>
                    <Link color="foreground" href="mailto:info@concrete.or.id">
                        <MdOutlineMailOutline className="text-2xl mx-2 text-white"/>
                    </Link>
                </div>
                <p>© 2024 Western Indonesia Chapter</p>
            </div>
        </footer>
    );
}