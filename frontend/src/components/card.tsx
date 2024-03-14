import { title } from "process"
import { ReactNode } from "react"

interface CardProps {
    children: ReactNode,
    title: string
}

export const Card = ({
    children,
    title
}: CardProps) => {
    return (
        <div className="rounded shadow w-[30rem] p-5 h-full">
            <header>
                <h1 className="font-semibold text-lg text-slate-900">{title}</h1>
            </header>
            <div className="w-full h-1 rounded-full mb-3 bg-slate-700" />
            <div>
                {children}
            </div>
        </div>

    )
}