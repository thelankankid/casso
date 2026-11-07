"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { RowText } from "./MenuItem.js";
import { Avatar, type CassoUser } from "./Avatar.js";

export type SignOut = (
  /** A link, e.g. your sign-in service's logout URL. */
  | { href: string }
  /** A same-origin POST, e.g. the app's own /api/logout. */
  | { action: string }
) & {
  /** The line under "Sign out". Defaults to "Of <app> and your other apps" (true when sign-out
   * ends a shared session); set it when the app's sign-out only ends its own session (e.g. "Of Atlas"). */
  hint?: string;
};

/**
 * The account menu: a round photo that opens a card with who you are, the app's own items (children,
 * usually <MenuItem>s) and Sign out. It is a <details>, so it opens without JavaScript; the script only
 * closes it on an outside click, on Escape and after following a link in it.
 */
export function AccountMenu({
  user,
  app,
  signOut,
  children,
}: {
  user: CassoUser | null;
  /** The app's name, used in "Sign out of <app>". */
  app: string;
  signOut: SignOut;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const close = () => {
      el.open = false;
    };
    const onDown = (e: PointerEvent) => {
      if (el.open && !el.contains(e.target as Node)) close();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && el.open) {
        close();
        el.querySelector("summary")?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      if ((e.target as Element).closest?.(".casso-menu a")) close();
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    el.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
      el.removeEventListener("click", onClick);
    };
  }, []);

  const name = user?.name || user?.email || "Not signed in";
  return (
    <details ref={ref} className="casso-account">
      <summary aria-label="Account menu">
        <Avatar user={user} size={36} />
      </summary>
      <div className="casso-menu">
        <div className="casso-menu__who">
          <Avatar user={user} size={44} />
          <div>
            <div className="casso-menu__name">{name}</div>
            {user?.name && <div className="casso-menu__email">{user.email}</div>}
          </div>
        </div>
        {children && (
          <>
            <div className="casso-menu__sep" />
            <div className="casso-menu__group">{children}</div>
          </>
        )}
        <div className="casso-menu__sep" />
        <div className="casso-menu__group">
          {"href" in signOut ? (
            <a className="casso-menu__item" href={signOut.href}>
              <SignOutIcon />
              <SignOutLabel hint={signOut.hint ?? defaultHint(app)} />
            </a>
          ) : (
            <form method="post" action={signOut.action}>
              <button type="submit" className="casso-menu__item">
                <SignOutIcon />
                <SignOutLabel hint={signOut.hint ?? defaultHint(app)} />
              </button>
            </form>
          )}
        </div>
      </div>
    </details>
  );
}

/** A row that runs an action instead of navigating (e.g. a theme toggle). Closes the menu after. */
export function MenuButton({
  label,
  hint,
  icon,
  onClick,
}: {
  label: string;
  hint?: string;
  icon?: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className="casso-menu__item"
      onClick={(e) => {
        onClick();
        const menu = e.currentTarget.closest("details");
        if (menu) menu.open = false;
      }}
    >
      {icon}
      <RowText label={label} hint={hint} />
    </button>
  );
}

const defaultHint = (app: string) => `Of ${app} and your other apps`;

function SignOutLabel({ hint }: { hint: string }) {
  return <RowText label="Sign out" hint={hint} />;
}

function SignOutIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
    </svg>
  );
}
