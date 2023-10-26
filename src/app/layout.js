import "./globals.css";
import Header from "../components/Header";
import Providers from "../components/Providers";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";
export const metadata = {
  title: "IMDb",
  description: "This is the IMDb clone website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {" "}
     
        <body>
        <Providers>
          <Header />
          <Navbar/>
          <SearchBox/>
          {children}
          </Providers>
        </body>{" "}
   
    </html>
  );
}
