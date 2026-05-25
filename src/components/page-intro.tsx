interface PageIntroProps {
  eyebrow: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function PageIntro({ eyebrow, title, description, children }: PageIntroProps) {
  return (
    <section className="pageIntro">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
      </div>
      {description && <p className="pageDescription">{description}</p>}
      {children}
    </section>
  );
}
