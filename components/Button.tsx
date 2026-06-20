import Link from "next/link";

const defaultStyling = "text-xl px-6 py-3 border border-solid";

type ButtonProps = {
  children: React.ReactNode;
  className?: string,
  href?: string;
};

export default function Button({
  children,
  href,
  className = defaultStyling,
}: ButtonProps) {
  if (href) {
    return (
      <Link href={href} className={`${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${className}`}>
      {children}
    </button>
  );
}