import Link from "next/link";
import "@/styles/Underline.css";
import "@/styles/GradientText.css"

export default function Logo() {
    return(
        <Link href="/" className="text-3xl">
            <span className="text-(--accent-cyan)">&lt;</span>
            <span id="logoSubstring" className="underline-effect">Justin</span>
            <span className="gradientText">Orr</span>
            <span className="text-(--accent-purple)"> /</span>
            <span className="text-(--accent-cyan)">&gt;</span>
        </Link>
    );
}