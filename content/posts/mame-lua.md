---
title: "MAME LUA Scripting"
date: 2023-03-06T14:29:16-08:00
draft: false
code: true
---

I previously wrote a post about the [MAME Debugger](/posts/mame-debugger-intro/) which showed how to find where certain values are stored in a game's memory.

MAME also has a [LUA Scripting Engine](https://docs.mamedev.org/techspecs/luaengine.html) that you can use to display memory values onscreen and do all kinds of cool stuff. I'll again use Muchi Muchi Pork as an example.

In Muchi Muchi Pork, you build up your *medal value* by blowing up enemies with your lard shot. Each time you collect medals of a certain value, the value increases. It starts at `100` and increases by hundreds up to `1000`, then it increases by thousands up to `10000`. So the progression is: `100`, `200`, ..., `900`, `1000`, `2000`, ..., `10000`. Building up your medal value is critical to scoring well in the game. If you let medals drop off the screen without collecting them, your medal value goes down by a factor of `10`. Medal value of `10000` and you drop, medals are now worth `1000`. Drop again and you're all the way back to `100`.

The medal values are shows on the medals themselves, but outside of that you don't know what your medal value is. There are many cases where I've thought 'oh shit I dropped medals' and it turns out I didn't, or I did drop and didn't know it. What if we could always show the value on screen?

Well... you can!

```lua
cpu = manager.machine.devices[":maincpu"]
mem = cpu.spaces["program"]
s = manager.machine.screens[":screen"]

function draw_hud()
 -- medal_val ranges from 0 - 18
 -- 0 = 100
 -- 1 = 200
 -- ...
 -- 9 = 1,000
 -- 10 = 2,000
 -- ...
 -- 18 = 10,000
 medal_val = mem:read_u8(0xC53F4A7) + 1;
 medal_display = medal_val * 100;
 if medal_val > 10 then
   medal_display = (medal_val - 9) * 1000;
 end
 medal = string.format("NEXT MEDAL : %d", medal_display);
 -- Draw the text RED (0xffff0000) on BLACK (0xff000000)
 -- Format: 0xaarrggbb where a = alpha,
 s:draw_text(200, 3, medal, 0xffff0000, 0xff000000);
end
emu.register_frame_done(draw_hud, "frame")
```

Save that to file, for example `mmpork.medals.lua` and then start MAME like this:

```text
./mame mmpork -autoboot_script mmpork.medals.lua
```

Now you've got your medal values on-screen all the time!

{{< figure src="/images/mmpork.medals.jpg" alt="Medal Value is now shown in the upper left!" caption="Medal Value is now shown in the upper left!" >}}

This is helpful, but kinda ugly. There's also a bunch of other data that would be helpful, like boss HP. Well... stay tuned!
