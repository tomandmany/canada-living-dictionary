type BulletListFirstProps = {
    text: string
    children?: React.ReactNode
    className?: string
}

export function BulletListFirst({ text, children, className }: BulletListFirstProps) {
    return (
        <ul
            className={`[&>ul]:ml-[1em] [&>li]:before:content-["⚫︎"] [&>li]:before:text-xs [&>li]:before:mx-[2px] mb-6 max-w-[600px] ${className}`}
        >
            <li>
                <b>{text}</b>
            </li>
            {children}
        </ul>
    )
}

type BulletListSecondProps = {
    children: React.ReactNode
}

export function BulletListSecond({ children }: BulletListSecondProps) {
    return (
        <ul className='[&>li]:before:content-["⚪︎"] [&>li]:before:text-xs [&>li]:before:mx-[2px] [&>li]:-indent-[1em] [&>li]:pl-[1em]'>
            {children}
        </ul>
    )
}
