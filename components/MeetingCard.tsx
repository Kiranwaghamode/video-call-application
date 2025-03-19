import { ImageComponent } from "./ImageComponent"

export const MeetingCard = ({icon, title, date, startTime, endTime}: {
    icon: React.ReactNode,
    title: string,
    date: string,
    startTime: string,
    endTime: string
}) =>{
    return <>
    <div className="w-90 bg-[#1C1F2E] rounded-sm p-4 h-fit border-2 m-2">
        <div>
            {icon}
        </div>
        <div>
            {title}
        </div>
        <div>
            {date} 
            <div>
                
            {startTime}<span className="mx-2">to</span>
            {endTime}
            </div>
        </div>

        <div className="w-fit mt-5">
            <ImageComponent src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"/>
        </div>
    </div>

    </>
}