---
title: Using TinaCMS to Post
date: 2024-12-20T17:24:41.975Z
draft: false
categories:
  - computers
---

I use [Hugo](https://gohugo.io/) for this blog and I like it. It's static and fast and simple. I want to post more but there's friction since I need to check in and push some Markdown to GitHub, which is hard to do from a phone. I was looking at [Cassidy Williams' blog](https://cassidoo.co/) and her [template](https://github.com/cassidoo/blahg) which mentioned this thing called [TinaCMS](https://tina.io/) that gives a nice web interface for writing posts and will handle the pushing to GitHub for you, all while keeping your site's staticness. Cool! I'm in!

BTW you should follow Cassidy Williams.

We're currently in Grand Junction, Colorado for the holidays/my wife's sister's wedding, and last night it was my wife's turn to get the kiddo down to bed. While she did that, I poked at getting Tina set up. It was pretty easy and the Tina site has good tutorials.

The GitHub commit where I set all this up is [here](https://github.com/wnka/pdp80-blog/commit/d160d1d64563754bff01241063d57208f075bb44).

I use AWS Amplify for hosting and things were pretty straightforward on that side too. I had to update my build environment to be Amazon Linux 2023 (which is now the default, I was still using the ancient Amazon Linux 2) so that I could use a modern version of... well anything, and then add Node.js 22 to my build packages in addition to Hugo. My build settings `amplify.yml` became:

```yaml
version: 1
frontend:
  phases:
    build:
      commands:
        - npm install
        - npm run build
  artifacts:
    baseDirectory: public
    files:
      - '**/*'
  cache:
    paths: []
```

All I had to change was the `build: commands:`, which used to just be `- hugo --minify`. If you look in the `package.json` in the linked GitHub commit, `npm run build` now runs:`tinacms build && hugo --minify`

I signed up for a free account on [TinaCloud](https://app.tina.io/signin), got the access tokens and stuff, then added the environment variables needed by `tina/config.ts` to the Environment Variables on AWS Amplify.

There were a few missteps, but overall it was easy!

Now it's all set up, I'm writing this post in Tina, and now I can write posts more easily. I'm wondering if I should migrate to Astro or something more "modern", but that's another task for another day.
