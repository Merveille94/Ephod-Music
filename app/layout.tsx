import "./globals.css";
import {Metadata} from "next";
import {ClerkProvider} from "@clerk/nextjs";
import Header from "@/app/components/HomeComponents/Header";
import Footer from "@/app/components/HomeComponents/Footer";

export const metadata: Metadata = {
  title: "The Ephod Music",
  description: "Ephod Music is a passionate collective of gospel musicians committed to uplifting and inspiring audiences through powerful, soul-stirring performances",
  icons: "/images/Artboard 5.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
       <ClerkProvider>
           <html lang="en">
           <body>
           <Header />
           {children}
           <Footer />
           </body>
           </html>
       </ClerkProvider>
  );
}
