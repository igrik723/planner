'use client'

import { authService } from "@/services/auth.service"
import { useMutation } from "@tanstack/react-query"
import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

export function LogoutButton() {
    const router = useRouter()

    const {mutate} = useMutation({
        mutationFn: () => authService.logout(),
        onSuccess: () => router.push('/auth')
    })

    return (
        <div className="absolute top-1 right-1">
            <button className="opacity-30 hover:opacity-100 duration-300 transition-opacity"
                onClick={() => mutate()}
            >
                <LogOut size={20}/>
            </button>
        </div>
    )
}