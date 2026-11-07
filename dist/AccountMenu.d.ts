import { type ReactNode } from "react";
import { type CassoUser } from "./Avatar.js";
export type SignOut = (
/** A link, e.g. your sign-in service's logout URL. */
{
    href: string;
}
/** A same-origin POST, e.g. the app's own /api/logout. */
 | {
    action: string;
}) & {
    /** The line under "Sign out". Defaults to "Of <app> and your other apps" (true when sign-out
     * ends a shared session); set it when the app's sign-out only ends its own session (e.g. "Of Atlas"). */
    hint?: string;
};
/**
 * The account menu: a round photo that opens a card with who you are, the app's own items (children,
 * usually <MenuItem>s) and Sign out. It is a <details>, so it opens without JavaScript; the script only
 * closes it on an outside click, on Escape and after following a link in it.
 */
export declare function AccountMenu({ user, app, signOut, children, }: {
    user: CassoUser | null;
    /** The app's name, used in "Sign out of <app>". */
    app: string;
    signOut: SignOut;
    children?: ReactNode;
}): import("react").JSX.Element;
/** A row that runs an action instead of navigating (e.g. a theme toggle). Closes the menu after. */
export declare function MenuButton({ label, hint, icon, onClick, }: {
    label: string;
    hint?: string;
    icon?: ReactNode;
    onClick: () => void;
}): import("react").JSX.Element;
