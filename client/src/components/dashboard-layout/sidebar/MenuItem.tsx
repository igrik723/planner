import Link from "next/link";
import { IMenuItem } from "./menu.interface";

export function MenuItem({item}: {item: IMenuItem}) {
    return (
        <div>
            <Link
                className="flex gap-2.5 items-center  px-layout mt-2 transition-colors hover:bg-border rounded-lg"
                href={item.link}
            >
                <item.icon />
                <span>{item.name}</span>
            </Link>
        </div>
    )
}

