---
title: "MAME Debugger Intro"
date: 2023-01-17T19:48:30-08:00
draft: false
code: true
---

[MAME](https://www.mamedev.org), the arcade machine emulator, has a debugger that allows you to poke around memory and manipulate values. I've always wanted to play around with it but didn't really know what to do or how to do it.

I'm going to take a toy problem and try to solve it with the MAME debugger. I'll use Muchi Muchi Pork since it's one of my favorite shmups. You can see me clear the game in one credit [here](/posts/mmp-pb-135-mil/) and I write more about it in general [here](/posts/muchi-muchi-pork-pcb/).

## Cheats

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

This is saying "set memory location `0x0C510D2B` to `5` every frame". If you put this in a file at `<mame dir>/cheat/mmpork.xml` and then run MAME with cheats enabled (`./mame mmpork -cheat`), you can pull up the cheat menu (hit TAB) and turn this on and you've got infinite lives. Nice job destroying any fun you might have with the game.

You find these memory locations using the MAME debugger. I'm going to walk through the tools that I found the most helpful.

## Toy problem

When you insert a coin in Muchi Muchi Pork, there's timer that ticks down from 20 seconds that will automatically start your game. These timers are to prevent screen burn in since the image displayed on "press start" screen is static. Arcade operators also want any credits left in the machine to drain off so people will have to pay when they walk up.

Let's start MAME with the debugger. This is super easy, just run `./mame mmpork -debug`. You'll be greeted with a console where you can run commands. You can also open windows to examine memory (on Mac this is ⌘-D). The game will start with an initial breakpoint, so type `go` in the console to run the game. You'll see different machine register states, the program counter, etc. 

Let the game boot up and insert a coin to get to the countdown screen.

{{< figure src="/images/mmpork-debug.jpg" alt="The MAME Debugger" caption="The Muchi Muchi Pork title screen in the MAME debugger. Note the timer under 'PRESS START' says 19:29." >}}

Then in the debugger:
1. Run `cheatinit uw` which initializes the cheat search to look for **u**nsigned **w**ords (that's the `uw`) because I assume that timer is stored in a word, or 16-bits. Since that timer ticks hundredths of a second, it wouldn't fit in a byte.
2. Advance the game a frame using `gvblank`, which can be shortened the just `gv`. This runs the game for a VBLANK, which is the [vertical blanking interval](https://en.wikipedia.org/wiki/Vertical_blanking_interval), and then breaks. Think of it as a frame advance.
3. Run `cheatnext de,1` to tell the cheat search to narrow down all the memory locations you started with to something that *decremented* by 1. I'm just assuming that this timer ticks down by a value of 1. You can also use `cheatnext de` which will narrow down by locations that got decremented by any amount.
4. Repeat, `gv` and `cheatnext de,1` until the locations narrow down to something manageable.

Below is from the debugger console in MAME, the `#` are comments added by me:

``` text
MAME debugger version 0.246 (mame0246)
Currently targeting mmpork (Muchi Muchi Pork! (2007/ 4/17 MASTER VER.))
>go # start the game, let it boot, insert a coin.
>gv # get the debugger to stop.
Stopped at VBLANK
>cheatinit uw # Initialize the cheat search.
12582912 cheat locations initialized for Hitachi SH-3 (big) ':maincpu' program space
>gv # frame advance
Stopped at VBLANK
>cheatnext de,1 # narrow things down
Address=0C4841A2 Start=1032 Current=1031
Address=0C4857C6 Start=0493 Current=0492
Address=0C4C12DE Start=0015 Current=0014
Address=0C72F0FE Start=00CA Current=00C9
Address=0C72FC4E Start=0001 Current=0000
5 cheats found # wow narrowed to 5 in one frame! let see if it keeps narrowing
>gv
Stopped at VBLANK
>cheatnext de,1 # narrow again
Address=0C4841A2 Start=1032 Current=1030
Address=0C4857C6 Start=0493 Current=0491
Address=0C4C12DE Start=0015 Current=0013
3 cheats found # De La Soul told us that 3 is the magic number, so we can stop here
>cheatlist candidates.xml # write these locations to a file candidates.xml
```

The output file `candidates.xml` looks like this:
``` xml
  <cheat desc="Possibility 1: 0C4841A2 (1030)">
    <script state="run">
      <action>:maincpu.pw@0x0C4841A2=0x1032</action>
    </script>
  </cheat>

  <cheat desc="Possibility 2: 0C4857C6 (0491)">
    <script state="run">
      <action>:maincpu.pw@0x0C4857C6=0x0493</action>
    </script>
  </cheat>

  <cheat desc="Possibility 3: 0C4C12DE (0013)">
    <script state="run">
      <action>:maincpu.pw@0x0C4C12DE=0x0015</action>
    </script>
  </cheat>
```

This isn't a fully valid cheat file, for that you need to create a file of this form:

``` xml
<mamecheat version="1">
  <!-- Contents of candidates.xml-->
</mamecheat>
```

Save the above in `<mame dir>/cheat/mmpork.xml`. How do we find which of these candidates is what we're looking for?

Launch MAME with cheats enabled, `./mame mmpork -cheat`, then open the cheat menu. You'll see the possibilities from the `mmpork.xml` file you created. Insert a coin, and try each one. When the timer stops, you found the right one. **Spoiler:** The correct location is `0x0C4857C6`.

That's it! Congratulations! You can now leave the title screen up indefinitely and burn it into your CRT! More importantly, you know a teeny little bit about a MAME debugger.

## Fun with that memory location

So what else can we learn about that memory location? Well, the timer is a 20 second timer, and each second has 60 ticks, so the max value should be `20 * 60 = 1200 = 0x04B0`. You can change your cheat file to always set the value of that location to `0x04B0`, but every time you tick into a whole second a sound effect plays, so the game will try to play that sound effect every frame, which it can do but it sounds goofy.

But strangely, this value being stuck to whatever the cheat pinned it to causes weird effects in the game. Depending on the value, you can't pick up certain items, or if you set the value low to like `0x0002` then you can't get past the character select screen because the inputs don't work anymore. Weird!

So what does this value do during the game if you don't manipulate it? Well let's find out!

Fire up the game with the debugger again, and open a memory viewer window (on Mac that's ⌘-D). You can search for location `0x0C4857C6` and see what the value is as the game boots. It's `0x0000`. When does it first get set? We can find that out by setting a watchpoint! In the console type `wp 0x0C4857C6:maincpu,1,w`. So, watch that location in the `maincpu` memory space, watch only that address (width `1`), and tell me when it's written to (that's the last `w`, you can also do `r` and `rw`).

``` text
MAME debugger version 0.246 (mame0246)
Currently targeting mmpork (Muchi Muchi Pork! (2007/ 4/17 MASTER VER.))
>go
>wp 0x0C4857C6:maincpu,16,w
Watchpoint 1 set
Stopped at watchpoint 1 writing 000004B0 to 0C4857C4 (PC=0C06CE14) # I inserted a coin
```

Ok! So I inserted a coin and the timer gets initialized to `0x04B0`, since again it's a 20 second timer. Then what? Well it frame advances and then it ticks down by 1. We kinda knew that. I'll disable the watchpoint (⌘-B to bring up a window where you can toggle them on and off) and get to the character select screen.

Well well well, now it's counting UP for every frame. Probably some sort of in-game frame counter? What if I game over and get to the continue screen? It stops ticking! If I continue, it continues ticking. If I don't continue, it doesn't reset until a coin gets inserted again or if you let the demo start playing..

But wait a minute, if it's an in-game frame counter, and it's 16-bit, it can only count up to 65,536 frames? That can't be right. Game runs at 60FPS, that's about 18 minutes. My 1cc run through the game takes about 30 minutes, and if you get into the second loop a full run would take about an hour, so this value has to be bigger than 16-bit. Looking at the watchpoint output, this becomes obvious! `Stopped at watchpoint 1 writing 000004B0 to 0C4857C4` means it's writing a 32-bit value to `0xC4857C4`. Since I assumed it was a 16-bit value, I ran `cheatinit uw` which only caught the changes made to the lower 16-bit half of the 32-bit value. 

If you want to learn more about the MAME debugger, the manual is [here](https://docs.mamedev.org/debugger/index.html).

That's all for this post. This will be part of a series, because there's a project that caused me to start down this rabbit hole...
