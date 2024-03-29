'use client';
const montserrat=Montserrat({weight:'600',subsets:['latin']});
import { cn } from "@/lib/utils";
import { Code, ImageIcon, LayoutDashboard, MessageCircle, Music, Settings, VideoIcon } from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


const routes=[
    {
        label:"Dashboard",
        icon:LayoutDashboard,
        href:"/dashboard",
        color:"text-sky-500"
    },
    {
        label:"Conversation",
        icon:MessageCircle,
        href:"/conversation",
        color:"text-red-500"
    },
    {
        label:"Image Generation",
        icon:ImageIcon,
        href:"/image",
        color:"text-blue-500"
    },
    {
        label:"Video Generation",
        icon:VideoIcon,
        href:"/video",
        color:"text-green-500"
    },
    {
        label:"Music Genration",
        icon:Music,
        href:"/music",
        color:"text-purple-500"
    },
    {
        label:"Code Generation",
        icon:Code,
        href:"/code",
        color:"text-pink-500"
    },
    {
        label:"Settings",
        icon:Settings,
        href:"/settings",
        color:"text-white-500"
    },
]
const Sidebar = () => {
    const pathname=usePathname();
  return (
    <div className="space-y-4 flex flex-col h-full
    bg-[#111827] text-white">
        <div className="px-3 py-2 flex-1">
            <Link href="/dashboard" 
            className="flex items-center pl-3 mb-14">
                <div className="relative w-8 h-8 mr-4">
                    <Image fill alt="logo" src='/logo.png'/>
                </div>
                <h1 className={cn("text-2xl font-bold",montserrat.className)}>CreatiWave</h1>
            </Link>
            <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-meduim cursor-pointer hover:text-white hover:bg-white rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
        </div>

    </div>
  )
}

export default Sidebar