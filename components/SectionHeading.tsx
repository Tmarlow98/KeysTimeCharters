import { ReactNode } from 'react';

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  as?: 'h2' | 'h3';
};

/**
 * Consistent section header used across the homepage.
 * Keeps spacing + type scale uniform without fighting Tailwind every time.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  as: Tag = 'h2',
}: Props) {
  const alignment =
    align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Tag className="mt-3 text-3xl font-semibold leading-[1.1] sm:text-4xl md:text-[2.5rem]">
        {title}
      </Tag>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-700 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
