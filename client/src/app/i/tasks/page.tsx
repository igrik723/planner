import { Heading } from "@/components/ui/Heding"
import { NO_INDEX_PAGE } from "@/constants/seo.constants"
import { Metadata } from "next"
import { TasksView } from "./TasksView"


export const metadate: Metadata = {
    title: 'Tasks',
    ...NO_INDEX_PAGE
}

export default function TasksPage() {
    return <div>
        <Heading title="Tasks" />
        <TasksView/>
    </div>
}