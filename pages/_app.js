import Navbar from "@/components/modules/Navbar/Navbar";
import TopNavbar from "@/components/modules/Navbar/TopNavbar";
import "@/styles/globals.css";
import { Toaster } from "sonner";

export default function App({ Component, pageProps }) {
  return(
     <div>
      {Component.name !=='About' ||Component.name.startsWith('/product') &&<TopNavbar /> }
      <div className="pb-[100px]">
        <Component {...pageProps} />
      </div>
            <Navbar />
    <Toaster position="top-center" />
     </div>
  )
}
