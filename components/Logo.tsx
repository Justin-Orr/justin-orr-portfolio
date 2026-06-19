import Link from "next/link";
import "@/styles/Underline.css";
import { gradientTextStyling } from "@/app/ui/fonts";

export default function Logo() {
    return(
        <Link href="/" className="text-3xl">
            <span className="text-(--accent-cyan)">&lt;</span>
            <span id="logoSubstring" className="underline-effect">Justin</span>
            <span className={gradientTextStyling}>Orr</span>
            <span className="text-(--accent-purple)"> /</span>
            <span className="text-(--accent-cyan)">&gt;</span>
        </Link>
    );
}