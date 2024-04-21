import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ClientSideProviderTest from "@/components/clientSideProviderTest";
import { EdgeStoreProvider } from '@/lib/edgestore'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default:" IntelligentTraffic Monitoring",
    template:"%s | Next.js 14"
  },
  description: "Final Year Mjaor Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ClientSideProviderTest> */}
        <EdgeStoreProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
          </EdgeStoreProvider>
        {/* </ClientSideProviderTest> */}
      </body>
    </html>
  );
}
