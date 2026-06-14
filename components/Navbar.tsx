import Link from "next/link";
import NavbarButton from "@/components/NavbarButton";

const navContainerStyling = " mx-auto flex max-w-7xl items-center justify-between px-6 py-8";
const logoLinkStyling = " text-xl font-semibold tracking-wide text-white";
const navLinkStyling = "hidden md:flex gap-10";

export default function Navbar() {
    return(
        <nav className={navContainerStyling}>
            <Link href="/" className={logoLinkStyling}>
                JO
            </Link>
            <div className={navLinkStyling}>
                <NavbarButton linkName="Home" urlPath="/"/>
                <NavbarButton linkName="Skills" urlPath="/skills"/>
                <NavbarButton linkName="Experience" urlPath="/experience"/>
                <NavbarButton linkName="Services" urlPath="/services"/>
                <NavbarButton linkName="Projects" urlPath="/projects"/>
                <NavbarButton linkName="About" urlPath="/about"/>
                <NavbarButton linkName="Contact" urlPath="/contact"/>
            </div>
        </nav>
    );
}