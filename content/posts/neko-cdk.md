---
title: "Use Neko to watch stuff with friends"
date: 2022-01-23T08:37:47-08:00
draft: false
---

[Neko](https://github.com/m1k1o/neko) let's you spin up a server where you and friends can watch videos together. All you need to do is point your web browser to the server and login with the password you've shared. Inside Neko, you will see a web-browser for watching YouTube, Netflix, et al. You can also set it up to use VLC if you want to upload your own video files. A friend and I used it to watch the entire [Fast and Furious](https://en.wikipedia.org/wiki/Fast_%26_Furious) series and it was a blast. I own the DVDs so I ripped them, launched a Neko instance with VLC, uploaded the files and opened them in VLC. We were able to chat on the phone and the video was really well synchronized for us, we could tell because when [absurd shit would happen](https://youtu.be/jXwxLoEe-M0?t=177) we'd start laughing at the same time. There's also a group chat on the Neko site, which was handy for us as we both have young kids and would often watch stuff together late at night when we needed to be quiet.

This has been a huge help during the COVID-19 pandemic.

{{< figure src="/images/neko.ff.jpg" alt="I life my life a quarter mile at a time." caption="lol" >}}

I used AWS for my "temporary server on the internet needs". **Disclaimer:** I work for [AWS Lambda](https://aws.amazon.com/lambda/), so of course I used AWS! I don't get free AWS or anything so it's not a cost thing, it's just that I'm familiar and comfortable with AWS. Neko is just a Docker container, so you could run it pretty much anywhere. Using AWS cost me under a dollar for an evening of movie watching which is a pretty great value. Your milage may vary...

I used [AWS CDK](https://aws.amazon.com/cdk/) to make it super easy to deploy the infrastructure needed for Neko. [The code for that is available here.](https://github.com/wnka/neko-cdk-infrastructure) The instructions should be pretty straightforward for anyone familiar with the CDK, but basically it creates some Launch Templates, some Auto Scaling Groups, and you just dial up the Auto Scaling Group from 0 instances to 1 instance. When you're done, set it back to 0 instances. It also creates a user that has the absolute minimal permissions needed to fiddle with those Auto Scaling Groups and find the IP you should share with your friends.

Give it a shot and have a movie night with friends, or just a night of watching goofy YouTube videos. If you find the CDK stuff helpful or want to make changes to it, go for it! Fork it, change it, send me a pull request or don't, that's all fine with me!

Huge thanks to [nurdism](https://github.com/nurdism/neko) for initially creating Neko and [m1k1o](https://github.com/m1k1o/neko) for maintaining and continuing to improve it!
