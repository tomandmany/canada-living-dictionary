type HeadingSecondProps = {
    children: React.ReactNode
}

export function HeadingSecond({ children }: HeadingSecondProps) {
    return (
        <h2 className='border-b-[6px] border-[#FFA9A8] px-4 pb-1 text-2xl font-bold'>{children}</h2>
    )
}