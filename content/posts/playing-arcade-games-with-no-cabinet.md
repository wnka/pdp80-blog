+++
date = "2012-02-04"
slug = "playing-arcade-games-with-no-cabinet"
title = "Playing Arcade Games with no Cabinet"
Categories = ["hardware"]
+++

A [SuperGun](http://en.wikipedia.org/wiki/SuperGun) sounds way cooler than it is. All it does is allow you to play arcade games without an arcade cabinet.

But I actually have an arcade cabinet, so why would I need a SuperGun? Well, my arcade cabinet is currently configured for vertical games, meaning the monitor is rotated such that it is taller than it is wide. Since I play a lot of vertically scrolling shooters, this is necessary. However, there are a bunch of great horizontal arcade games that I want to play as well. My Astro City allows for the monitor to be rotated, but it's kind of involved and I don't really want to manhandle my monitor every time I want to play a horizontal game. So, I built a SuperGun.

This was SuperEasy. I already had an RGB capable monitor due to my [past approximations of an arcade cabinet](blog/2011/05/sideways-monitor-iterations/), so all I had to do was wire that up to a JAMMA harness. 

![Mars Matrix](/images/IMG_2025.jpg)

So, what's involved?

All an arcade board needs is something to give it power, joystick inputs, and output its video and audio signals. That's it. An arcade cabinet provides all these things, however its easy to provide these things using other components. Here is what you'll need:

* **JAMMA Harness:** This is the plug that an arcade board will plug into. [Here is a full loom](http://www.jammaboards.com/store/jamma-full-cabinet-wiring-harness-loom/prod_146.html) that will allow for easy wiring to your components.


![Harness plugged into an arcade board](/images/IMG_2038.jpg)

* **Power:** [This power supply from jammaboards.com](http://www.jammaboards.com/store/15a-arcade-switching-power-supply-with-digital-display-110w/prod_251.html) is cheap and completely adequate for supplying +5v, -5v and +12v to an arcade board.

![Power supply running at 5.0 volts](/images/IMG_2039.jpg)

* **Display:** Any RGB monitor that is capable of 15.75khz will work. Most modern monitors are not capable of this scan rate, but you can find a cheap old one that is. I used a Sony PVM-14N6U that I got off eBay for cheap.

![PVM showing RGB](/images/IMG_1994.jpg)

* **Sound:** Since JAMMA boards include a sound amp, you can use [a high-to-low converter](http://www.amazon.com/Pyramid-NS60-Level-Impedance-Adaptor/dp/B000EFKK5G/ref=sr_1_1?ie=UTF8&qid=1327798217&sr=8-1) to give RCA line outputs that you can plug into pretty much anywhere. Just take the "Speaker +" and "Speaker -" wires coming off the JAMMA loom and connect them to the wires of your high-to-low converter. Since JAMMA is mono, you just send the - and + wire from the loom to both wires of the converter so that sound will come out of both speakers.

![This will give you RCA jacks](/images/IMG_2040.jpg)

* **Controls:** I hooked my controls up to a joystick I had laying around which meant just hooking the quick disconnects from the loom to the buttons and joystick. You can build your own controls using parts from [here](http://www.lizardlick.com) that will hook into the quick disconnects provided by the loom.

![Hacked up controls](/images/IMG_2037.jpg)

It takes some time to hook all these things up, but it's fairly straightforward and really cool to see once it's all working. If you want to get into arcade collecting, this is an easy way to build a set up that will let you play games or just test out boards. I'll be using mine for playing horizontal games, or having two vertical setups for when friends are over.
