import "./globals.css";
import Layout from "../components/Layout";
import AuthContext from "../context/authContext";
import { useContext } from "react";
import { useState } from "react";

export default function MyApp({ Component, pageProps }) {

    const [loading, setloading] = useState(false)
    const [user, setUser] = useState({})
    const [token, setToken] = useState("")
    const [status, setStatus] = useState(false)
  return (
    <Layout>
      <AuthContext.Provider value={{status, setStatus,loading, setloading, user, setUser, token, setToken}} >
        <Component {...pageProps} />
      </AuthContext.Provider>
    </Layout>
  );
}
