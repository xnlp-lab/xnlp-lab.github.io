# X-NLP Lab

A multi-page academic lab website designed for GitHub Pages.

## Included pages

- Home
- People
- Papers
- News
- Projects
- Activities
- Connections
- Join us

## Deployment

1. Upload all files in this folder to your GitHub repository.
2. Enable **GitHub Pages** in repository settings.
3. Set the deployment branch to `main` (root).
4. Open the published site URL.

## Main edit point

Most site content is stored in:

- `assets/js/data.js`

You can edit:

- Lab name
- Institution
- Intro text
- People
- Papers
- News
- Projects
- Connections
- Recruiting info
- Visitor map widget URL

## Visitor map

The Home page uses a MapMyVisitors flat world map widget by default.  
If it does not appear in your browser, privacy extensions may be blocking third-party scripts.

To replace the widget, edit:

```js
mapWidgetSrc
```

inside `assets/js/data.js`.

## Notes

- This site is fully static and suitable for GitHub Pages.
- Replace placeholder names, links, and logos with your real information.
