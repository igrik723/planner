import type { PropsWithChildren } from "react";
import { Sidebar } from "./sidebar/Sidebar";
import { Header } from "./header/Header";


export default function DashboardLayout({ children }: PropsWithChildren<unknown>) {
    return (
        <div
            className="grid min-h-screen 2xl:grid-cols-[1.1fr_6fr] grid-cols-[2fr_6fr]"
        >
            <Sidebar />
            <main className="p-big-layout overflow-x-hidden max-h-srceen relative">
                <Header/>
                {children}
            </main>
        </div>
    )
}

