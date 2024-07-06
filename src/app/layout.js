import { Inter } from "next/font/google";
import "./globals.css";
import Prvdr from "@/lib/Prvdr";
import Nav from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={inter.className}>
        <Prvdr>
          <Nav/>
            {children}

        

         
        </Prvdr>

        
        </body>

    </html>
  );
}
