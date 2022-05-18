import Navbar from "@/components/Navbar";
import React from "react";

interface Props {
    name?: string;
    children: React.ReactNode;
}

const WithNavbar: React.FC<Props> = ({ children }) => {
    return (
        <div className="max-w-6xl mx-auto px-5">
            <Navbar />
            <div className="p-5">{children}</div>
        </div>
    );
};

export default WithNavbar;
