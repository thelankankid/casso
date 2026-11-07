# Casso

A small shared look for a family of web apps: the [principles](PRINCIPLES.md), the design tokens, and the parts every
app shows the same way: the app header, the account menu, the avatar and the wordmark. Named for Picasso; craft
and beauty, kept short.

Public on purpose: it holds no secrets, so every app (and Vercel, and CI) installs it straight from GitHub, with
no registry and no token.

## Use it

Install a release by its commit on `main` (the release notes list it):

```bash
npm install github:thelankankid/casso#<commit>
```

That adds `"@thelankankid/casso": "github:thelankankid/casso#<commit>"` to `package.json`. A one-line bump moves an
app to a newer release.

Load the CSS once, at the root:

```ts
import "@thelankankid/casso/casso.css"; // tokens + components
```

Then the header. The parts render on the server (`AccountMenu` is a small client component):

```tsx
import { AppHeader, AccountMenu, Wordmark } from "@thelankankid/casso";

<AppHeader wordmark={<Wordmark name="atlas" />} homeLabel="Atlas home">
  <AccountMenu user={session} app="Atlas" signOut={{ href: logoutUrl() }} />
</AppHeader>
```

- `user` is the signed-in person (`email`, `name`, `picture`), e.g. from a Google sign-in session.
- `signOut` is `{ href }` for a link (your sign-in service's logout) or `{ action }` for a same-origin POST.
- `signOut` takes an optional `hint` for the line under "Sign out". The default, "Of <app> and your other apps",
  fits a sign-out that ends a shared session; an app that ends just its own session says so (`hint: "Of Atlas"`).
- Children of `AccountMenu` are the app's own items: `<MenuItem href label hint icon />` for links,
  `<MenuButton label onClick />` for actions (it closes the menu), and `<MenuSeparator />` between groups.
- Pass the app's router link as `as={Link}` on `MenuItem` and `linkAs={Link}` on `AppHeader` so they navigate
  client-side.
- `AppHeader` takes `nav={[{ href, label, current }]}` for the app's own links and any other children (such as
  `<HeaderNote>`) before the menu.

### Tokens

`tokens.css` defines `--casso-*` variables for both themes: `bg`, `surface`, `line`, `text`, `muted`, `hover`,
`selected`, `shadow`, `ok`/`warn`/`bad` (and `-soft`), `font`, `radius-*`, `max`. Map an app's own variables onto
them instead of copying values:

```css
:root { --bg: var(--casso-bg); --text: var(--casso-text); }
```

In Tailwind 4: `@theme { --color-bg: var(--casso-bg); … }`. Dark is the default; light follows the system, and
`<html data-theme="light|dark">` pins either.

The photo comes from Google, so an app with a CSP needs `img-src https://lh3.googleusercontent.com`.

### Without React

The same classes work in plain HTML. [`demo/index.html`](demo/index.html) is the header and an open menu, ready to
copy. Use `<details class="casso-account">`, so the menu opens without JavaScript, and add
`dist/account-menu.js` (a plain script, no dependencies) to close it on an outside click, on Escape and after a
link is clicked.

An app with no build step keeps copies of `dist/casso.css` and `dist/account-menu.js` in its public folder and
a test that fails when a copy differs from the installed package, so a bump can't drift. React is an optional peer,
so a CSS-only app doesn't install it.

## Change it

```bash
npm ci
npm run check   # typecheck, build dist/, fail if dist/ was stale
```

`dist/` is committed, because apps install from a tag or commit without building. Open `demo/index.html` to see a change
in both themes. To release: bump `version` in `package.json`, merge, then tag `vX.Y.Z` on main. Breaking a prop or a
class name means a new minor version while we're on 0.x.

See [AGENTS.md](AGENTS.md) for the rules.
