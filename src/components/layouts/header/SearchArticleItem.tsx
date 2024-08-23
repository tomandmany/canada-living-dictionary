import Link from "next/link";

type SearchArticleItemProps = {
    href: string;
    text: string;
}

export default function SearchArticleItem({href, text}: SearchArticleItemProps) {
    return (
        <Link href={href} className='flex justify-center items-center gap-x-4 gap-y-1 flex-wrap'>
            <div className='w-10 aspect-square bg-gray-400' />
            <span>{text}</span>
        </Link>
    )
}