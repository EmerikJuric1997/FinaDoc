"use client";
import { Sidebar } from "flowbite-react";
import { Link } from "react-router-dom";
import { sidebarLinks } from "../logic/Static.ts"


export function SidebarComponent() {
  return (
    <Sidebar className="h-screen fixed flex sidebar-text static pt-8">
      <Link to="/">
        <img
          className="p-5 h-24 w-24 object-contain rounded-full mx-auto"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKdTTAj0C-Iq3PVQ_mpi05dmhsfGjyuWE2Gg&s"
          alt="Profile picture" />
      </Link>
      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {sidebarLinks.map(link => (
            <Sidebar.Item className={link.color} as={Link} to={link.link} key={link.id} icon={link.icon}>
              {link.text}
            </Sidebar.Item>
          ))}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
export default SidebarComponent