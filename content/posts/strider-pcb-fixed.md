+++
date = "2012-05-26"
slug = "strider-pcb-fixed"
title = "Strider PCB Fixed"
Categories = ["capcom", "cps1", "strider"]
+++

As I [mentioned previously](/blog/2012/05/new-pcbs-2/), I picked up a [Strider](http://en.wikipedia.org/wiki/Strider_(arcade_game)) PCB that had some graphical issues. I did more futzing around and was able to fix the problem. It was the "B" board, just as I thought. I used my Street Fighter II board set to eliminate the "A" and "C" boards as the problem, which narrowed it down to either the "B" board itself or some of the graphics roms. 

I pulled the graphics roms out one by one, which led to some interesting results and helped me narrow it down to the ST-8 and/or ST-9 graphics roms. I swapped in some of the other graphics roms into those positions, which totally screwed up the graphics but showed that the roms that I put in that position also started showing vertical lines. This told me it was those sockets on the board and not the actual roms, since those roms at their original position showed no corruption. 

I inspected the traces and solder joints around those sockets, but couldn't see anything obvious. I checked the continuity of the traces to their next point of the board and everything was fine. Either something was happening downstream or there were traces being shorted/bridged. Since no fix was obvious, I decided to just track down another "B" board.

The SFII board I have has a different "B" board layout with different/incompatible sockets, so I couldn't use that. A [Final Fight](http://en.wikipedia.org/wiki/Final_fight) board came up on eBay, which is also [CPS-1](http://en.wikipedia.org/wiki/CP_System) and uses the same "B" board (89624B-3) as Strider so I bought it. If my theory was wrong, at least I'd have Final Fight!

The Final Fight arrived and I verified that it worked, then I swapped the Strider roms and "C" board onto the FF "B" board. 

![Look Ma, no lines!](/images/20120528-213257.jpg)

I swapped the Final Fight roms onto the Strider "B" board. Lines!

![Lines!](/images/20120528-213148.jpg)

At some point I'll look more into what is wrong with the Strider "B" board, but at least now I have a fully working CPS board set.
