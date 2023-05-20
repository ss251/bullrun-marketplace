import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { ConnectWallet } from "@thirdweb-dev/react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Video from "@/components/video";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col h-screen font-sharetech">
      <Navbar />
      <div className="flex-grow flex flex-col justify-center">
        <div className="border-b border-black py-6 text-center">
          <p>free markets serving bulls and bears</p>
        </div>
        <div className="my-auto button-list flex flex-col justify-center gap-2 text-2xl">
          <button
            className="button 
                             ml-12 
                             mr-12 
                             mb-4 
                             bg-primary 
                             border-2 
                             text-black 
                             font-bold py-1 px-4 
                             hover:text-primary 
                             hover:border-l-4 
                             hover:bg-white"
          >
            <Link href={"http://w3bbie.xyz/test/"} target="_blank">
              START GAME
            </Link>
          </button>

          <ConnectWallet
            className="!important uppercase button 
                             justify-center
                             ml-12 
                             mr-12 
                             mb-4 
                             bg-secondary 
                             border-2
                             border-solid
                             border-black
                             text-white 
                             font-bold py-1 px-4
                             hover:text-secondary
                             hover:border-l-4
                             hover:bg-white text-2xl rounded-none text-center"
          />
          <button
            className="button 
            ml-12 
            mr-12 
            mb-4 
            bg-gray 
            border-2 
            border-solid text-black 
            font-bold py-1 px-4
            hover:text-gray
            hover:border-l-4
            hover:bg-white"
          >
            <Link href={"/marketplace"}>MARKETPLACE</Link>
          </button>
          <button
            className="button 
            ml-12 
            mr-12
            mb-4 
            bg-white
            border-2 
            text-black 
            font-bold py-1 px-4
            hover:text-black
            hover:border-l-4
            hover:bg-primary"
          >
            <Link href={"/_leaderboard"}>LEADERBOARD</Link>
          </button>

          <button
            className="button 
                             ml-12 
                             mr-12 
                             bg-white
                             border-2 
                             text-black 
                             font-bold py-1 px-4
                             hover:text-black
                             hover:border-l-4
                             hover:bg-primary "
          >
            CREDITS
          </button>
          <Video />
        </div>
        <Footer />
      </div>
    </div>
  );
}
