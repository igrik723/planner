import { Heading } from "@/components/ui/Heding";
import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import { Metadata } from "next";
import { TimeBlocking } from "./TimeBlocking";


export const metadata: Metadata = {
    title: 'Time blocking',
    ...NO_INDEX_PAGE
}

export default function PomodoroPage() {
    return (
        <div>
            <Heading title="Time blocking" />
            <TimeBlocking/>
        </div>
    )
}