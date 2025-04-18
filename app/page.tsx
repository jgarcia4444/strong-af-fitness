import Image from "next/image";

import Banner from "./ui/home/banner";
import Header from "./ui/home/header";

export default function Home() {
  return (
    <div className="">
      <div className=" relative w-full h-screen flex flex-col py-8 justify-between items-center">
        <Banner />
        <Header />
      </div>
    </div>
  );
}
