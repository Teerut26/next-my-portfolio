import { Html, Head, Main, NextScript } from "next/document";
import { useDarkMode } from "usehooks-ts";

export default function Document() {
    return (
        <Html className="duration-500">
            <Head>
                <title>Teerut Portfolio</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Pacifico&family=Prompt:wght@100;200;300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
