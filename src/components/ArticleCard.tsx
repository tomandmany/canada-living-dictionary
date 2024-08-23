import Link from "next/link";

type ArticleCardProps = {
    url: string,
    heading: string,
    date: string,
    children: React.ReactNode
}

export default function ArticleCard({ url, heading, date, children }: ArticleCardProps) {
    return (
        <Link href={url} className='bg-[#FFF3F3] flex flex-col items-center p-4 rounded-2xl'>
            <div className='bg-gray-400 w-56 aspect-square border-4 border-[#9EC2FF]' />
            <h3 className='text-2xl font-bold my-2'>{heading}</h3>
            <span className='w-fit ml-auto mb-4'>{date}</span>
            {children}
        </Link>
    )
}