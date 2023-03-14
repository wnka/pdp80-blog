---
title: "Gold Pork"
date: 2023-03-10T20:43:01-08:00
draft: true
code: true
---

{{< videogif src="/videos/medals.mp4" width="512">}}

{{< videogif src="/videos/st4gold.mp4" width="512">}}

```bash
# -an removes audio
ffmpeg -i ~/Desktop/st4gold.mp4 -movflags faststart -pix_fmt yuv420p -vf "scale=240:320" -an st4gold.mp4
```

