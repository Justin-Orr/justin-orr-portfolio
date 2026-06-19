import { Poppins } from 'next/font/google';
import { Space_Grotesk } from 'next/font/google';

export const gradientTextStyling="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-(--accent-purple) to-(--accent-cyan)";


export const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "600", "700"],
});

export const space_grotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});