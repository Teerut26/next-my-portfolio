import { User } from "interface/user";
import React from "react";
import { IconUser } from "./Icon";

interface Props {
    data?: User | null;
}

const GithubStats: React.FC<Props> = ({ data }) => {
    return (
        <a
            href="https://github.com/Teerut26"
            className="flex flex-col mt-10 md:mt-[5.5rem] "
        >
            <div className="text-3xl font-semibold self-center md:self-start uppercase">
                github
            </div>
            <div className="flex flex-col gap-10 md:gap-0 md:flex-row items-center justify-between mt-5">
                <div className="flex flex-col item-center justify-center gap-2">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-base-200 duration-500 rounded-full flex justify-center items-center">
                            <img
                                className="w-[1.75rem]"
                                src="/images/repository.svg"
                                alt=""
                            />
                        </div>
                        <div className="text-2xl">{data?.public_repos}</div>
                    </div>
                    <div className="text-xl text-center">Repository</div>
                </div>
                <div className="flex flex-col item-center gap-2">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-base-200 duration-500 rounded-full flex justify-center items-center">
                            <img
                                className="w-[1.75rem]"
                                src="/images/users.svg"
                                alt=""
                            />
                        </div>
                        <div className="text-2xl">{data?.followers}</div>
                    </div>
                    <div className="text-xl text-center">Followers</div>
                </div>
                <div className="flex flex-col item-center gap-2">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-base-200 duration-500 rounded-full flex justify-center items-center">
                            <img
                                className="w-[1.75rem]"
                                src="/images/users.svg"
                                alt=""
                            />
                        </div>
                        <div className="text-2xl">{data?.following}</div>
                    </div>
                    <div className="text-xl text-center">Following</div>
                </div>
            </div>
        </a>
    );
};

export default GithubStats;
