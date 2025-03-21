import { AppBar } from "@/components/AppBar";
import { SideBar } from "@/components/SideBar";

export default function({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          
        <AppBar/>
        <SideBar/>

        <div className=" absolute top-15 left-50">
        {children}
        </div>
      </body>
    </html>
  );
}