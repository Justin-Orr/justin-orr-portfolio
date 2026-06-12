import NavbarButton from "@/components/NavbarButton";

export default function Navbar() {
    return(
        <nav>
            <NavbarButton linkName="Home" urlPath="/"/>
            <NavbarButton linkName="Skills" urlPath="/skills"/>
            <NavbarButton linkName="Experience" urlPath="/experience"/>
            <NavbarButton linkName="Services" urlPath="/services"/>
            <NavbarButton linkName="Projects" urlPath="/projects"/>
            <NavbarButton linkName="About" urlPath="/about"/>
            <NavbarButton linkName="Contact" urlPath="/contact"/>
        </nav>
    );
}