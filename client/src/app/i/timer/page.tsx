import { Heading } from "@/components/ui/Heding"
import { NO_INDEX_PAGE } from "@/constants/seo.constants"
import { Metadata } from "next"
import { Pomodoro } from "./Pomodoro"



export const metadate: Metadata = {
    title: 'Pomodoro timer',
    ...NO_INDEX_PAGE
}

export default function PomodoroPage() {
    return (
        <div>
            <Heading title="Pomodoro timer" />
            <Pomodoro/>
        </div>
    )
}