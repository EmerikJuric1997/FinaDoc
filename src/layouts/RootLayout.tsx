"use client";
import { Outlet } from "react-router-dom";
import { SidebarComponent } from "../components/Sidebar";
import { NavbarComponent } from "../components/Navbar";

export function RootLayout() {
  return (
    <>
      <NavbarComponent />
      <div className="flex">
        <SidebarComponent />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default RootLayout


