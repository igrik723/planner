'use client'

import { useLocalStorage } from "@/hooks/useLocalStorage"
import { ListView } from "./list-view/ListView"
import { Loader } from "@/components/ui/Loader"
import { SwictherView } from "./SwitcherView"
import { KanbanView } from "./kanban-view/KanbanView"

export type TypeView = 'list' | 'kanban'

export function TasksView() {
    const [type, setType, isLoading] = useLocalStorage<TypeView>(
        {
            key: 'view-tyape',
            defaultValue: 'list'
        }
    )
    
    if (isLoading) return <Loader />
    

    return (
        <div>
            <SwictherView
                setType={setType}
                type={type}
            />
            {type === 'list' ? 
                <ListView/> : <KanbanView/>
            }
        </div>
    )
}