import type { ReactNode } from "react";

export type ChipTone = "ok" | "warn" | "bad";

/** A small worded label, e.g. an environment ("production") or a state ("Operational"). Never colour alone. */
export function Chip({ tone, children }: { tone?: ChipTone; children: ReactNode }) {
  return <span className={tone ? `casso-chip casso-chip--${tone}` : "casso-chip"}>{children}</span>;
}

/**
 * The signed-out screen every app shares: a quiet centred card with the wordmark (and an optional chip beside it),
 * one line of context, then the actions (children: a primary `casso-btn`, any secondary option), and a way back.
 */
export function SignInCard({
  wordmark,
  chip,
  lead,
  back,
  children,
}: {
  /** Usually <Wordmark name="…" />. */
  wordmark: ReactNode;
  /** E.g. <Chip tone="bad">production</Chip>. */
  chip?: ReactNode;
  /** One line, e.g. "Sign in to the site manager." */
  lead?: ReactNode;
  /** A link back, e.g. { href: "/", label: "Back to the site" }. */
  back?: { href: string; label: string };
  children: ReactNode;
}) {
  return (
    <main className="casso-signin">
      <div className="casso-signin__card">
        <div className="casso-signin__head">
          {wordmark}
          {chip}
        </div>
        {lead && <p className="casso-signin__lead">{lead}</p>}
        <div className="casso-signin__body">{children}</div>
        {back && (
          <div className="casso-signin__foot">
            <a href={back.href}>{back.label}</a>
          </div>
        )}
      </div>
    </main>
  );
}
