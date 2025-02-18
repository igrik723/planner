import { Heading } from "@/components/ui/Heding";
import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import { Metadata } from "next";
import { Settings } from "./Settings";

export const metadata: Metadata = {
    title: 'settings',
    ...NO_INDEX_PAGE
}

export default function SettingsPage() {
    return <div>
        <Heading title="Settings" />
        <Settings/>
    </div>
}