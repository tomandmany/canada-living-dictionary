// app/page.tsx

import GridBackground from "./_components/GridBackground";

export default function Page() {
    return (
        <main className="overflow-hidden bg-[#FF8D8D] w-full h-full relative flex">
            <GridBackground />
            <div className="w-full h-full grid place-items-center relative">
                <h1 className="text-4xl">今日の投稿</h1>
                <div className="rounded-lg bg-[#D2DCF0] border border-black p-4 pb-10 gap-4 flex flex-col items-center">
                    <div className="flex items-center gap-2 w-full">
                        <div className="rounded-full w-10 aspect-square bg-gray-400" />
                        <span className="text-sm">@reallygreatsite</span>
                    </div>
                    <div className="w-72 aspect-square bg-gray-400" />
                    <span className="text-white text-lg">NEW POST</span>
                </div>
                <span className="text-lg">タップで飛ぶよ</span>
            </div>
        </main>
    );
}
