import { Link } from 'react-router-dom';

type Variant = 'primary' | 'accent' | 'ghost' | 'white';

interface ButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  href?: string;
  to?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    'border border-ink text-ink hover:bg-ink hover:text-cream',
  accent:
    'border border-accent text-accent hover:bg-accent hover:text-white',
  ghost:
    'border border-border text-ink-secondary hover:border-ink hover:text-ink',
  white:
    'border border-white text-white hover:bg-white hover:text-ink',
};

export default function Button({
  children,
  variant = 'primary',
  href,
  to,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}: ButtonProps) {
  const base =
    'inline-block px-8 py-3.5 text-xs tracking-widest uppercase font-body transition-all duration-300 cursor-pointer';
  const classes = `${base} ${variantClasses[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
