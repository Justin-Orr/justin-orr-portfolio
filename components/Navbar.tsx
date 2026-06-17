import Logo from "@/components/Logo";
import NavbarButton from "@/components/NavbarButton";
import "@/styles/Navbar.css";

//const navContainerStyling = "mx-auto flex max-w-7xl items-center justify-between px-6 py-8";
//const logoLinkStyling = "text-xl font-semibold tracking-wide text-white";
//const navLinkStyling = "hidden md:flex gap-10";

export default function Navbar() {
    return(
        <nav id="navContainer">
            <Logo />
            <div>
                <NavbarButton linkName="SKILLS" urlPath="/skills"/>
                <NavbarButton linkName="EXPERIENCE" urlPath="/experience"/>
                <NavbarButton linkName="SERVICES" urlPath="/services"/>
                <NavbarButton linkName="PROJECTS" urlPath="/projects"/>
                <NavbarButton linkName="ABOUT" urlPath="/about"/>
                <NavbarButton linkName="CONTACT" urlPath="/contact"/>
            </div>
        </nav>
    );
}