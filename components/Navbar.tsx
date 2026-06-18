import Logo from "@/components/Logo";
import NavbarLink from "@/components/NavbarLink";

export default function Navbar() {
    return(
        <nav className="flex justify-center items-center border-b border-white/30 py-9">
            <div className="mr-10">
                <Logo />
            </div>
            <div className="">
                <NavbarLink linkName="SKILLS" urlPath="/skills"/>
                <NavbarLink linkName="EXPERIENCE" urlPath="/experience"/>
                <NavbarLink linkName="SERVICES" urlPath="/services"/>
                <NavbarLink linkName="PROJECTS" urlPath="/projects"/>
                <NavbarLink linkName="ABOUT" urlPath="/about"/>
                <NavbarLink linkName="CONTACT" urlPath="/contact"/>
            </div>
        </nav>
    );
}