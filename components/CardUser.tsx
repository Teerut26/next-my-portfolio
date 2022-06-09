import Image from "next/image";
import React from "react";

interface Props {}

const CardUser: React.FC<Props> = ({}) => {
    return (
        <>
            <div className="flex justify-center rotate-z-12">
                <div className="flex flex-col-reverse md:flex-row flex items-center justify-between gap-10 mt-[1rem] md:mt-[7rem]">
                    <div className="flex flex-col justify-center items-center md:items-start gap-2">
                        <div className="">THIS IS ME</div>
                        <div className="text-4xl font-semibold text-center md:text-start">
                            TEERUT SRITHONGDEE
                        </div>
                        <div className="bg-gradient-to-r from-[#FFD34E] to-[#EE467E] h-1 w-full"></div>
                        <div className="text-center md:text-start">
                            Welcome to my portfolio, I hope you enjoy. my
                            portfolio
                        </div>
                    </div>
                    <div style={{transform:"rotate(5deg)"}} className=" bg-gradient-to-r from-[#FFD34E] to-[#EE467E] w-[10rem] h-[10rem] p-[0.3rem]">
                        <img style={{transform:"rotate(355deg)"}} src="/images/profile.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardUser;
