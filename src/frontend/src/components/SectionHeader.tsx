interface SectionHeaderProps {
  title: string;
  linkLabel?: string;
  linkHref?: string;
}

export function SectionHeader({
  title,
  linkLabel,
  linkHref,
}: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold text-brand border-l-4 border-gold pl-3">
        {title}
      </h2>
      {linkLabel && linkHref && (
        <a
          href={linkHref}
          className="text-sm text-gold hover:text-gold-dark font-medium transition-colors flex items-center gap-1"
          data-ocid="section.link"
        >
          {linkLabel} &rsaquo;
        </a>
      )}
    </div>
  );
}
