"use client"
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export const SideBarItem = ({ href, title, icon }: { href: string; title: string; icon: React.ReactNode }) => {
    const router = useRouter();
    const pathname = usePathname()
    const selected = pathname === href

    return <div className={`flex ${selected ? "text-[#6a51a6]" : "text-white-500"} cursor-pointer  p-2 px-10 `} onClick={() => {
        router.push(href);
    }}>
        <div className="pr-2">
            {icon}
        </div>
        <div className={` ${selected ? "text-[#6a51a6]" : "text-white-500"}`}>
            {title}
        </div>
    </div>
}