---
title: "MacBook Pro 16\""
date: 2020-05-27T12:03:47-07:00
draft: false
code: true
---
I got a new MacBook Pro 16" laptop in mid-February, right before everything locked down for COVID. I wanted a better machine for work as the standard issue 13-inch was too cramped on the go for my tastes. 

Well I’m not really much on the go anymore but I still really like this laptop. It’s great!

I upgraded from an old Retina 13-inch (2015?), pre USB-C with the MagSafe power. 

This is my desk/WFH set up:

{{< figure src="/images/IMG_1960.jpeg" >}}

## Keyboard
Nothing to write about which is good. My home laptop is a MacBook that has the controversial butterfly keyboard and yea, it’s different but I can type on it just fine. I definitely prefer this keyboard though, my biggest complaint about the butterfly keyboard mechanism is that it's loud. This one is nice and quiet, I can aggressively take notes on a conference call and no one will hear a thing.

## TouchBar
This is my first time using a TouchBar. It’s ok, my main point of frustration is that I have accidentally triggered shit when resting my fingers up there. I recently found out that you can customize the buttons, I got rid of the Siri button and added a button for “Do Not Disturb” mode which is incredibly useful. I got [BetterTouchTool](https://folivora.ai/) to provide some buttons for Emacs (mostly org-mode related capture stuff). Overall I’m neutral on it. When I’m at my desk I still use the laptop keyboard and trackpad so at least I don't have to transition back and forth between having and not having a TouchBar.

## Docking
I’m living the one cord dream. I got an [HP Thunderbolt 3 dock](https://www.amazon.com/gp/product/B07DPKVYXR/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1) which works well. Got my monitor, nice webcam, Ethernet, microphone, and power all coming in through one cable.

I thought I would miss MagSafe but being able to plug in on either side of the laptop is pretty handy. In addition to my desk (where I plug in on the left), I have a USB-C power + HDMI dongle going to my 4K LG OLED TV which is a nice option for hanging out on the couch (where I plug in on the right).

## Speakers / Mic
The speakers in this thing are **awesome!** This was a pleasant surprise. I don't hook up external speakers, but then again I'm not blasting tunes that loud. 

With working remotely I spend a lot of time on video calls and I use the built in microphone, it seems to work well as folks seem to be able to hear me fine. 

## Performance
It’s fast I guess. Go read some other review for more details. 

## Summary
I dig it and am glad I bought it. I look forward to sitting in a coffee shop with it someday. 

The only thing I don’t like is the USB-C only thing, but I get it. I bought a bunch of cheap dongles off Amazon and have accepted this new reality. The screen real estate is a big improvement.

## Favorite Tools

1. [Alfred](https://www.alfredapp.com/) for launching stuff and doing web searches. The ability to make custom web search targets is super useful for internal work sites.
1. [Magnet](https://magnet.crowdcafe.com/) for moving around windows with the keyboard.
1. [Flow](https://flowapp.info/) for Pomodoro timin'. I like it because it allows you to blacklist apps (OUTLOOK and CHATS) while on the clock.
1. [Doom Emacs](https://github.com/hlissner/doom-emacs) for editing. I actually don't write much code in Emacs, but I use [org-mode](https://orgmode.org/) for all my TODOs, notes, and [journal](https://github.com/bastibe/org-journal). My config files are [here](https://github.com/wnka/piwonka-doom-emacs). 
1. [Bartender](https://www.macbartender.com/) to keep my menu bar tidy.

## Minimizing distractions

Not really related to getting a new machine but I thought I'd share this here. I get distracted really easily. When I start my day at work I run a script that does all the 2FA and stuff I need to SSH around and whatnot, and at the end of that script I blackhole the DNS for a bunch of distracting websites using entries in `/etc/hosts`.

I put entries in my `/etc/hosts` like this for sites I want to block:

```bash
# 0.0.0.0    www.thehardtimes.net #PDPFUN
```

When it's time to work, I run `worktime`, which makes sure that my overrides are in effect:

```bash
#!/usr/bin/env bash

sudo sed -i.bak "s/^# \(.*\)#PDPFUN/\1#PDPWORK/g" /etc/hosts
cat /etc/hosts
sudo dscacheutil -flushcache
sudo killall -HUP mDNSResponder
```

This enables those override entries in `/etc/hosts`:

```bash
0.0.0.0    www.thehardtimes.net #PDPWORK
```

When I want to take a break, I run `funtime`, which comments out my overrides so I can access all those fun sites:

```bash
#!/usr/bin/env bash

sudo sed -i.bak "s/^\(.*\)#PDPWORK/# \1#PDPFUN/g" /etc/hosts
cat /etc/hosts
sudo dscacheutil -flushcache
sudo killall -HUP mDNSResponder
```

Perhaps there's a better way to do this, but this has been pretty effective at keeping me from drifting off while compiling or whatever.
