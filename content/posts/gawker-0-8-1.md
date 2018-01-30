+++
date = "2009-07-06"
slug = "gawker-0-8-1"
title = "Gawker 0.8.1"
Categories = ["Gawker"]
+++

Gawker 0.8.1 has just been [released](http://gawker.sourceforge.net/Download.html).  This is the first release in a bit over 3 years!  Time flies!  I had figured that the recent crashing issue related to the stale update feed should be fixed as that was just extremely sloppy.  The feed is now hosted on sourceforge.net which solves these problems.  Big thanks to [Daniel (Moird) Myers](http://moird.com/) for his help with getting this working and sorting out the details.

Since the update feed is now hosted in a new place, 'Check for Updates' from within Gawker will not be able to grab this new version.  Please [download it manually](http://gawker.sourceforge.net/Download.html).  Future versions will be picked up.

This release also contains a fix for a bug that caused temporary files created by Gawker during recording to not be cleaned up.  These files get created in /var/tmp/ and have names like tmp.0.*.  You may want to check for these and clean them up if you've been using Gawker 0.8 and earlier.

The source code has been moved to git and is available [here](http://gawker.git.sourceforge.net).  The code for this version has been tagged "v0.8.1".

I am hoping to blow the dust off of Gawker and continue development.  There's not much new in this release but it's been a good way to jog my memory and get back into the swing of things.

If you're interested in contributing or have any feedback, please drop me a line.  Thanks!
