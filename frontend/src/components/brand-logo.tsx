import Image from "next/image";
import Link from "next/link";

export default function BrandLogo() {
    return (
        <Link href="/" aria-label="Medora home">
            <Image
                src="/BrandLogo.png"
                alt="Medora"
                width={160}
                height={60}
                priority
                className="h-auto w-40 object-contain"
            />
        </Link>
    );
}