+++
date = "2009-06-07"
slug = "if-gawker-crashes-on-startup"
title = "If Gawker Crashes on Startup"
Categories = ["Gawker"]
+++

Some folks have been reporting recently that Gawker crashes on startup.  This is related to the "Check for updates" feature which no longer works because where I was hosting the app feed for updates no longer exists since I cancelled my .mac account.  Try disabling this so that it won't check for updates and you should be good to go.  If it crashes before you can get to the Preferences, delete your Preferences file and start Gawker, on first launch it'll ask you if you want to check for updates on startup.  The Preferences file is located under your home directory at:

    Library/Preferences/com.wnka.Gawker.plist

Hope that helps, sorry for the inconvenience.  I am without a Mac currently, if I get a chance I may release a new version that does not check for updates as I am not planning on making any in the near future.

Cheers-
