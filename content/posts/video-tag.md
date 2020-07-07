---
title: "Video Tag"
date: 2020-06-13T12:40:42-07:00
draft: false
code: true
---

I read [this article](https://www.dannyguo.com/blog/serve-videos-instead-of-gifs/) about serving up videos instead of GIFs to save on bandwidth costs so I wanted to give it a shot. Here's a nice video of my [JAMMA input display](/posts/jamma-input-display/) that I originally captured as a GIF.

{{< videogif "/videos/input_display.mp4">}}

The original GIF of the above is **1.1MB**. The mp4 is **27KB**, or **97%** smaller! That's amazing!

## Conversion

On my Mac, I had to use this command to create the video:

```bash
ffmpeg -i input_display.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" input_display.mp4
```

If I didn't use those fancy options the video was corrupted and Firefox couldn't play it.

## Hugo Shortcode

To easily put these videos into blog posts, I created a [Hugo Shortcode](https://gohugo.io/content-management/shortcodes/) called `videogif` to easily embed `.mp4` files.

```html
<video autoplay loop muted playsinline>
  <source src="{{ .Get 0 }}" type="video/mp4">
  <p>Your browser doesn't support this embedded video.</p>
</video>
```

To insert these into a blog post, all I need to do is:

```text
{{</* videogif "/videos/input_display.mp4" */>}}
```
