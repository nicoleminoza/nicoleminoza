# Nicole Miñoza — Professional Site

Static site. No build step. Two pages:

- `index.html` — executive brand page (homepage)
- `timeline.html` — full professional timeline

## Files
```
index.html              Homepage (brand page)
timeline.html           Professional timeline
tweaks-app.jsx          Tweaks panel logic (homepage only)
tweaks-panel.jsx        Tweaks panel UI components
assets/
  nicole-portrait.jpg   Hero photo (default)
  nicole-portrait-2.jpg Alternate photo (Tweaks → Portrait B)
  nicole-portrait-3.jpg Alternate photo (Tweaks → Portrait C)
```

## Publish with GitHub Pages
1. Create a new GitHub repository and upload **all** of these files, keeping the folder
   structure (the `assets/` folder must stay a subfolder).
2. In the repo: **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Select branch `main` and folder `/ (root)`, then **Save**.
5. Wait ~1 minute. Your site will be live at
   `https://<your-username>.github.io/<repo-name>/`.

The homepage loads at the root; the timeline is at `…/timeline.html`.

## Notes
- Everything runs as static files over HTTPS — no server or build needed.
- React, Babel, and Google Fonts load from public CDNs, so an internet connection
  is required to view the pages.
- To set your real contact address, replace `hello@nicoleminoza.com` in `index.html`.
- To change the default hero photo, swap which file `assets/nicole-portrait.jpg` is,
  or edit the `<img id="portrait" src="...">` in `index.html`.
