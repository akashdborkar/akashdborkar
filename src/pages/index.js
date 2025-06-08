import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Profile | Akash Borkar</title>
        <meta name="description" content="It's about Akash borkar, a fellow web devloper works in Perficient." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main>
        <h1>Hello, I'm Akash Borkar</h1>
        <p>I’m a Web developer.</p>
        </main>
    </>
  );
}
