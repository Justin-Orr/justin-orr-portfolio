import Link from 'next/link'
import "@/styles/Underline.css";
import "@/styles/NavLink.css";

interface NavbarLinkProps {
    linkName: string;
    urlPath: string;
}

export default function NavbarLink({ linkName, urlPath }: NavbarLinkProps) {
    return(
        <Link href={urlPath} className="mx-4 navlink underline-effect">
            {linkName}
        </Link>
    );
}