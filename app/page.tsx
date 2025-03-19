import { BannerComponent } from "@/components/BannerComponent";
import { HomeCardComponent } from "@/components/HomeCardComponent";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="">
      <BannerComponent/>
    </div>
    <div>
      <HomeCardComponent color="red" icon={<PlusIcon/>} title={"Create a new meeting"} description="Create an instant meeting"  />
    </div>
    </>
  );
}


const PlusIcon = () =>{
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
}
