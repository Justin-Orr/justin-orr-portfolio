import Logo from "@/components/Logo";
import NavbarLink from "@/components/NavbarLink";
import { poppins } from "@/app/ui/fonts";

export default function Navbar() {
    return(
            <nav className={`absolute top-0 inset-x-0 z-50 flex justify-center items-center border-b border-white/20 py-9 ${poppins.className} antialiased`}>
                <div className="mr-15">
                    <Logo />
                </div>
                <div>
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