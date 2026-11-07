import type { ElementType, ReactNode } from "react";
/**
 * One row in the account menu: a link with an optional line icon and a quieter hint under the label.
 * `as` swaps the anchor for the app's router link (e.g. Next's Link) so the row navigates client-side.
 */
export declare function MenuItem({ href, label, hint, icon, current, as: Anchor, }: {
    href: string;
    label: string;
    hint?: string;
    icon?: ReactNode;
    current?: boolean;
    as?: ElementType;
}): import("react").JSX.Element;
/** A hairline between groups of the app's own rows. */
export declare function MenuSeparator(): import("react").JSX.Element;
export declare function RowText({ label, hint }: {
    label: string;
    hint?: string;
}): import("react").JSX.Element;
