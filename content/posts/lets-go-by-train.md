---
title: "Let's Go by Train!"
date: 2022-04-23T12:38:56-07:00
draft: false
---

I imported the new [Densha de GO!](https://en.wikipedia.org/wiki/Densha_de_Go!) game for Switch. Translated, that's "Let's go by Train!" It’s also available for PS4. This is not a paid endorsement, but this is the most fun I’ve had playing a game in a while. 

It’s a train conductor game, you drive a subway train in Japan. You make the train go fast and slow. You have to accurately stop the train at each stop for the sake of the passengers. You have to honk your horn when needed and follow speed limits. It’s a game of following rules. It’s great. I’m not being sarcastic!

I don’t even know all the rules yet. I can’t read a lick of Japanese but I think I absorbed most of the tutorial, however occasionally I’ll break the rules and get penalized and I don’t know why. For me this just adds to the fun. 

This is a long running series in Japan that originated in the arcade way back in 1996. [Here's a great interview](https://shmuplations.com/densha/) with the creators. Again on the surface, this sounds like an absurdly unfun game. Can’t steer a train! But it’s rad.

Some folks I follow in the shmup community are also into this series which is how I found out about it, and also there was [an excellent GameCenter CX episode featuring the first game on PS1](https://archive.org/details/game-center-cx-season-12/Game+Center+CX+094+-+Go+by+Train!.avi). BTW [GameCenter CX](https://en.wikipedia.org/wiki/GameCenter_CX) is one of my favorite shows that I love and could write a full blog post about it. A Japanese comedian has a fake job where he must beat games in one sitting. A community of fans translates them and [here is a great list of episodes](https://dannylujan.com/gccx-episode-guide/). 

A few of the early games are emulated in MAME, which run on weird early 3D hardware (a [68040](https://en.wikipedia.org/wiki/Motorola_68040) with a [TMS320](https://en.m.wikipedia.org/wiki/Texas_Instruments_TMS320) DSP). This stuff is hard to emulate at full speed, but amazingly my MacBook Air with an M1 processor can do it. My big gaming PC can’t even do that! Apple should incorporate this into their next keynote. 

The big thing in these games is stopping. You’ve got to enter the station and come to a stop at the right spot and the closer you get the better. Accelerating in the station is a big penalty, slamming on the breaks is a penalty as all those poor standing passengers are gonna get hurt. 

If I get the time I want to generate tables of breaking power and deceleration rates. It’s clearly non-linear. In MAME I played around with the debugger and found where the input values for throttle and brake are defined, but they’re analog and I couldn’t figure out how to set the inputs. Well, I could set the memory values where the inputs are stored, but I couldn’t set the inputs themselves so on the next frame the inputs would write over those values. It would be really cool to totally automate the perfect stop. It was a long time ago that I tried this, I think since then the MAME LUA scripting engine has been improved to allow scripting of analog controls.

Go watch the GCCX episode and see how great these games are, then go play one!
