import type { ElementType, ReactNode } from "react";

// Menu rows with no browser state, so a server component can render them (and pass its router Link as `as`).

/**
 * One row in the account menu: a link with an optional line icon and a quieter hint under the label.
 * `as` swaps the anchor for the app's router link (e.g. Next's Link) so the row navigates client-side.
 */
export function MenuItem({
  href,
  label,
  hint,
  icon,
  current,
  as: Anchor = "a",
}: {
  href: string;
  label: string;
  hint?: string;
  icon?: ReactNode;
  current?: boolean;
  as?: ElementType;
}) {
  return (
    <Anchor className="casso-menu__item" href={href} aria-current={current ? "page" : undefined}>
      {icon}
      <RowText label={label} hint={hint} />
    </Anchor>
  );
}

/** A hairline between groups of the app's own rows. */
export function MenuSeparator() {
  return <div className="casso-menu__sep casso-menu__sep--inset" role="separator" />;
}

export function RowText({ label, hint }: { label: string; hint?: string }) {
  return (
    <span>
      <span className="casso-menu__label">{label}</span>
      {hint && <span className="casso-menu__hint">{hint}</span>}
    </span>
  );
}

