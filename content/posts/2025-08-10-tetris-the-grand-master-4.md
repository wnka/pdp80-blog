---
title: Tetris the Grand Master 4
description: ""
date: 2025-08-17T01:32:52.370Z
preview: ""
draft: false
tags: []
categories:
    - gaming
slug: tgm4
code: true
---

I've been playing a lot of [Tetris the Grand Master 4: ABSOLUTE EYE](https://store.steampowered.com/app/3328480/TETRIS_THE_GRAND_MASTER_4_ABSOLUTE_EYE/) and it's so great. I am by no means great at Tetris, but the TGM games are a lot of fun even if you're not. 

In Japan, Sega Tetris was the defacto Tetris game and the rules were slightly different than other Tetris games. Not in a major way but subtle things like how pieces rotate and how pieces lock when they land. The TGM series took those differences and carried them forward while adding new unique features. For example, the Initial Rotation System (IRS) lets you pre-rotate the incoming piece before it spawns which when playing in 20G is incredibly handy.

What's 20G you ask? It means the **G**ravity will make your piece will fall **20** spaces (the entire height of the playfield) in one game frame. Basically the piece slams against your stack immediately, and your movement is going to be quite restricted: pieces will snag on holes and you can't places them where you want because you just aren't going to be able to get there. This is where IRS comes in handy. Also the "lock delay" is how quickly the piece will lock in place and you can't move it anymore, and as you reach higher levels the lock delay gets shorter and shorter.

I've played Tetris for a long time but I played with a real basic strategy: keep a hole on the right and use I-pieces when they spawn to get Tetrises. In 20G that shit doesn't work. You still want to get Tetrises of course, but you've gotta be a whole lot more strategic. You have to plan ahead and shape your stack in ways to help keep progressing. There are isanely hard game modes, but I've been playing TGM-Normal which took me about about 20 hours to clear (according to Steam). Some strategies that helped me:

1. Try to make the top of your stack as smooth as possible. I noticed that high level players do something that felt really unnatural to me: lay an I-piece flat on their stack. I was viewing I-pieces as these precious things that you could only lay vertically to clear lines. You want to use them for that for sure, but if you're stack is in good shape you can also lay them flat without covering up holes.
1. In 20G you've gotta know the limits of how far pieces can move. The thing that kept causing bad drops was I'd have a piece I either wanted to slam all the way to the left or the right but it wouldn't make it due to snagging on a hole. Even an I-piece that's going to get you that sweet sweet Tetris might will get stuck in a hole if there's one next to the edge. Now you're in a real pickle. Developing some instinct on whether or not a piece will make it is what helped me, or IRS-ing it so that it won't get stuck and will hit your stack on a flatter side so you can move it across holes. This is again why you want a smooth stack. You basically don't want any local minimums in the way of your global minimum. Yea, I said it.
1. If you can't get your stack smooth, make it tall in the middle so pieces can smack into that and then you can move them downhill before they lock into position.

```js

     X
     X
     X
     X


***** * *
*********
*********
*********
*********
0123456789
```

You want that I-piece to land in column 9. So you thought this was gonna happen and you'd get a nice Tetris:

```js
     
     
     
     


***** * *
*********X
*********X
*********X
*********X
0123456789
```

But at 20G, you can't do that. It'll snag on column 7. This is what'll happen:

```js
     
     
     
       X
       X
       X
***** *X*
*********
*********
*********
*********
0123456789
```


Now you're in a real pickle since the hole you made for clearing lines in column 9 is blocked. You're going to need to build up the middle of the stack to recover.

One you clear Normal mode (which is reach level 999) you get a credit roll where your stack gradually starts disappearing. I've managed to not top out during this pretty consistently, which I thought I'd never be able to do. TGM is famous for these credit rolls where your stack is invisible, and this is like easy mode of those.

I'm pretty happy with how I've progressed, and I've started playing the next mode, which I forget the name of off the top of my head, but you start in 20G and the lock delay is pretty short. In order to progress to the next 100 level (so 99 -> 100, or 199 -> 200) you have to clear a Tetris. Which at this speed is tough, otherwise you just sit at level 99 and don't progress. I've gotten into a 300s a few times and I'm going to keep at it.

## Some personal history with the TGM series

If you look at my [arcade PCB list](/pcb) you'll notice that I own a Tetris the Grand Master 3 arcade board. I bought this off KevinDDR, who was deep into trying to get a TGM3 Classic Grand Master (GM) ranking. He got close, but then got burned out and wanted to sell his board. I bought it off him, not thinking that I'd become crazy good but I liked Tetris and this was when I was buying arcade boards like crazy so what the heck. I never got very good, but then he got back into the series and wanted to go again for the GM in TGM3. So I let him borrow the game for a long long time, and in that time he showcased the game at ADGQ 2015, grinded real hard, and finally got the GM. Goddamn that was 10 years ago?! He was the 6th person in the world to do that and first person outside of Japan. I have that board still, it's got his GM on it and all his scores and records. I should find a way to dump that hard drive (TGM3 arcade hardware is basically a PC) and preserve it. So yea, "my" arcade board what was used at AGDQ and what he got that GM on. It'll always be his though. I lost touch with that guy, he moved to Japan and I had a kid. Maybe I should get back in touch with him... I think played TGM4 some.

Links:
1. [List of TGM3 Grand Masters](https://tetris.wiki/List_of_Terror-Instinct_Grand_Masters)
1. [KevinDDR at AGDQ 2015 blowing minds](https://youtu.be/qaMjbnvZMck?si=DZqIVCkr2_Q36JJW)
1. [Hard Drop Tetris Community](https://harddrop.com/)