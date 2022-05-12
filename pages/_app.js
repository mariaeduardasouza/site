import GlobalStyle from "../src/theme/GlobalStyle";
import Head from "next/head";


function MyApp({Component, pageProps}){
    return( 
        <>
            <Head>
                <script 
                    dangerouslySetInnerHTML={{
                        __html:`
                        
                        `
                    }}
                />
            </Head>
            <GlobalStyle />
            <Component{...pageProps} />
        </>
    )
}

export default MyApp;