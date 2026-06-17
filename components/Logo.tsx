import Link from "next/link";
import "@/styles/Logo.css";

const firtNameStyling="font-normal underline-effect";
const lastNameStyling="text-transparent bg-clip-text bg-gradient-to-r from-[#936ffa] to-[#28dde5]";

export default function Logo() {
    return(
        <Link href="/" className="font-semibold text-3xl">
            <span className="text-[#28dde5]">&lt;</span>
            <span className={firtNameStyling}>Justin</span>
            <span className={lastNameStyling}>Orr</span>
            <span className="text-[#936ffa]"> /</span>
            <span className="text-[#28dde5]">&gt;</span>
        </Link>
    );
}