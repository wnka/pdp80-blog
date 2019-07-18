---
title: "Remote Coin Insertion"
date: 2018-10-30T21:44:43-07:00
draft: false
Categories: ["raspberrypi", "jamma"]
---
Batteries on arcade PCBs are a pain. Gotta keep an eye on them to make sure they don’t start leaking acid and corroding everything. Also, sometimes removing them will intentionally ruin a game. [Read all about that here](http://www.arcadecollecting.com/dead/). Swapping [CPS2](https://en.wikipedia.org/wiki/CP_System_II) batteries is always a little stressful, thankfully I haven't had any problems when swapping those...

I looked at my [Ketsui](http://www.hardcoregaming101.net/ketsui/) PCB and the battery was getting a little fuzzy, so I desoldered it and will just run the game with no battery.  If you can run the game with no battery, what does use the battery for? You might think “high scores” but nope, Ketsui doesn’t save high scores. It only uses it to save the service menu options, so for example if you want to set the game to freeplay, change the difficulty, or turn off the sound for the demo loop. I used to run it with no battery, but had to reinstall one when I loaned it to the arcade operator at [Full Tilt Ballard](https://www.yelp.com/biz/full-tilt-ice-cream-seattle-5) so he could change the coin settings (50 cents to start, 25 cents to continue) when we put the game on location there. When I got it back from him I just left the battery on so I could run the game in freeplay mode at home.

I’d rather just not worry about the battery damaging the game, so I removed it and now the game runs with default settings and I gotta insert a coin to play. What a **catastrophic inconvenience!** But what if I didn’t have to *actually* insert a coin? The coin mechanism in an arcade cabinet is basically a hunk of plastic  only lets quarters (or whatever currency) pass through. When they do pass through, they fall down a chute into a coin bucket and on the way flip a little switch that sends a signal to the PCB. That switch is basically just like a button in that it has a signal and a ground. 

I’ve already got a Raspberry Pi sitting under the control panel of my cabinet that runs [the input display I built](/blog/2014/05/jamma-input-display/). The code for this is on [Github](https://github.com/wnka/arcadebuttons-node-pi). I made it able to [trigger buttons remotely](/blog/2015/04/input-display-improvements/), which was fun to write but pretty useless... until now. 

So to remotely trigger a coin drop, all I need to do is wire up the coin switch just like I wired up the buttons, which means hooking a [GPIO pin](https://www.raspberrypi.org/documentation/usage/gpio/) to the signal wire of the coin switch. An alligator clip made that super easy and the coin switch still works as normal. 

The first attempt to remotely trigger the switch didn’t do anything. The game didn’t register the coin drop. **Hmm.** When I built the remote button pressing feature I just arbitrarily made it hold the button down for one second. A coin falling down a chute isn’t going to trigger the switch for a full second, so I made that time shorter (100ms) and BAM, remote coin insertion worked!

Some games will crash and show “coin error” if they detect goofy/fraudulent behavior on the coin switch. I can imagine someone with a quarter on a string causing switch weirdness. Ketsui apparently just ignores weird inputs. 

I didn’t want to stop there, I wanted to be able to trigger this from my phone and Apple Watch. The input display just uses [Socket.IO](https://socket.io) for the input handling, and there’s a [Swift client library for Socket.IO](https://github.com/socketio/socket.io-client-swift). It was easy to create an app that was one button that said INSERT COIN that will send a message over the socket and trigger the switch.

{{<instagram BpqcTMTHKf2>}}

Quick aside, library handling in Xcode is weird and hard. I used [Carthage](https://github.com/Carthage/Carthage) which worked ok but still required a bunch of manual setup in the build targets.

Anyway this was a fun little project. Played a few Ketsui credits and sucked, I’m out of practice on that game.

Interestingly, the [hardware Ketsui runs on](http://www.system16.com/hardware.php?id=809) does have some NVRAM which someone created a [hacked ROM](http://ikotsu.blogspot.com/2012/08/ketsui-save-hack.html) for using that to store high scores. I could burn an EPROM and give it a shot, but I'd rather not risk it and I know my scores. I wonder what that NVRAM is actually used for?

Here's the Swift code for the Apple Watch app. Pretty simple:

{{<highlight swift>}}
//
//  InterfaceController.swift
//  InsertCoinWatch WatchKit Extension
//

import WatchKit
import Foundation
import SocketIO

// Set this to where you're running
// https://github.com/wnka/arcadebuttons-node-pi
let url = "http://192.168.0.208:8079/"

// Setting .reconnects(false) helped the app not freak out after being asleep.
// I'm sure I'm doing something wrong, but without it a ton of connections would get
// created and fired on over time.
let manager = SocketManager(socketURL: URL(string: url)!,
                            config: [.log(false),
                                     .compress,
                                     .forceNew(true),
                                     .forcePolling(false),
                                     .reconnects(false)
    ])
let socket = manager.defaultSocket

class InterfaceController: WKInterfaceController {
    override func awake(withContext context: Any?) {
        super.awake(withContext: context)
        socket.on(clientEvent: .connect) {data, ack in
            print("connected")
        }
    }
    
    override func willActivate() {
        // This method is called when watch view controller is about to be visible to user
        super.willActivate()
        socket.connect()
    }
    
    override func didDeactivate() {
        // This method is called when watch view controller is no longer visible
        super.didDeactivate()
        socket.disconnect()
    }
    
    @IBAction func onCoin(sender: WKInterfaceButton) {
        // This gets called when you push the button
        print("Let's play!")
        socket.emit("clicked", ["button": "coin"])
    }
}
{{</highlight>}}
