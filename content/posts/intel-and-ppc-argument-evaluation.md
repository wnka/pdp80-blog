+++
date = "2006-05-23"
slug = "intel-and-ppc-argument-evaluation"
title = "Intel and PPC Argument Evaluation"
Categories = ["Cocoa", "objective-c"]
+++

In Cocoa, take the following class:

    @implementation Callee
    - (int)returnOne
    {
        NSLog(@"In returnOne");
        return 1;
    }
    
    - (int)returnTwo
    {
        NSLog(@"In returnTwo");
        return 2;
    }
    
    - (int)sumOfA:(int)a andB:(int)b
    {
        return a+b;
    }

Ok, so a pretty boring class.  If I were to do the following:

    Callee *call = [[Callee alloc] init];
    NSLog(@"Callee sum: %d", [call sumOfA:[call returnOne]
                                   andB:[call returnTwo]]);

What would you expect the output to be?  I was shocked to find that the answer differs depends on which architecture you’re on.

Intel:
    In returnTwo
    In returnOne
    Callee sum: 3

PPC:
    In returnOne
    In returnTwo
    Callee sum: 3

Why is this?  This behavior causes a crash in Gawker 0.7.0 on Intel... it’s already fixed but I’m curious to know what causes the argument functions to get called in a different order?  Anyone?  Anyone?  I'm guessing it has to do with endianness / optimizer / Obj-C not guaranteeing execution order.
