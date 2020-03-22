---
title: "Video Game Music"
date: 2020-03-21T10:55:16-07:00
Categories: ["music"]
---
I like listening to instrumental music that's repetitive when I'm working so I listen to a lot of video game music. It's designed to be looped over and over, plus there's a lot of great video game music! I figured I'd share how I listen and some of my favorites.

[VGMPlay](https://github.com/vgmrips/vgmplay) is a nice command line player that emulates sound chips used by consoles and different arcade hardware. There are some sites where you can get songs in `.vgz` format with an `.m3u` playlist, which you feed into VGMPlay and the jams start pumpin'. It isn't terribly well documented, but you can find the default `.ini` file [here](https://github.com/vgmrips/vgmplay/blob/master/VGMPlay/VGMPlay.ini) which you copy into the same directory as `vgmplay` and alter to your taste. To increase the number of loops per song, change `MaxLoops` in the `.ini` to some hexadecimal value, it defaults to `0x02` (or two loops), I pump that up to 4, so `0x04` which causes each song to loop more times.

## Places to get music files

1. [VGMRIPS](https://vgmrips.net) for arcade games. Some console stuff, but mostly NES.
1. [Project2612](https://project2612.org) for Genesis/Mega Drive music.
1. [SMS Power](http://www.smspower.org/Music/VGMs) for Sega Master System.

## Some personal favorites

1. Battle Garegga - Arcade - [YouTube](https://www.youtube.com/watch?v=1BK5ACIbJRI) / [vgmplay](https://vgmrips.net/packs/pack/battle-garegga-toaplan-2)
1. Cave Story - PC/Various - [YouTube](https://www.youtube.com/watch?v=HFbr3kjReok)
1. Cho Ren Sha 68k - Sharp x68000/PC - [YouTube](https://www.youtube.com/playlist?list=PLA7E90B6A7F3A3750)
1. Darius - Arcade - [YouTube](https://www.youtube.com/watch?v=d-cIbTQfog4) / [vgmplay](https://vgmrips.net/packs/pack/darius-arcade)
1. Fantasy Zone II - Arcade - [YouTube](https://www.youtube.com/watch?v=1BK5ACIbJRI ) / [vgmplay](https://vgmrips.net/packs/pack/fantasy-zone-ii-dx-sega-system-16c)
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

I keep this script in the folder with all my music files, it will continually pick a random `.m3u` playlist.

```bash
while true; do
    vgmplay "`find . -name "*.m3u" | gshuf -n 1`"
    echo "Press Q to exit, any other key to reshuffle:\c"
    read input
    if [[ $input = "q" ]] || [[ $input = "Q" ]]
        then exit 1
    else
        echo "on to the next one"
    fi
done
```

## Diggin' in the Carts

Red Bull Music Academy did a great documentary series on video game music which can be found [on YouTube](https://www.youtube.com/watch?v=vBb59ZUkJao&list=PLtbJmr1Wtatc_k8o8tIgt3A5bvbFoutBG). Recommended.
