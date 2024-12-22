---
Categories:
  - gaming
title: Game Streaming
date: 2024-12-21T17:53:38.000Z
draft: false
---

I'm sitting in a hotel in Grand Junction, CO using my iPad Pro to remotely play games on my gaming PC sitting my house in Seattle, WA and it works pretty damn well. I just played some [Mushihimesama Futari](https://en.wikipedia.org/wiki/Mushihimesama_Futari), which is a really hard shmup where any input lag is *very* noticable. Was it noticable with this setup? Yes absolutely, but it was playable. I made it to the middle of stage 3 on Original mode while being incredibly rusty.

{{< figure src="/images/IMG_5672.jpeg" alt="Hey" caption="The iPad is great for playing vertically oriented shmups!" >}}

It's pretty amazing stuff. I use it **a lot** at home since we only have one TV and I can't be playing super violent games like [Doom Eternal](/posts/doom-eternal/) with my daughter around. I stream to my iPad and use a [nice bluetooth controller](https://www.amazon.com/PC-Multi-Platform-NS-TV-Android-Laptop/dp/B0D7ZRXBY4) and AirPods Pro for sound. My PC is on a wired ethernet connection and my iPad is on WiFi and the lag is virtually unnoticable. At home I can stream at 120hz since my iPad Pro supports it! Right now though since I'm geographically far away at the moment I'm limiting myself to 1080p and 60hz.

On the server I use the [Apollo](https://github.com/ClassicOldSong/Apollo) fork of [Sunshine](https://app.lizardbyte.dev/Sunshine/?lng=en) which has some nice add-ons like Virtual Display support. The Virtual Display makes handling unique client resolutions easy since connecting a client is like plugging in another monitor with that resolution and refresh rate. This helps with actually filling the iPad display edge-to-edge instead of trying to cram/scale the existing physical display and leaving borders. The client is [Moonlight](https://moonlight-stream.org/) which is available for a bunch of platforms. I use it on iOS, macOS, and Steam Deck with great success. For getting into my home network I use [Tailscale](https://tailscale.com/).

It's really handy for taking full-on big PC gaming on the go. The lag can be an issue, but not all games need zero lag. Relax and play some [Tiny Glade!](https://store.steampowered.com/app/2198150/Tiny_Glade/)

🤔 If you're a shmup nerd, you might be thinking "wait a second, how is he playing Futari on PC!?!" The [Xenia XBox 360 emulator](https://github.com/xenia-canary/xenia-canary) runs the game incredibly well! The slowdown is even pretty accurate! I own a legit copy that I imported when it came out in 2009. Wow, that's 15 years ago... still a favorite!
