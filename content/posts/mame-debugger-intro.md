---
title: "MAME Debugger Intro"
date: 2023-01-17T19:48:30-08:00
draft: false
code: true
---

MAME, the arcade machine emulator, has a debugger that allows you to poke around memory, manipulate values, and extract data to display in an overlay. I've always wanted to play around with it but didn't really know what to do or how to do it.

I love shmups and I watch people play them on Twitch. It's a small community and there is an ["STG Shmups" category on Twitch](https://www.twitch.tv/directory/game/STG%20Shmups) where you can find streams. My favorite shmup streamer is probably [Aquas](https://www.twitch.tv/aquas) and he's been playing Pink Sweets. He was playing it in MAME and he has this overlay that shows a bunch of internal game data. For example, bosses in Pink Sweets don't have life bars so you don't know how close you are to killing them but for scoring purposes you want to try and kill them during a specific bullet pattern. The overlay he had showed the boss hit points, which is super helpful to understand how fast your dealing damage and how to time all that stuff. It also showed things like upcoming item drops and what your *rank* is, which again are all internal things that you have to have an idea of mentally as the game doesn't show them to you.

**THIS IS AWESOME**

I didn't know you could build an overlay like this in MAME, but it makes sense. It especially makes sense for vertical shmups as you have a lot of empty space on modern displays that you can fill with info. The [M2 ShotTriggers series](https://m2stg.com/en/), which ports shmups to modern consoles, does a great job of this. Their first release in the series was Battle Garegga, a game that has all kinds of internal state that really benefits from this.

Anyway, I've never gotten into Pink Sweets, but I **LOVE** Muchi Muchi Pork, which runs on the same hardware. So, could I take the Pink Sweets overlay and make one for Muchi Muchi Pork? The answer is **yes**, but it's not easy. The overlay needs to know where certain values live in memory, and even though it's the same hardware platform things are in different places in memory. This is where the MAME debugger and cheats come in.

MAME has a cheat system, which basically is an XML file that tells the emulator "hey for every loop in the game logic, set these memory locations in this way." If you want infinite lives, find where the counter for lives is stored and always set it to something > 0. The counter won't decrement when you die and game will never think you have reached zero lives. Here's an example for infinite lives in Muchi Muchi Pork, which I found online:

``` xml
<mamecheat version="1">
  <cheat desc="P1 Infinite Lives">
    <script state="run">
      <action>maincpu.pb@C510D2B=05</action>
    </script>
  </cheat>
</mamecheat>
```

This is saying "set memory location 0x0C510D2B to 5 every frame". If you put this in a file at `<mame dir>/cheat/mmpork.xml` and then run MAME with cheats enabled (`./mame mmpork -cheat`), you can pull up the cheat menu and turn this on and you've got infinite lives. Nice job destroying any fun you might have with the game.

You find these values using the MAME debugger. I'm going to walk through the tools that I found the most helpful.

``` text
What's the problem
```

yea ok.
