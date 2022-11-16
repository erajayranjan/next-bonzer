import NavBar from "../components/navBar"
// import '../globals.css'
import Head from 'next/head'
import { appDetails } from "../constants/appDetails"
import Footer from "./Footer"
const Layout = ({children}) => {
  return (
    <div className="">
        <Head>
            <title>{appDetails.APP_TITLE}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="flex justify-between align-items-center flex-col min-h-screen ">
            {/* <h2 className="text-blue-700" >Hello</h2> */}
            <main>
                <NavBar />
                <div className="max-w-screen-xl px-8 py-8 mx-auto">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    </div>
  )
}

export default Layout