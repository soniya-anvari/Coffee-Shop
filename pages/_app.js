import Navbar from "@/components/modules/Navbar/Navbar";
import TopNavbar from "@/components/modules/Navbar/TopNavbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return(
     <div className="w-11/12 m-auto">
      <TopNavbar />
      <Component {...pageProps} />
            <Navbar />

     </div>
  )
}
