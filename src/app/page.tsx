import Image from 'next/image';
import { BulletListFirst, BulletListSecond } from '../components/BulletList';
import { HeadingSecond } from '../components/Heading';
import ArticleCard from '../components/ArticleCard';
import ArticleEvaluation from '../components/ArticleEvaluation';
import { InstagramNormal, InstagramGradient } from '../components/icons/InstagramIcon';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import SearchArticleSection from '../components/layouts/header/SearchArticleSection';

export default function Home() {
  return (
    <main>
      <SearchArticleSection />
      <section className='w-full flex flex-col items-center bg-section-pink border-y-4 border-[#FFCFCE] gap-4 py-6'>
        <Image
          src="/title.png"
          alt="カナダ生活図鑑"
          width={300}
          height={50}
          className="max-w-xs sm:max-w-md"
          priority
        />
        <strong className='border-b-4 border-[#FFA9A8] px-4'>これさえあればガイドブックがいらない</strong>
        <p className='text-center text-[#FB8080]'>
          買い物・節約術・基礎情報まで
          <br />
          全てここで手に入るようサイトを作成しました。
          <br />
          カナダでの生活を一緒に楽しみましょう。
        </p>
        <a href="" className='bg-[#FF9090] text-white flex items-center gap-2 px-6 py-4 rounded-full'>
          <InstagramNormal />
          <span>最新情報はInstagramから</span>
        </a>
      </section>
      <section className='w-full flex flex-col items-center gap-4 py-6'>
        <HeadingSecond>ABOUT US</HeadingSecond>
        <p className='text-center'>
          中の人の思いをかく（4, 5文）
          <br />
          バンクーバーを拠点に、
          <br />
          20xx年から初めて、こういう目的で～
          <br />
          読者が信頼感を感じられるような文
        </p>
      </section>
      <section className='w-full flex flex-col items-center px-8 py-6 bg-section-pink'>
        <HeadingSecond>LET&apos;S ENJOY CANADA</HeadingSecond>
        <BulletListFirst text={'イベント開催'} className='mt-8'>
          <BulletListSecond>
            <li>初めてカナダにきて不安な人も、日本人が運営するイベントだから安心して参加しやすい。どなたでも気軽に国際交流ができます！</li>
            <li>
              <Link href={'/'} className='underline'>詳しくはこちら</Link>
            </li>
          </BulletListSecond>
        </BulletListFirst>
        <BulletListFirst text={'生活事典'}>
          <BulletListSecond>
            <li>カナダ生活で困ったときに使える便利な情報を集めています。事典のようにお使いください！</li>
            <li>例えば、お買得情報や節約術など実際にカナダで生活するうえで役立つ情報が盛りだくさん。</li>
            <li>最新情報はインスタで<a href="/" className='underline'>チェック</a></li>
          </BulletListSecond>
        </BulletListFirst>
      </section>
      <section className='w-full flex flex-col items-center gap-4 py-8'>
        <section className='flex flex-col items-center'>
          <HeadingSecond>生活辞典</HeadingSecond>
          <p className='mt-2 mb-4 text-center'>現地での生活で役立つお得情報や節約術などをご紹介</p>
          <div className='flex flex-wrap justify-center gap-4'>
            <ArticleCard url={'/'} heading='ダララマで安い7選' date='2024/07/15'>
              <ArticleEvaluation text='節約' starNum={4} />
              <ArticleEvaluation text='交通の便' starNum={4} isLast />
            </ArticleCard>
            <ArticleCard url={'/'} heading='カナダのごみ分別' date='2024/07/15'>
              <ArticleEvaluation text='節約' starNum={5} />
              <ArticleEvaluation text='カナダ愛' starNum={5} isLast />
            </ArticleCard>
          </div>
          <Link href={'/'} className='flex items-center ml-auto mt-2 border-b border-black'>
            More <ArrowRight />
          </Link>
        </section>
        <section className='flex flex-col items-center'>
          <HeadingSecond>食卓辞典</HeadingSecond>
          <p className='mt-2 mb-4 text-center'>
            おすすめのスーパーや食材、
            <br />
            現地で買える材料を使用した節約レシピを紹介
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <ArticleCard url={'/'} heading='ダララマで安い7選' date='2024/07/15'>
              <ArticleEvaluation text='節約' starNum={4} />
              <ArticleEvaluation text='交通の便' starNum={4} isLast />
            </ArticleCard>
            <ArticleCard url={'/'} heading='カナダのごみ分別' date='2024/07/15'>
              <ArticleEvaluation text='節約' starNum={5} />
              <ArticleEvaluation text='カナダ愛' starNum={5} isLast />
            </ArticleCard>
          </div>
          <Link href={'/'} className='flex items-center ml-auto mt-2 border-b border-black'>
            More <ArrowRight />
          </Link>
        </section>
        <section className='flex flex-col items-center'>
          <HeadingSecond>娯楽辞典</HeadingSecond>
          <p className='mt-2 mb-4 text-center'>
            現地で楽しめるシーズンイベントや観光情報をご紹介
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <ArticleCard url={'/'} heading='ダララマで安い7選' date='2024/07/15'>
              <ArticleEvaluation text='節約' starNum={4} />
              <ArticleEvaluation text='交通の便' starNum={4} isLast />
            </ArticleCard>
            <ArticleCard url={'/'} heading='カナダのごみ分別' date='2024/07/15'>
              <ArticleEvaluation text='節約' starNum={5} />
              <ArticleEvaluation text='カナダ愛' starNum={5} isLast />
            </ArticleCard>
          </div>
          <Link href={'/'} className='flex items-center ml-auto mt-2 border-b border-black'>
            More <ArrowRight />
          </Link>
        </section>
      </section>
      <section className='w-full flex flex-col items-center px-8 py-6 bg-section-pink'>
        <HeadingSecond>LET&apos;S ENJOY CANADA</HeadingSecond>
        <div className='bg-[#D9D9D9] rounded-2xl p-4 flex gap-4 mt-6'>
          <div className='w-[100px] aspect-square bg-gray-400' />
          <div className='flex flex-col'>
            <div className='flex items-center gap-4'>
              <div className='bg-[#0FC0DF] text-white p-2'>Wasabi</div>
              <div className='flex gap-2'>
                <span>2024/07/15</span>
                <span>14:00~</span>
              </div>
            </div>
            <span className='text-xl flex items-center my-auto justify-start px-6'>Picnic</span>
          </div>
        </div>
        <div className='bg-[#D9D9D9] rounded-2xl p-4 flex gap-4 mt-6'>
          <div className='w-[100px] aspect-square bg-gray-400' />
          <div className='flex flex-col'>
            <div className='flex items-center gap-4'>
              <div className='bg-[#0FC0DF] text-white p-2'>Wasabi</div>
              <div className='flex gap-2'>
                <span>2024/07/15</span>
                <span>14:00~</span>
              </div>
            </div>
            <span className='text-xl flex items-center my-auto justify-start px-6'>Language exchange</span>
          </div>
        </div>
      </section>
      <section className='bg-[#F26F70] flex items-start text-white gap-10 p-10 justify-center'>
        <span className='h-fit my-auto'>Follow　ー</span>
        <div className='flex flex-col items-center gap-2'>
          <a href='/' className='bg-white rounded-full p-2'>
            <InstagramGradient />
          </a>
          <span className='text-[12px] text-center'>生活辞典</span>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <a href='/' className='bg-white rounded-full p-2'>
            <InstagramGradient />
          </a>
          <span className='text-[12px] text-center'>
            Meetup
            <br />
            - wasabi -
          </span>
        </div>
      </section>
    </main>
  );
}