import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div className=" bg-bg min-h-screen">
      <div className="bg-white max-w-2xl min-h-screen mx-auto">
        <Nav />
      </div>
    </div>
  );
}
