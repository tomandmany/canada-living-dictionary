import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
    return (
        <header className="bg-red-500 text-white p-4 flex justify-between items-center sticky top-0 z-header">
            <Link href="/" className="text-2xl font-bold">
                カナダ生活図鑑
            </Link>
            <HamburgerMenu className="ml-auto" />
        </header>
    )
}