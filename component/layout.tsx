import React from "react"
import Head from "next/head"
import { date } from "../pages/index"
import Theme from "./theme"
import SearchBar from "./search"
function Layout(PageComponent: any) {
    const PageComponentWithLayout = ({ ...pageProps }) => {
        return (
            <>
                <Head>
                    <link rel="icon" type="image/png" href="/icon.png" />
                </Head>
                <nav className="nav">
                    <div className="spacer">
                    <a className="hover-underline-animation" href="/">
                            cd ..
                        </a>
                    </div>
                    <div className="right">
                        <a className="hover-underline-animation" href="/second-brain">
                            garden
                        </a>
                        <a className="hover-underline-animation" href="/books">
                            books
                        </a>
                        <a className="hover-underline-animation" href="/fun">
                            fun
                        </a>
                        <a className="hover-underline-animation" href="/projects">
                            projects
                        </a>
                        <a className="hover-underline-animation" href="/TIL">
                            til
                        </a>
                        <a className="hover-underline-animation" href="/uses">
                            tools
                        </a>
                        <a className="">
                            <Theme />
                        </a>
                    </div>
                </nav>
                <div className="py-32 mx-auto max-w-2xl px-6 md:px-0">
                    <main>
                        <PageComponent {...pageProps} />
                        {/* <SearchBar /> */}
                    </main>
                    <div className="pt-10 grey-text cent ">
                        <span className=" text-sm">
                            <a
                                target="_blank"
                                href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                                style={{ color: "inherit", borderBottom: "1px dotted" }}
                            >
                                CC BY-NC-SA 4.0
                            </a>{" "}
                            2021-{date.getFullYear()} © Ahmed Saheed
                        </span>
                    </div>
                </div>
            </>
        )
    }

    return PageComponentWithLayout
}

export default Layout
