---
title: "MiSTer + MT32-pi"
date: 2022-02-27T12:43:45-08:00
draft: false
---
I continue to enjoy my [MiSTer](https://github.com/MiSTer-devel/Main_MiSTer/wiki) as more and more folks are building cores for it. Things I played on it recently:

1. [Castlevania: Rondo of Blood](https://en.wikipedia.org/wiki/Castlevania:_Rondo_of_Blood) - A Turbografx-16/PC Engine CD game that only came out in Japan. I played it all the way through, pretty fun game. I was inspired by [GameCenter CX](https://en.wikipedia.org/wiki/GameCenter_CX) ([ep1](https://archive.org/details/game-center-cx-297-castlevania-rondo-of-blood-part-1), [ep2](https://archive.org/details/game-center-cx-298-castlevania-rondo-of-blood-part-2)).
2. [Cho Ren Sha 68k](https://en.wikipedia.org/wiki/Cho_Ren_Sha_68K) - [My last post](/posts/cho-ren-sha-1all/) was about clearing this game, which is on the [Sharp X68000](https://en.wikipedia.org/wiki/X68000) computer. The core for that machine continues to mature.
3. [Castlevania: Symphony of the Night](https://en.wikipedia.org/wiki/Castlevania:_Symphony_of_the_Night) - I never owned a PlayStation 1 but had friends that had them and this is a game a friend and I played a lot. I've never beat it but I'm currently slowly working my way through it. The [PS1 core](https://github.com/MiSTer-devel/PSX_MiSTer) is really coming along and after playing Rondo of Blood I wanted to beat this.
4. PC games! There's a core that provides a 486SX (I'm guessing no DX because it would be hard to do a math copro in FPGA but I'm just guessing) which allows me to revisit a lot of games I used to play on my 386DX/25. King's Quest! Police Quest! Syndicate! ETC! I haven't really buckled down and played anything for real other than booting them up and going 'oh yea memories' and moving on.

When I was a kid our 386DX had an original [SoundBlaster card](https://en.wikipedia.org/wiki/Sound_Blaster) that we then upgraded to a [Pro Audio Spectrum 16](https://en.wikipedia.org/wiki/Media_Vision_Pro_AudioSpectrum). I always remember seeing that [Roland MT-32](https://en.wikipedia.org/wiki/Roland_MT-32) option in all these games, and seeing one of those crazy expensive setups at Fry's Electronics. Well, that was ~30 years ago and that tech can now easily be replicated by a Raspberry Pi and a $40 MT-32 "hat" that can be used by a MiSTer thanks to the [mt32-pi project](https://github.com/dwhinham/mt32-pi).

I, like many nerds, happened to have a spare Raspberry Pi laying around so all I needed was the hat. [LegacyPixels](https://www.legacypixels.com/mister/index.html) sells them from their 'oh so web 1.0' website so I ordered one and it came super fast, great site, recommended, thanks Ken! The [setup is super easy](https://github.com/dwhinham/mt32-pi/wiki/MiSTer-FPGA) and in no time I had it hooked up and recognized by my MiSTer. The Pi is even powered off the MiSTer and you just need one cable to provide power + I/O which is *really* slick.

I fired up a few games to hear some nice tunes and the old Sierra adventure games sound great, LucasArts adventure games sound great. It also works with the Sharp X68000 core and so far I've mainly used it to play [Gradius II](https://en.wikipedia.org/wiki/Gradius_II), which is a soundtrack I really dig and it sounds great on MT-32. X68000 is also known for great ports of Capcom CPS1 games, so I'm excited to checkout those soundtracks on the MT-32. The X68000 and CPS1 are basically the same hardware and I recall reading that X68000 workstations were was CPS1 games were developed on, which explains their high quality ports.

If you want to hear what I'm talking about, there are plenty of videos on YouTube that folks have posted that demonstrate all this.

1. [Gradius II](https://www.youtube.com/watch?v=lSDAXi7CJtU)
2. [MiSTer FPGA + MT32-pi: A Medley of PC Game Intros](https://www.youtube.com/watch?v=fpAGnr6aSeg)

It's great to see MiSTer continue to add more support for more cool stuff!
