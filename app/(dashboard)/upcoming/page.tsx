import { MeetingCard } from "@/components/MeetingCard"

export default function page(){
    console.log("This is from upcoming component")

    return <>
    <div className="w-full h-full ">
        <h1 className="font-bold m-4 text-2xl">Upcoming Meetings</h1>
        <div className="flex flex-wrap">
        <MeetingCard  icon={<CalendarIcon/>} title="Meeting For Upcoming Developers" date="March-15-2025" startTime="2:00 PM" endTime="4:00 PM"/>
        <MeetingCard  icon={<CalendarIcon/>} title="Meeting For Upcoming Developers" date="March-15-2025" startTime="2:00 PM" endTime="4:00 PM"/>
        <MeetingCard  icon={<CalendarIcon/>} title="Meeting For Upcoming Developers" date="March-15-2025" startTime="2:00 PM" endTime="4:00 PM"/>
        <MeetingCard  icon={<CalendarIcon/>} title="Meeting For Upcoming Developers" date="March-15-2025" startTime="2:00 PM" endTime="4:00 PM"/>
        <MeetingCard  icon={<CalendarIcon/>} title="Meeting For Upcoming Developers" date="March-15-2025" startTime="2:00 PM" endTime="4:00 PM"/>
        </div>
    </div>
    
    </>
}



export const CalendarIcon = () =>{
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
  
}