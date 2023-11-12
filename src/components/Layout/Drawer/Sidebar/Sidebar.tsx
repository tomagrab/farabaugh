import Image from "next/image";
import SidebarItem from "./SidebarItem/SidebarItem";
import { faCalendar, faHome } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Sidebar() {
  return (
    <ul className="menu p-4 min-h-full bg-base-300 text-base-content pt-16">
      {/* Sidebar content here */}
      <SidebarItem href={"/"} icon={faHome} />
      <SidebarItem href={"/book"} icon={faCalendar} />
    </ul>
  );
}
