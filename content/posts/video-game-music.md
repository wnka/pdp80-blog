---
title: "Video Game Music"
date: 2020-03-21T10:55:16-07:00
Categories: ["music"]
code: true
---
When I'm working, I like listening to repetitive instrumental music to minimize
distraction.  Video game music works really well for this since it's designed to
be background music that can be looped over and over. Thankfully there are lots
of video game music fans that have uploaded soundtracks to YouTube that you can easily pull up and listen to. Also, Red Bull Music Academy did a
great documentary series called *Diggin' in the Carts* which can be found [on YouTube](https://www.youtube.com/watch?v=vBb59ZUkJao&list=PLtbJmr1Wtatc_k8o8tIgt3A5bvbFoutBG)
that I **highly recommend.**

I figured I'd share how I listen as well as some of my favorite music.
[VGMPlay](https://github.com/vgmrips/vgmplay) is a nice command line player that
emulates the sound chips used by consoles and arcade hardware. It uses `.vgz`
files which contain samples and instructions to the sound hardware emulated by
VGMPlay. The files are nice and small: my entire library is only about 160MB.

VGMPlay isn't terribly well documented, but you can find the default `.ini` file
[here](https://github.com/vgmrips/vgmplay/blob/master/VGMPlay/VGMPlay.ini) which
you copy into the same directory as `vgmplay` and alter to your taste. To
increase the number of loops per song, change `MaxLoops` in the `.ini` to a higher
hexadecimal value. It defaults to `0x02` (or two loops), I pump that up to `0x04`
which causes the desired amount of repetition.

## Places to get music files

1. [VGMRIPS](https://vgmrips.net) for arcade games. Some console stuff, but mostly NES.
1. [Project2612](https://project2612.org) for Genesis/Mega Drive music.
1. [SMS Power](http://www.smspower.org/Music/VGMs) for Sega Master System.

## Some personal favorites

I included YouTube links as an easy way to listen. The VGMPlay links typically
include an `.m3u` playlist that you can give to `vgmplay` to hear the whole
soundtrack.

1. Battle Garegga - Arcade - [YouTube](https://www.youtube.com/watch?v=1BK5ACIbJRI) / [vgmplay](https://vgmrips.net/packs/pack/battle-garegga-toaplan-2)
1. Cave Story - PC/Various - [YouTube](https://www.youtube.com/watch?v=HFbr3kjReok)
1. Cho Ren Sha 68k - Sharp x68000/PC - [YouTube](https://www.youtube.com/playlist?list=PLA7E90B6A7F3A3750)
1. Darius - Arcade - [YouTube](https://www.youtube.com/watch?v=d-cIbTQfog4) / [vgmplay](https://vgmrips.net/packs/pack/darius-arcade)
1. Fantasy Zone II - Arcade - [YouTube](https://www.youtube.com/watch?v=s5hCOsYQhZ4) / [vgmplay](https://vgmrips.net/packs/pack/fantasy-zone-ii-dx-sega-system-16c)
1. Gimmick! - NES/Famicom - [YouTube](https://www.youtube.com/watch?v=aU0GEcU63qw) / [vgmplay](https://vgmrips.net/packs/pack/gimmick-family-computer)
1. Lagrange Point - NES/Famicom - [YouTube](https://www.youtube.com/watch?v=drwX7MbB_IE) / [vgmplay](https://vgmrips.net/packs/pack/lagrange-point-family-computer)
1. M.U.S.H.A. - Genesis/Mega Drive - [YouTube](https://www.youtube.com/watch?v=HmkXl2u4Zuc) / [vgmplay](https://project2612.org/details.php?id=320)
1. Phantasy Star - SMS FM version - [YouTube](https://www.youtube.com/watch?v=sivhm5KRa8A) / [vgmplay](https://www.smspower.org/Games/PhantasyStar-SMS)
1. Raiden Fighters 2 - Arcade - [YouTube](https://www.youtube.com/watch?v=adq4kQd19Js&list=PL-vD6rIjXrcIem1KHAy_9PGAYZk_aremX) / [vgmplay](https://vgmrips.net/packs/pack/raiden-fighters-2-operation-hell-dive-seibu-spi-system)
1. Recca - NES/Famicom - [YouTube](https://www.youtube.com/watch?v=QbdDW3aSCyM) / [vgmplay](https://vgmrips.net/packs/pack/summer-carnival-92-recca-family-computer)
1. Revenge of Shinobi - Genesis/Mega Drive - [YouTube](https://www.youtube.com/watch?v=-ekCndckJfU) / [vgmplay](https://project2612.org/details.php?id=135)
1. Ridge Racer - Arcade/PSX - [YouTube](https://www.youtube.com/watch?v=h3_s3Lqvdcs&list=PL5MAATZlrqOhGQ6trLJ-iFCg2_TrGuEOU&index=10) / [vgmplay](https://vgmrips.net/packs/pack/ridge-racer-namco-system-22)
1. Street Fighter II - Arcade - [YouTube](https://www.youtube.com/watch?v=LQw-a8sApLQ&list=PL60138D0ECA664BF7) / [vgmplay](https://vgmrips.net/packs/pack/street-fighter-ii-the-world-warrior-cp-system)
1. Streets of Rage 2 - Genesis/Mega Drive - [YouTube](https://www.youtube.com/watch?v=gGJGOv8HS5c) / [vgmplay](https://project2612.org/details.php?id=56)
1. Strider - Arcade - [YouTube](https://www.youtube.com/watch?v=DgBLKfy5ErI) / [vgmplay](https://vgmrips.net/packs/pack/strider-arcade)

## Play Script

I keep this script in the Dropbox folder with all my music files, it will
continually pick a random `.m3u` playlist.

```bash
#!/bin/bash
OIFS="$IFS"
IFS=$'\n'
for i in `find . -name "*.m3u" | gshuf`; do
    vgmplay $i
    echo "Press q to exit or any key to continue"
    # Timeout after 3 seconds to keep the party rolling
    read -n 1 -t 3 input
    if [[ $input = "q" ]] || [[ $input = "Q" ]]
        then exit 1
    fi
done
IFS="$OIFS"
```
