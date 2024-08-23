import type { Metadata } from "next";
import { HeadingSecond } from "../../components/Heading";
import { BulletListFirst } from "../../components/BulletList";

export const metadata: Metadata = {
  title: "カナダ生活辞典",
  description: "カナダ生活に必要な情報をまとめたサイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col justify-center items-center p-20 gap-10">
      <HeadingSecond>カナダの小銭特集</HeadingSecond>
      {/* <Image src="/title.png" alt="カナダ生活図鑑" width={300} height={50} className="max-w-xs sm:max-w-md" priority></Image> */}
      <div className="grid place-items-center">
        <div className="max-w-[400px] w-full aspect-[4/3] bg-gray-400 mb-6" />
        <div className="border border-[#FFA9A8] p-4 w-full mb-8">
          <h3>目次</h3>
          <BulletListFirst text="XXX" />
          <BulletListFirst text="XXX" />
          <BulletListFirst text="XXX" />
          <BulletListFirst text="XXX" />
        </div>
        <h2 className="border p-4 w-full bg-[#487A35] text-white">大見出し</h2>
        <h3 className="border p-4 w-full text-[#487A35]">見出し</h3>
        <h4 className="border p-4 w-full">小見出し</h4>
        <p className="p-4">
          カナダは物価の高い国として知られています。
          <br />
          そこでお得に食品を買うことができるスーパー5選を紹介します！
        </p>
      </div>
      {children}
    </main>
  );
}