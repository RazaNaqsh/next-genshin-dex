import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "@/utils/provider";
import { SkeletonTheme } from "react-loading-skeleton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Genshin Dex",
  description: "A Genshin Dex App Made with Next13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <SkeletonTheme baseColor="#313131" highlightColor="#525252">
            <Navbar />
            {children}
          </SkeletonTheme>
        </Providers>
      </body>
    </html>
  );
}
