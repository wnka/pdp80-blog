---
title: "One Page, One Request"
date: 2022-04-30T09:25:15-07:00
draft: false
---

I have a weird obsession with my website: I want a page load to be a single HTTP request.

I'm not even sure if this is a good thing, I'm sure there are benefits to be had by parallel downloads, caching, blah blah. But who cares, it doesn't have to make sense, it's my website and I'll do what I want.

BTW this doesn't apply to pages that have images. Images are additional requests. 

### Inlined Favicon using an Emoji

My `favicon.ico` used to be a red square that was a `.png` file. That's additional request. Unacceptable!

Even if your HTML doesn't reference a favicon, browsers will still look for one at `favicon.ico` and if there isn't one at there it's a wasted HTTP request that returns `404 Not Found`. Unacceptable!

The solution is to define one in the `<head>` of your HTML. You can inline it by base64 encoding an image, but I found that you can just use an emoji.

```html
<link rel="icon"
      href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%3E%3Ctext%20x='0'%20y='14'%3E🍩%3C/text%3E%3C/svg%3E"
      type="image/svg+xml" />
```

The `href` is just "data:image/svg+xml," plus this URL encoded:

```html
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><text x='0' y='14'>🍩</text></svg>
```

It's just a donut emoji! I don't fully understand the `viewBox` and `text` offsets, but hey that's what works. It doesn't show in Safari, but at least it doesn't make a request for `favicon.ico` so mission roughly accomplished. [caniuse.com](https://caniuse.com/?search=link-icon-svg) shows the full browser compatibility story.

### Inlining CSS

I still write CSS in a separate file as part of my site theme and use a feature of [Hugo](https://gohugo.io/) to inline it when the site is generated. In my theme's `<head>` Hugo template:

```html
<style>
    {{ $css := resources.Get "/css/pdp.css" | minify }}
    {{ $css.Content | safeCSS }}
</style>
<style>
    {{ $css := resources.Get "/css/code.css" | minify }}
    {{ $css.Content | safeCSS }}
</style>
```

Easy! Convenient! I use one `.css` file for my site styling and one for code block styling. If I really wanted to go nuts, I could not include the code CSS unless there was code on the page.

### No trackers

No Google Analytics or anything like that. I try to block all those things, so why would I put them on my own site? No one reads this site anyway, or maybe I'm massively popular. The world will never know!

### Output Page Size

How large is the download for the home page of this site? We can use `curl` to get the download size.

```bash
❯ curl https://pdp.dev -w '%{size_download}' -so /dev/null
38086
```

37kb. Not bad! Most browsers use `Accept-Encoding: gzip` or equivalent to request compressed resources. How large is the download with compression?
```bash
curl --compressed https://pdp.dev -w '%{size_download}' -so /dev/null
6784
```

7kb. Even young me with a 28.8kb dialup connection would be happy with that.

What about the longest post I've written ([Japan Trip 2018](/posts/japan-2018))? Raw: 38kb. Compressed: 14kb. Compression ratio went down considerably, probably because the home page is a list of links which is mostly HTML tags that compress better than my prose.

It's fun doing weird stuff like this!
