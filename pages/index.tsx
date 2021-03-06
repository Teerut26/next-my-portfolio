import CardUser from "@/components/CardUser";
import Contact from "@/components/Contact";
import GithubStats from "@/components/GithubStats";
import axios from "axios";
import { User } from "interface/user";
import WithNavbar from "layouts/WithNavbar";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

// export async function getServerSideProps(context: AppContext) {
//     let { data } = await axios.get<User>(
//         "https://api.github.com/users/teerut26"
//     );

//     return {
//         props: { data }, // will be passed to the page component as props
//     };
// }

const Home: NextPage<{ data?: User }> = ({ data }) => {
    const [Data, setData] = useState<User | null>(null);

    useEffect(() => {
        (async () => {
            let { data } = await axios.get<User>(
                "https://api.github.com/users/teerut26"
            );
            setData(data);
        })();
    }, []);

    return (
        <WithNavbar>
            <div className="max-w-2xl mx-auto">
                <CardUser />
                <GithubStats data={Data} />
                <Contact />
            </div>
        </WithNavbar>
    );
};

export default Home;
