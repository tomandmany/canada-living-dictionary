import Link from "next/link";
import { ArticleCardType } from "../app/_components/RecommendArticles";

type ArticleCardProps = {
    articleCard: ArticleCardType,
    children: React.ReactNode
}

export default function ArticleCard({ articleCard, children }: ArticleCardProps) {
    return (
        <Link href={articleCard.url} className='bg-[#FFF3F3] flex flex-col items-center p-4 rounded-2xl'>
            <div className='bg-gray-400 w-56 aspect-square border-4 border-[#9EC2FF]' />
            <h3 className='text-2xl font-bold my-2'>{articleCard.title}</h3>
            <span className='w-fit ml-auto mb-4'>{articleCard.date}</span>
            {children}
        </Link>
    )
}

// type ArticleCardProps = {
//     url: string,
//     title: string,
//     date: string,
//     children: React.ReactNode
// }

// export default function ArticleCard({ url, title, date, children }: ArticleCardProps) {
//     return (
//         <Link href={url} className='bg-[#FFF3F3] flex flex-col items-center p-4 rounded-2xl'>
//             <div className='bg-gray-400 w-56 aspect-square border-4 border-[#9EC2FF]' />
//             <h3 className='text-2xl font-bold my-2'>{title}</h3>
//             <span className='w-fit ml-auto mb-4'>{date}</span>
//             {children}
//         </Link>
//     )
// }