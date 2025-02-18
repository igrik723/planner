'use client'

import { GlobalLoader } from "./Profile/GlobalLoader"
import { Profile } from "./Profile/Profile"

export function Header() {
    return (
        <div>
            <GlobalLoader />
            <Profile/>
        </div>
    )
}