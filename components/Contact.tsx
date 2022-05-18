import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaMailchimp } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

interface Props {}

const Contact: React.FC<Props> = ({}) => {
    return (
        <div className="flex flex-col mt-10 md:mt-[5.5rem]">
            <div className="text-3xl font-semibold self-center md:self-start uppercase">
                Contact
            </div>
            <div className="flex gap-3 md:flex-row items-center justify-center md:justify-start mt-5">
                <div className="flex flex-col transition ease-in transform hover:scale-120 item-center justify-center gap-2">
                    <a
                        href="https://facebook.com/teerut26/"
                        className="w-12 h-12 bg-base-200 duration-500 rounded-full flex justify-center items-center"
                    >
                        <FaFacebook size={20} color={"#FFD34E"} />
                    </a>
                </div>
                <div className="flex flex-col transition ease-in transform hover:scale-120 item-center gap-2">
                    <a
                        href="https://www.instagram.com/teerut_1t/"
                        className="w-12 h-12 bg-base-200 duration-500 rounded-full flex justify-center items-center"
                    >
                        <FaInstagram size={20} color={"#FFD34E"} />
                    </a>
                </div>
                <div className="flex flex-col transition ease-in transform hover:scale-120 item-center gap-2">
                    <a
                        href="mailto:teerutdev@gmail.com"
                        className="w-12 h-12 bg-base-200 duration-500 rounded-full flex justify-center items-center"
                    >
                        <GrMail size={20} color={"#FFD34E"} />
                    </a>
                </div>
                <div className="flex flex-col transition ease-in transform hover:scale-120 item-center gap-2">
                    <a
                        href="https://github.com/Teerut26"
                        className="w-12 h-12 bg-base-200 duration-500 rounded-full flex justify-center items-center"
                    >
                        <FaGithub size={20} color={"#FFD34E"} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
