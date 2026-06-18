import Link from "next/link";
import "@/styles/Underline.css";

const lastNameStyling="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#936ffa] to-[#28dde5]";

export default function Logo() {
    return(
        <Link href="/" className="text-3xl">
            <span className="text-[#28dde5]">&lt;</span>
            <span id="logoSubstring" className="underline-effect">Justin</span>
            <span className={lastNameStyling}>Orr</span>
            <span className="text-[#936ffa]"> /</span>
            <span className="text-[#28dde5]">&gt;</span>
        </Link>
    );
}