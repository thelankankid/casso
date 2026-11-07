import type { ElementType, ReactNode } from "react";
export type NavLink = {
    href: string;
    label: string;
    current?: boolean;
};
/**
 * The app header every app on Casso shares: the wordmark (a link home) on the left; the app's own links,
 * any small note, then the account menu on the right. Sticky, translucent, one hairline underneath.
 * No state, so it renders on the server.
 */
export declare function AppHeader({ wordmark, homeHref, homeLabel, nav, linkAs: Anchor, navRow, children, }: {
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
}): import("react").JSX.Element;
/** A small quiet line in the header, e.g. "as of Nov 7". */
export declare function HeaderNote({ children }: {
    children: ReactNode;
}): import("react").JSX.Element;
