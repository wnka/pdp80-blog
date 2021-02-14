---
title: "MiSTer FPGA First Impressions"
date: 2021-02-13T20:13:22-08:00
draft: false
---

From the [MiSTer wiki](https://github.com/MiSTer-devel/Main_MiSTer/wiki):

> MiSTer is an open project that aims to recreate various classic computers,
> game consoles and arcade machines, using modern hardware. It allows software
> and game images to run as they would on original hardware, using peripherals
> such as mice, keyboards, joysticks and other game controllers.

This thing is pretty neat!

It uses an FPGA to recreate old game hardware. Supposedly this is more 'accurate' than an emulator, which maybe is true, but emulators are great enough. I find a lot of retro folks talking about 'accuracy' to be like audiophiles talking about the 'warmth' of analog or whatever.

Now here's where I'll contradict myself, because why did I buy one of these then? One word: *accuracy*. More specifically though, video output accuracy.

### Scanlines, Resolutions, Up/Down Scaling

I own two arcade cabinets and I like being able to play games on them. I've got [quite a few PCBs](/pcb/), but they take up space, require maintainence, and swapping games takes time. So, I've always liked running MAME or whatever in my arcade cabinet to be able to play lots of different stuff. However, getting the video to look right is a real pain.

Arcade monitors take a 240p 15khz video signal. Some games will output 320x240, some games will output 384x224. Some games run at 60Hz refresh rate, some run at 57.2hz. So, how do you get MAME to deal with this? The answer is typically you don't: you get MAME to output 640x480 as that's as low as most modern PC graphics cards will go. Then you take that signal, and pump it into a downscaler that will scale that down to 320x240.

How does it look? Well, if you do it just right, it looks great. The original game is outputting 320x240, which MAME then doubles to 640x480, which the downscaler then divides to get 320x240. If you line everything up right the output is a nice crisp image. If you don't line everything up right it's a big sloppy mess. If you're off by a scanline, you'll be undoubling two different scanlines which will average them together and it'll look real blurry.

This isn't that hard when the arcade game originally was 320x240, but what about when it's 384x224? Well, you gotta do some math. Vertically, you need to scale the game by a factor of 1.071428571 so that 224 becomes 240, which will then double to 480 and ...

See, this all sucks. The refresh rates get all screwed up too: "Translating" 57.2hz to a 60hz signal means either running the game too fast or having it stutter.

### MiSTer Analog output

The best thing about the MiSTer is that it will just output the arcade native 240p signal which you can feed directly into an arcade monitor and it will be *accurate*. It handles goofy resolutions like 384x224 and goofy refresh rates like 57.2hz. You don't have to fiddle with *anything*. It just works because the video output is dumb, I don't think there's even a framebuffer.

It does consoles and old computers too, which also have goofy resolutions. An Atari 2600 outputs 160x192. A Super Nintendo outputs 256x224.

There are devices for a Raspberry Pi that supposedly will handle some of this weirdness. I got a Pi2JAMMA but I never actually got it to work because if there's one thing I hate it's trial-and-erroring feeding weird video signals to a monitor.

### Other Niceties

1. Scaled HDMI output for those that don't want to mess with CRTs and stuff. The really cool thing is that it will output *simultaneously* to analog and HDMI.
1. It runs Linux and you can SSH into it. Great for copying files to/from it.
1. Compatible with every USB controller I've tried with it.

### Now Playing

Anyway, so what am I actually playing on this thing?

1. **Dangun Feveron** (Arcade) - A (gasp) shmup from Cave. This game is fucking awesome, so awesome that it got a PS4 port in Japan.
1. **Prince of Persia** (SNES) - This version is very different than the PC version. I got reminded of it from an [excellent episode](https://archive.org/details/dde355ba029f5570cb7bf61d820407e0) of the excellent show [GameCenter CX](https://en.wikipedia.org/wiki/GameCenter_CX).
1. **Stampede** (Atari 2600) - I got this for my birthday when I was like 5 and when I opened it at my birthday party I walked away from all the other presents and the party because I was so stoked to play it. How rude!
1. **Gorf** (Arcade) - Loved this as a kid and played it a lot on C64, perhaps my first shmup? Playing it now though I see that it's a pretty crappy game.
1. **Earl Weaver Baseball** (Amiga) - Growing up my whole neighborhood played this game, we'd do tournaments and stuff. Still fun!

### Resources

1. [update-all script](https://github.com/theypsilon/Update_All_MiSTer) - Will update all the things to the latest things!
1. [MiSTer FPGA Forum](https://misterfpga.org/) - It's a forum!
1. [nullobject Patreon](https://www.patreon.com/nullobject) - Working on the Cave core (big deal for us shmup fans).
1. [Jose Tejada Patreon](https://www.patreon.com/topapate) - Creates many arcade cores, including Capcom CPS1 and many others.
1. [MiSTer Addons](http://misteraddons.com/) - Shop where I bought mine.
