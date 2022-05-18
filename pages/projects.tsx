import axios from "axios";
import { Repo } from "interface/repo";
import WithNavbar from "layouts/WithNavbar";
import React, { useEffect, useState } from "react";

// export async function getServerSideProps(context: AppContext) {
//     let { data } = await axios.get<Repo[]>(
//         "https://api.github.com/users/Teerut26/repos"
//     );

//     return {
//         props: { data },
//     };
// }

interface Props {
    data?: Repo[];
}

const Projects: React.FC<Props> = ({ data }) => {
    const [Repos, setRepos] = useState<Repo[]>([] as Repo[]);

    useEffect(() => {
        (async () => {
            let { data } = await axios.get<Repo[]>(
                "https://api.github.com/users/Teerut26/repos"
            );
            setRepos(data);
        })();
    }, []);

    return (
        <WithNavbar>
            <div className="flex flex-wrap justify-center gap-5">
                {Repos?.map((item, idx) => (
                    <Project key={idx} data={item} />
                ))}
            </div>
        </WithNavbar>
    );
};

const Project: React.FC<{ data: Repo }> = ({ data }) => {
    return (
        <>
            <div className="relative w-full md:w-[20rem] h-[6rem] bg-gradient-to-r from-[#FFD34E] to-[#EE467E] p-1">
                <div className="bg-base-100 duration-500 flex justify-center items-start flex-col w-full h-full p-3">
                    <div className="text-xl font-semibold truncate w-[97%]">
                        {data.full_name}
                    </div>
                    <div className="text-xl">
                        {data.language ? data.language : "null"}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;
