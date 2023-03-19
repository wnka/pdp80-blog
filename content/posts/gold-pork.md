---
title: "Good Shmup Timing"
date: 2023-03-18T18:43:01-08:00
draft: false
code: true
---

When you blow up bosses in Muchi Muchi Pork with lard shot, all their bullets turn into medals that you can vacuum up. The more bullets on the screen the better, so you've got to make things hard for yourself to get those big points. You don't know how much health a boss has left so it can be hard to get the timing right because you might run out of lard before you've damaged the boss enough. Resource management! When you get it right and you're showered with medals, its *soooo satisfying*. 

This is the midboss of stage 2. Getting the timing right on this one is pretty easy, you can just attack it and use music cues to time when to switch over to lard. 

{{< videogif src="/videos/medals.mp4" width="512">}}

This is from the stage 4 boss. I don't know how to time this right every time, but here a video of me getting lucky.

{{< videogif src="/videos/st4gold.mp4" width="512">}}

The main point of this post was so I could play with looping videos on here.

```bash
# -an removes audio
ffmpeg -i ~/Desktop/st4gold.mp4 -movflags faststart -pix_fmt yuv420p -vf "scale=240:320" -an st4gold.mp4
```

Then the HTML comes out to be:
```html
<video autoplay loop muted playsinline width="512">
  <source src="/videos/medals.mp4" type="video/mp4">
  <p>Your browser doesn't support this embedded video.</p>
</video>
```
