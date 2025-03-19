export const ImageComponent = ({src}: {src: string}) =>{
    return <>
    <img src={src} alt=""  className="rounded-full w-8 h-8 object-cover"/>
    </>
}