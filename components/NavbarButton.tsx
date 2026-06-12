import Link from 'next/link' 

interface NavbarButtonProps {
    linkName: string;
    urlPath: string;
}

export default function NavbarButton({ linkName, urlPath }: NavbarButtonProps) {
    return(
        <Link href={urlPath}>{linkName}</Link>
    );
}