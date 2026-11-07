# Principles

How every app on Casso looks and reads. Casso writes the rules down and ships the pieces, so the apps stay one
family. When an app breaks a rule, either fix the app or change the rule here.

## Quiet by default

- **One typeface.** Inter, self-hosted, everywhere: headings, body, numbers. Numbers use tabular figures, not a
  monospace face.
- **Sentence case.** "Top picks", "Sign out", "All systems operational". No Title Case, no UPPERCASE or tracked-out
  labels.
- **Borderless content.** Cards are a surface colour on the page colour, with large soft corners. Only things that
  float (menus, sheets, popovers) get a hairline and the one shadow (`--casso-shadow`).
- **Few colours.** Ink, muted ink, two neutrals. Colour is for meaning only: ok, warn, bad.
- **A word next to every colour.** A status is never colour alone: "Operational" in green, never a bare green dot.
- **Light and dark.** Both, following the system unless the person picks one. Every colour comes from a token, so
  both themes come free.

## The frame every app shares

- **The header.** The wordmark on the left links home. On the right: the app's own links as quiet pills (the
  current one filled), any small note, then the account menu last. 56px tall, sticky and translucent, with one
  hairline underneath. Use `AppHeader`.
- **The account menu.** Your Google photo (else your initial) in a circle. It opens a card: photo, name and email,
  then the app's own items, then "Sign out" with "Of <app> and your other apps" under it, because the session
  is shared. Use `AccountMenu`.
- **No email or "Sign out" text in the header.** That lives in the menu.
- **The signed-out screen.** One quiet centred card: the wordmark (and a chip such as the environment), one line
  saying what you're signing in to, the main action as the primary button, any other way in as a quiet option, and
  a way back. Use `SignInCard`.

## Wordmarks

- The app's name in lowercase Inter 600 with tight tracking (−0.04em).
- An app may replace its first letter with a mark that says what it is: a home app's first letter can be a
  gable, a monitor's an eye. Draw it to Inter 600's metrics (x-height 0.546em, stem 0.135em) in `currentColor`, so the
  word stays one even band. The favicon is the same mark on a tile.
- An app without a mark yet uses the plain word (`<Wordmark name="atlas" />`).

## Words

- Plain and short. Say what a thing does, not how great it is.
- Name things by what people call them ("Saved", "Rent"), not by the code's name.
- Errors say what happened and what to do next.

## Interaction

- One tap for the common action, with Undo after, rather than a confirm dialog before.
- Menus close on an outside click, on Escape, and after you pick something.
- Hit targets at least 32px; focus is always visible.
- Motion is short (under 200ms) and stops when the system asks for reduced motion.
