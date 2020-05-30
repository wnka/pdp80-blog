---
title: "Raspberry Pis in the House"
date: 2020-05-29T15:38:15-07:00
draft: false
---
I really love [Raspberry Pis](https://www.raspberrypi.org/) and have quite a few lingering around our house doing various tasks. Here are the things our Pis handle.

## OpenHAB
[OpenHAB](https://www.openhab.org/) is a home automation platform that’s pretty decent, it’s kinda tough to set up but the interface is really customizable and it consolidates things like Hue bulbs and Z-Wave light switches into one place. 

Our favorite feature is double-tapping down on the [light switch in our bedroom](https://www.amazon.com/HomeSeer-HS-WD100-Scene-Capable-Repeater-SmartThings/dp/B01DFRWZNE) to go to bed. This kicks off a script that turns off all the lights in the house, dims a few lights to be night lights, and turns on the white noise machine in our bedroom. 

I should put my configuration somewhere on GitHub someday...

## Pi-hole
[Pi-hole](https://pi-hole.net/) is a DNS server that will black hole DNS requests for things like ad-servers, trackers, and anything else you want to block. Think of it as a network wide ad-blocker. You can see what devices on your network are doing, like why is my Smart TV phoning home constantly, and block certain activity.

The thing that has surprised me is the volume of lookups that get blocked. It’s around 20%! 

See also: the [Pi-hole subreddit](https://www.reddit.com/r/pihole/).
## Arcade Input Display
[I created this program](https://github.com/wnka/arcadebuttons-node-pi) that will listen to the inputs (joystick, buttons) on my arcade cabinet though GPIO and displays them on a webpage using Node.js and WebSockets. It was really fun to build and was a good introduction to WebSockets! I wrote about it [here](/posts/jamma-input-display/) when I created it and [here](/posts/pretty-input-display/) when I made it look prettier.

This physically runs on the same Pi as my Pi-hole instance.
## WireGuard 
[WireGuard](https://www.wireguard.com/) is a VPN that allows me to connect to my home network from anywhere. This enables a few things:
1. Have my iPhone connect to my home network and route all DNS requests through Pi-hole. Why would I want to spend my precious [cell phone data plan of 3GB a month](https://www.mintmobile.com/) downloading ads? WireGuard supports only routing some traffic through the VPN, so normal internet traffic doesn’t have to go over the VPN, just certain IP ranges.
2. Use public internet with comfort. If I’m sitting in a coffee shop (pre-COVID of course) or whatever I can push all traffic through the VPN.
3. Get access to OpenHAB and our NAS from anywhere. I only have to port-forward the WireGuard port and all other remote access is through the VPN.
The iPhone and Mac apps work well. I especially like that on the iPhone app you can say when I’m on cellular service use this profile that routes just 192.168.0.0/16 through the VPN, and if I’m on a WiFi network that isn’t whitelisted use another profile that pushes all traffic through the VPN.
## Power over Ethernet is awesome
I have [Ubiquiti](https://www.ui.com/) networking equipment in our house. Our house isn’t that big, but traditional WiFi routers could never give full coverage. I think it’s because our house has plaster walls which can have a wire mesh as a substructure, and that’s not good for radio signals. So, we’ve got a [two UniFi access points ](https://www.ui.com/unifi/unifi-ap-ac-pro/)which give great coverage.

I have a [UniFi Switch](https://www.ui.com/unifi-switching/unifi-switch-8/) that has Power over Ethernet (PoE) ports. I use it to power the access points but you can get a [splitter](https://www.amazon.com/gp/product/B07TJ3ZNJ4) that will take a PoE network connection and split it into a network cable and USB power for a Raspberry Pi. Fewer cables!
## The Future?
For a bit I set up a [Matrix homeserver](https://matrix.org/) and was playing around with that, but it was just for fun and I shut it down. I might try and consolidate that WireGuard and Pi-hole/Arcade Pis so I just have 2, but eh why bother.
