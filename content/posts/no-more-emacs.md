---
title: "No More Emacs"
date: 2025-03-21T20:21:35-07:00
Categories: ["emacs"]
---

I've been an Emacs user since I was in college, which was a long time ago and happened on Sun SPARC machines that had keyboards with `Ctrl` in the correct spot. It's just what I learned first and it stuck.

I primarily use VSCode for writing code these days, because that's what most folks use, and it's pretty good. Emacs has mostly been used for Org-Mode for TODOs, Org-Roam for note taking, Magit for Git stuff, and writing little scripts.

I decided to try and get off it. Why? I don't know, just try something new. Turns out there are other tools that are good too! It's been a few months and I don't use Emacs anymore. Is my life better? No! Is my life worse? No! It's just different. My daughter still loves me.

Here are the tools that I'm using now for the things I used to use Emacs for.

### Helix

For editing random files, Markdown, this blog, scripts, etc I've been using Helix. Why? Mostly because it's insanely fast and the configuration tweaks I had to apply are minimal. My Emacs configuration was decades (literally) of cruft and customizations and sat on top of Doom Emacs, and it was big, it broke a lot when updating shit, and made Emacs slow to start. My Helix config is really short because it has pretty sane defaults, integrates really well with LSP, and doesn't try and be all things like Emacs.

[This](https://github.com/wnka/piwonka-flakes/blob/main/modules/home-manager/files/helix/config.toml) is the entirety of my config. Real simple!

### LazyGit

Instead of Magit for Git stuff I'm now using LazyGit and have found it to be good enough for my workflows. It's super fast, and while yes it's not integrated into the editor, I can easily `Ctrl-Z` my way out of Helix and do what I want, then `fg` back into Helix. No need to make Helix be this captive environment where everything.

Custom config: None!

### Obsidian

I use this instead of Org-Roam and find it to work really well. Lots of nice plugins for doing things like Excalidraw diagrams and it's easy to add pictures/screenshots to your notes which I like. I do like Org-Mode syntax better than Markdown, but Markdown is everywhere and I already have to know it (i.e. I'm writing it now for this blog) so it's not a big deal. I really only need headings, code blocks, and links. 

### Things

For TODOs I use the Things app, which lets me capture stuff on my iPhone and what not. I wrote in the past the big thing I loved about Org-Mode was that I could script cleaning up stale items, but I found a way to do that on Things. I'll share that in another post.

### In Closing

It's fun to learn some new tools and to teach this old dog some new tricks. Maybe I'll move back to Emacs someday, but I think the biggest thing I like about these more modern tools is that they have reasonable defaults and so my configs are really minimal, which makes them really portable across Linux, Mac, and Windows/WSL. I'm writing this sitting on my couch on my iPad SSH'd into my Windows/WSL box running Helix. It just works.

But as always, use what works for you and what you like!
