import { BannerComponent } from "@/components/BannerComponent";
import { HomeCardComponent } from "@/components/HomeCardComponent";
import { MeetingCard } from "@/components/MeetingCard";
import { CalendarIcon } from "../upcoming/page";

export default function Home(){
    return (
        <>
         <div className="  w-280 m-3 ">
            <div className="">
            <BannerComponent/>
            </div>
            <div className="flex justify-between w-full mx-auto   ">
            <HomeCardComponent color="bg-orange-500" icon={<PlusIcon/>} title={"Create a new meeting"} description="Create an instant meeting"  />
            <HomeCardComponent color="bg-blue-500" icon={<PlusIcon/>} title={"Create a new meeting"} description="Create an instant meeting"  />
            <HomeCardComponent color="bg-purple-500" icon={<PlusIcon/>} title={"Create a new meeting"} description="Create an instant meeting"  />
            <HomeCardComponent color="bg-yellow-500" icon={<PlusIcon/>} title={"Create a new meeting"} description="Create an instant meeting"  />
            </div>

            <div className="flex justify-between">
            <h1 className="font-bold text-2xl">Today's Upcoming Meetings</h1>
            <span>See All</span>
            </div>
            <div className="flex p-0 ">
            <MeetingCard  icon={<CalendarIcon/>} title="Meeting For Upcoming Developers" date="March-15-2025" startTime="2:00 PM" endTime="4:00 PM"/>
            <MeetingCard  icon={<CalendarIcon/>} title="Meeting For Upcoming Developers" date="March-15-2025" startTime="2:00 PM" endTime="4:00 PM"/>
            
            </div>
        </div>
        
        </>
    )
}

const PlusIcon = () =>{
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
  }