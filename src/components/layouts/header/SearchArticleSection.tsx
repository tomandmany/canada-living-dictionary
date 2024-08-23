import { ChevronRight } from "lucide-react";
import SearchArticleItem from "./SearchArticleItem";

export default function SearchArticleSection() {
  return (
    <section className='flex items-center gap-[5vw] justify-center relative px-12 py-4'>
      <SearchArticleItem href={'/living'} text='生活辞典' />
      <SearchArticleItem href={'/amusement'} text='娯楽辞典' />
      <SearchArticleItem href={'/gourmet'} text='食卓辞典' />
      <SearchArticleItem href={'/other'} text='その他' />
      <ChevronRight className='text-gray-400 absolute right-0' />
    </section>
  )
}