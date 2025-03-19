export const HomeCardComponent = ({icon, title, description, color}: {
    icon: React.ReactNode,
    title: string,
    description: string,
    color: string
}) =>{
    return <>
    <div className={`border-2 border-red-500 w-40 h-40 m-6 rounded-sm bg-${color}-500 relative`}>
        <div className="m-3">{icon}</div>
        <div className="absolute bottom-0 p-4">
        <h1 className="text-md   ">{title}</h1>
        <p className="text-sm ">{description}</p>
        </div>
    </div>
    
    </>
}