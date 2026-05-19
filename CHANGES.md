# Mobile Login Button Fix — Update Instructions

## What's changed

Two files were modified in `src/components/Nav.astro`:

1. **Added mobile Login link.** A new `<a class="nav-login-mobile">Login</a>`
   element is rendered between `.nav-actions` and the burger button.
   It's `display: none` by default and switches to `display: inline-flex`
   inside `@media (max-width: 900px)`. On the desktop Login still lives
   inside `.nav-actions` as before.

2. **Get Started link** now points to `/register` (matched against your
   currently deployed repo). If you intend `/contact`, just edit
   `Nav.astro` line ~35 back to `/contact`.

3. Mobile drawer (`#mobileDrawer`) got an extra `<li><a href="/login">Login</a></li>`
   entry — appears when the burger is opened.

The `dist/` folder is included in this archive, already rebuilt with both
changes.

## How to push to your GitHub repo (metax678/999-new)

### Option A — replace files in the repo via web UI

The smallest change: just replace `src/components/Nav.astro` in the repo.
Go to https://github.com/metax678/999-new/blob/main/src/components/Nav.astro,
hit the pencil icon, paste the content of `src/components/Nav.astro` from
this archive, commit to main. Vercel will pick up the push and rebuild
within ~1 minute.

You probably also want to push the updated `dist/` if your repo is
configured to deploy from a pre-built dist (which it appears to be, given
that `dist/` is committed). Drop the `dist/` folder from this archive
into the repo too.

### Option B — push from local clone

```bash
git clone https://github.com/metax678/999-new.git
cd 999-new
# unzip this archive over the repo, overwriting Nav.astro and dist/
git add src/components/Nav.astro dist/
git commit -m "fix: show Login button on mobile nav"
git push origin main
```

## After deploying

Open the deployed site in **incognito mode** (browser cache will hold
the old CSS otherwise). Resize the window to ≤900px width. Login will
appear in the nav, right between the logo and the burger icon.

## Files in this archive

- `src/components/Nav.astro` — the only edited source file
- `dist/` — rebuilt static output (already contains the fix)
- everything else — untouched from your project
