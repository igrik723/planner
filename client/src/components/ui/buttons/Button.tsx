import cn from 'clsx'
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type TypeBotton = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
    children,
    className,
    ...rest
}: PropsWithChildren<TypeBotton>) {
    return (
        <button
            className={cn(
                'lenear rounded-lg bg-transparent border border-primary py-2 px-7 text-base font-medium text-white transition hover:bg-primary active:bg-brand-700',
                className
            )}
            {...rest}
        >
            {children}
        </button>
    )
}