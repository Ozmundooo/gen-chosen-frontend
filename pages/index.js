import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Home/Hero";
import Pillars from "../components/Home/Pillars";

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
    </>
  );
}
