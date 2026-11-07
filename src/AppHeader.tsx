import type { ElementType, ReactNode } from "react";

export type NavLink = { href: string; label: string; current?: boolean };

/**
 * The app header every app on Casso shares: the wordmark (a link home) on the left; the app's own links,
 * any small note, then the account menu on the right. Sticky, translucent, one hairline underneath.
 * No state, so it renders on the server.
 */
export function AppHeader({
  wordmark,
  homeHref = "/",
  homeLabel,
  nav,
  linkAs: Anchor = "a",
  navRow = false,
  children,
}: {
  /** Usually <Wordmark name="…" />. */
  wordmark: ReactNode;
  homeHref?: string;
  /** Accessible name of the home link, e.g. "Atlas home". */
  homeLabel: string;
  nav?: NavLink[];
  /** The app's router link (e.g. Next's Link), used for the home link and nav, so they navigate client-side. */
  linkAs?: ElementType;
  /** Many sections: below 900px the nav gets its own scrolling row under the wordmark and the menu. */
  navRow?: boolean;
  /** The right-hand end: notes, then <AccountMenu> last. */
  children?: ReactNode;
}) {
  return (
    <header className={navRow ? "casso-header casso-header--nav-row" : "casso-header"}>
      <div className="casso-header__inner">
        <Anchor className="casso-header__home" href={homeHref} aria-label={homeLabel}>
          {wordmark}
        </Anchor>
        <div className="casso-header__end">
          {nav && nav.length > 0 && (
            <nav className="casso-nav" aria-label="Main">
              {nav.map((l) => (
                <Anchor key={l.href} className="casso-nav__link" href={l.href} aria-current={l.current ? "page" : undefined}>
                  {l.label}
                </Anchor>
              ))}
            </nav>
          )}
          {children}
        </div>
      </div>
    </header>
  );
}

/** A small quiet line in the header, e.g. "as of Nov 7". */
export function HeaderNote({ children }: { children: ReactNode }) {
  return <span className="casso-header__note">{children}</span>;
}
