+++
date = "2013-03-02"
slug = "rayforce"
title = "Rayforce"
Categories = ["taito", "rayforce", "hack"]
+++

[Rayforce](http://en.wikipedia.org/wiki/RayForce) is a game I've wanted for quite a while now, however original PCBs are hard to find and are expensive when they do show up. 

Rayforce runs on [Taito F3](http://en.wikipedia.org/wiki/Taito_F3_System) hardware, however it was one of the first games released for that hardware and was a standalone PCB, not a cartridge like other F3 games.  I read some articles on a [few](http://www.arcade-system.com/index.php?option=com_content&view=article&id=608:convertir-une-cartouche-taito-f3-en-rayforce-gunlock&catid=137:les-tutoriaux&Itemid=261) [websites](http://retrogamebay.free.fr/?convertir-une-cartouche-taito-f3.html) (all in French for some reason) about converting an F3 cartridge into Rayforce, so I gave it a shot. I would like an original PCB, but I thought it might be fun to try the conversion.

I bought an F3 motherboard and an [Arkanoid Returns](http://en.wikipedia.org/wiki/Arkanoid_Returns) cartridge. I opened it up and started desoldering the ROMs using a [solder sucker](http://www.amazon.com/Sucking-Vacuum-Desoldering-Solder-Remover/dp/B005GIPKOW/ref=sr_1_2?ie=UTF8&qid=1362203332&sr=8-2&keywords=desolder+pump). This took **FOREVER**. Each ROM was 40-pins, so doing those one by one with a pump was super time consuming. It was so painful that I didn't unsolder one of the sound ROMs and just installed all the other ROMs.

For each ROM I desoldered, I installed a socket and made sure that Arkanoid Returns still worked correctly. I tore up a few traces but was able to patch them with wire. So in the end I had a socketed Arkanoid Returns that still had one sound ROM not socketed. I installed the Rayforce ROMs and powered up the board.

Nothing. The board just kept rebooting over and over and over, so I gave up. I figured the PAL chip those French articles talk about was not the right one, even though the marking was D77-14 which should work. Perhaps Google Translate forgot a "NOT" when translating that sentence about IC21. I didn't want to go through the effort of desoldering that sound ROM just to have the game not boot. So I wasted a bunch of time and got pretty good at desoldering the hard way.

Time passes. Many months.

Recently I was chatting with a coworker about something and we got to talking soldering. He mentioned he had a [desoldering gun](http://www.amazon.com/Hakko-Desoldering-Kit-With-808/dp/B000ARPULW/ref=sr_1_1?ie=UTF8&qid=1362204158&sr=8-1&keywords=desoldering+gun). I told my story about how painful it was removing ROMs manually with a pump, so he let me borrow it. The first thing I did with it? I desoldered that sound ROM.

Now, I was in the process of burning the Rayforce ROMs and had everything burned except for the background graphics ROMs, but that one sound ROM that I hadn't replaced before (D66-01) was in place so I fired up the game.

{{<img src="/images/IMG_0617.jpg" caption="Working with missing background ROMs">}}

IT WORKED! WOW! As you can see, the backgrounds are missing because those ROMs are missing. I finished up burning those and installed them.

{{<img src="/images/IMG_0623.jpg" caption="Background ROMs installed">}}

Clearly that "sound ROM" also serves some other important function since the game wouldn't even boot without it. I mean, I figured I would just get messed up sounds from Arkanoid Returns.

Now, there were a few small issues to fix. Some of the sprites had lines running through them which I chased down to a bad ROM burn on D66-03. Re-burning fixed the issue. The other issue was that the backgrounds had weird sparkles (technical term) in them where the colors were wrong. In the above picture with the green sphere, you can maybe see some blue pixels on the right hand side of the sphere if you look closely. I hooked the game up to my test rig and started poking around. I quickly figured out that this was a voltage issue and turning down the 5V on my PSU fixed it.

I now had a perfectly working Rayforce F3 cartridge. I've been playing it some tonight and it is such a great game. I've played it in MAME a lot but its great to have it running on the real hardware. The graphics are crazy, definitely one of the best looking games on F3. So much scaling!

I've played a few credits and I can get to Area 4 pretty consistently. My current best score is 1,174,100 in Area 4:

{{<img src="/images/IMG_0631.jpg" caption="Goal #1 met: beat default high score">}}

I think this is what I'm going to try and 1CC next. It has a very different feel from other shmups I play in that there aren't tons of bullets on the screen, but it's so well put together and tons of fun. To survive, it's pretty clear that you need to lock on to things before they reach the main play field, otherwise things get hairy pretty fast. That means memorizing enemy placements and destroying enemies as fast as you can.

Also, it should be noted that [Rayforce is available for iOS](http://www.youtube.com/watch?v=rGc7-eb9pwE). I enthusiastically bought it when it came out, however I must say that the iOS version pretty much sucks. Either play it in MAME or do all the crazy stuff I just described to build an F3 cartridge version. Or buy the real PCB. Go!
