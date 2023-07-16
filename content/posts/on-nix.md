---
title: "Using Nix for dotfiles and stuff"
date: 2023-07-15T10:58:27-07:00
---

The other day at work my Cloud Desktop got terminated for some reason. It's an EC2 instance and these things are bound to happen so I'm super diligent about pushing any work onto a git share or working in a folder that is [Syncthing'd](https://syncthing.net) with my work laptop. Our Cloud Desktops sit in an AutoScaling group, so there was already a new fresh instance sitting there for me to use.

What I *did* lose though was all my user configs, dotfiles, tools that were installed, editor slickness, etc. Setting all this back up *sucked* and took a long time. It got me looking into a better way. I used a lot of dotfile management tools in the past like [GNU Stow](https://www.gnu.org/software/stow/), [Chezmoi](https://www.chezmoi.io), or just a git repo. Problem is, these things give you your dotfiles but not all the software that your dotfiles depend on. When I launch a new shell after grabbing these dotfiles it'll fail because I don't have `fzf` or `exa` or whatever other tool I've got aliased installed so things go **boom** in weird ways.

I started playing around with [Nix](https://nixos.org), which has a naming problem because there's Nix the OS, Nix the package manager, and Nix the config format. It did appear to enable what I was looking for: a way to easily both manage packages *and* config. It'll install Fish Shell, my aliases, and the tools that those aliases depend on.

Does it deliver? For the most part, yea! [Nix Flakes](https://nixos.wiki/wiki/Flakes) are the way to go despite being marked as an 'experimental' feature, it seems stable and widely used. I spent a lot of time though figuring out how to get it work right, but so far I've got it easily recreating my environment on:

1. macOS
2. A Raspberry Pi running Ubuntu
3. An EC2 instance running Amazon Linux 2
4. An EC2 instance running Ubuntu
5. and more!

On macOS you can use [Nix-Darwin](https://github.com/LnL7/nix-darwin) to also do OS level stuff (most important for me as an Emacs user is to remap Caps Lock to Control) and handle managing Homebrew packages. That's nice.

[The repo that contains my configuration is here](https://github.com/wnka/piwonka-flakes). It'll be evolving over time.

The best resources I found for getting going are:
1. [YouTube video - Walkthrough of Nix Install and Setup on MacOS](https://www.youtube.com/watch?v=LE5JR4JcvMg)
2. [Boilerplate repo for nix-darwin flakes](https://github.com/heywoodlh/nix-darwin-flake)
3. [Another repo for inspiration](https://github.com/breuerfelix/dotfiles)

I just started playing around with [dev-templates](https://github.com/the-nix-way/dev-templates) which are an easy way to have directory/workspace specific dev setups. Not sure how well that interacts with VSCode and whatnot, but seems pretty neat! 
