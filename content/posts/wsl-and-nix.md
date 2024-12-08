---
title: "WSL2 and Nix Flakes"
date: 2024-12-07T16:58:28-08:00
Categories: ["computers"]
---

I've been using Nix for a while now to manage my dotfiles and all that, which I wrote about [here previously](/posts/on-nix/). I continue to use it and I continue to like it. 

I recently got an M3 MacBook Air 15" and Nix made getting things set up really easy. I recently upgraded my development EC2 instance I use for work to a newer generation instance and, again, Nix made this real easy.

At home I recently upgraded my gaming PC by transplanting a new motherboard and CPU into the existing case. I'm now running an Intel Core i9-14900K, up from an i7-8700K. It's running great and I'm doing BIG GAMING on it.

I was wondering what development on this fancy gaming PC would be like and was curious if my Nix setup would work. Well thanks to WSL2, it seriously **just worked.** I was able to use my existing [ec2 home-manager](https://github.com/wnka/piwonka-flakes/blob/26b258e226784b90605728bbe5070364fd3fbb52/flake.nix#L103) config with zero changes. Mind. Blown!

Not surpisingly, this machine is pretty fast. I got SSH running on it and I can connect to it remotely, which definitely didn't "just work" but wasn't too bad.

I'm not sure if I'll actually use it, but it was pretty neat to get it working so easily.
