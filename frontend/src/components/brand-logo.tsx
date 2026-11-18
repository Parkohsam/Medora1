
import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
    showName?: boolean;
}

export default function BrandLogo({
    showName = true,
}: BrandLogoProps) {
    return (
        <Link href="/" className="inline-flex items-center">
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