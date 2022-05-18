import "@/styles/globals.css";
import "windi.css";
import type { AppProps } from "next/app";
import { wrapper } from "@/store/index";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default wrapper.withRedux(MyApp);
