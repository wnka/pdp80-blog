---
title: "Bye Bye Instagram"
date: 2020-11-27T19:08:56-08:00
draft: false
code: true
---

Instagram changed their API and made it harder to share **my photos** on **my blog** which is horseshit.

I'd have to sign up for a Facebook developer account and get some tokens and blah blah blah. I'm not doing that, so I'm removing all references to Instagram photos and just hosting the images myself.

In Hugo blog, Instagram photos are referenced using a shortcode like this:

```html
{{</* instagram BoFYpYGg-aK */>}}
```

This shortcode broke because of this change, which completely broke Hugo site generation. This was irritating, but I guess it makes sense when your website is static. To get things building again, I replaced the shortcode with this:

```html
<p><b>There used to be an embedded Instagram image here, but they deprecated the easy to use public API. I'm working on having this site not touch Instagram.</b></p>
```

I then had to go through my blog, find all the references to the Instagram shortcode, and use those to build URLs to the actual images:

```bash
$ rg "<\s*insta" | grep -o " instagram [^\s]* " | awk '{print "https://instagram.com/p/"$2}'
https://instagram.com/p/BoFYpYGg-aK
https://instagram.com/p/BoFX6j8APC2
https://instagram.com/p/BoG9IvzgtAB
https://instagram.com/p/BoIrdP9gSee
https://instagram.com/p/BoSk4xTgATQ
https://instagram.com/p/BoS_gw3gozI
```

These are the images that I need to replace. You can't just open those pages, right click on the image and hit "save"; because Instagram doesn't want to act like a normal website. You can use a web inspector to find the resource and save it, which is what I ended up doing. Thanks again Instagram.

Thankfully I didn't link to Instagram very often. I'll never post to Instagram again, and I rarely look at it. But when I do, I mostly look at [skateboarding videos](<https://www.instagram.com/p/CHo7i9NlI3c/>).
