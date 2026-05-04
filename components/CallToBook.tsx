import Link from 'next/link';
import { site } from '@/lib/site';

type Props = { className?: string };

export default function CallToBook({ className = 'btn-primary' }: Props) {
  return (
    <>
      {/* Mobile: tap to call */}
      <a href={site.phoneHref} className={`${className} md:hidden`}>
        Call to Book
      </a>
      {/* Desktop: go to contact page */}
      <Link href="/contact" className={`${className} hidden md:inline-flex`}>
        Call to Book
      </Link>
    </>
  );
}
