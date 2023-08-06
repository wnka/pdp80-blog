---
title: "Final Fight Fixed!"
date: 2019-07-01T19:42:44-07:00
slug: final-fight-fix
draft: false
Categories: ["capcom", "cps1", "final fight", "hardware"]
---
This last weekend, after my [long bike ride](/posts/bike-june-2019/) on Saturday, I took some time on Sunday and poked at my [Final Fight](http://en.wikipedia.org/wiki/Final_fight) arcade board to see if I could figure out its graphical issues. **I FIXED IT!** I originally bought this game to swap parts to fix my [Strider arcade board](/posts/strider-pcb-fixed/) and I knew the issue was in the B-board.

Here's the **before**:

{{< figure src="/images/20120528-213148.jpg" >}}

To diagnose the issue, I had a random idea to look at the outputs of the graphics roms. I started by just grounding some output pins to see what that did to the screen. Interestingly, it produced a very similar fault to what I was seeing: that is, vertical lines running through the screen at different offsets. I found a pin that when I grounded it made *no difference* to the screen. **We have a candidate!**

Next I used a [logic probe](https://en.wikipedia.org/wiki/Logic_probe) to see if that pin was outputting anything and found that it was. So data was coming out of the pin, but the signal was getting lost along the way. I followed the trace on the board and used my volt meter to test the continuity. The signal was getting lost! I soldered up some wires to fix the trace and the issue is fixed!

{{< figure src="/images/IMG_1167.jpg" >}}

Here's the **after**:

{{< figure src="/images/IMG_1169.jpg" >}}
{{< figure src="/images/IMG_1173.jpg" >}}

It only took me about **seven years** to get around to fixing this. Once I sat down to do it, it only took about an hour. I gotta say that I felt pretty **COOL** after fixing this, and for a fleeting moment thought about going and buying *broken* arcade boards on eBay to see if I could fix them, but I don't believe I'll be doing *that!*
