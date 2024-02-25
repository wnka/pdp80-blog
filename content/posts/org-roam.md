---
title: "How I use Org-Roam for Notes"
date: 2024-02-04T10:02:14-08:00
code: true
Categories: ["personal"]
---

[Org-Roam](https://www.orgroam.com) is 'a plain-text personal knowledge management system' that I've been using since 2020. It's a layer on top of [Org-Mode](https://orgmode.org) files, so you can do all the cool stuff like have code snippets and TODOs and all that. If you're not familiar with Org-Mode, it's very similar to Markdown. I'm a long-time Emacs user and this is primarily what I use Emacs for these days.

You create pages and link them together, that's it! What pages you create and how you link them together is up to you, so here's what I do.

## People

I create a page for any person I interact with. If I have one-on-ones with someone those notes go on the page for that person, or if I'm in meetings or doc reviews with someone then I can create links to them. One thing I really **love** about Org-Roam is that you can **alias** pages. I sometimes can't remember someone's name, but I can remember their e-mail alias, or I remember what team they're on but not their name. I can take "Frank Beef" and alias them to "@fbeef" and also alias them to "S4 Storage Contact". If I go to open a page, any of those 3 names/aliases will take me to the same page, so if I can't remember Frank's name but I remember they work in "S4 Storage", I can look them up that way.

I use a `person` capture template where the file name is their alias. The template automatically asks for their full name and adds it under `ROAM_ALIASES`.

```elisp
(setq org-roam-capture-templates
  '(
    ("d" "default" plain "%?"
     :target (file+head "%<%Y%m%d%H%M%S>-${slug}.org"
                        "#+title: ${title}")
     :unnarrowed t)
    ("p" "person" plain "%?"
     :target (file+head "%<%Y%m%d%H%M%S>-${slug}.org"
                        ; I name these files after the persons work alias,
                        ; then put their full name under "ROAM_ALIASES"
                        ":PROPERTIES:\n:ROAM_ALIASES: \"${fullname}\"\n:END:\n#+title: ${title}")
     :unnarrowed t)
    )
  )
```

## Document reviews

I review a lot of docs at work so it's helpful to have an Org-Roam page for these docs, a link to the doc, and a backlink to the person(s) that wrote it. I take light notes on the discussion and if someone brings up an interesting point I'll backlink to them too. This helps me keep track of contributions by people, which is useful for feedback. 

When I start writing my own documents I start with an Org-Roam page and jot down some ideas or a TODO list of things to cover, then I can keep notes around the conversations or reviews with folks I've had on the topic.

## Put a date on everything

I've got the **who** and the **what**, but it's really helpful to also have the **when**. My workflow is often open a page and then insert an Org header at the bottom with today's date. I wrote some elisp to make that easy:

```elisp
(defun pdp-org-roam-insert ()
  (interactive)
  (goto-char (point-max)) ; go to the bottom of the page
  (insert (format-time-string "* %m/%d/%Y")))

; key bindings
; I bind both of these so I can be sloppy with
; how I hold down CTRL.
(global-set-key "\C-c\C-np" 'pdp-org-roam-insert)
(global-set-key "\C-c\C-n\C-p" 'pdp-org-roam-insert)
```

## Brag Documents

[Julia Evans wrote a wonderful article about keeping a brag document](https://jvns.ca/blog/brag-documents/). Sometimes you've got to write about some accomplishments at work or you just need to remind yourself of some cool/helpful things you've done. I am someone who suffers from [impostor syndrome](https://en.wikipedia.org/wiki/Impostor_syndrome) so it's helpful to remind myself of positives to shutdown that negative self talk.

Every year, I create a new Org-Roam document, for example `brag2024`, and if I do something neato or am helpful I create a link to `brag2024` in those notes. Helped someone think more clearly about something in a 1-on-1? In the notes for that 1-on-1 write a quick blurb and create a link to `brag2024`. Then, I can open `brag2024` and look at the backlinks. This will tell me all the things I've done that I feel are brag worthy for that year!

This is so handy!

I've also experimented with an "anti-brag" document I can link to, where maybe things don't go as well as I hoped or there's something I need to work on. This again comes back to combating that negative self talk, I can pull these up and see that things aren't actually as catastrophic as I feel they are in my head. 

## Keep it safe

I keep all this in a Git repository encrypted with [git-crypt](https://github.com/AGWA/git-crypt). Here's my `.gitattributes` file:

```text
*.org filter=git-crypt diff=git-crypt
*.org_archive filter=git-crypt diff=git-crypt
roam/** filter=git-crypt diff=git-crypt
.gitattributes !filter !diff
```

## In closing

For me it's about **who**, **what**, **when**, and tracking my contributions.

Org-Roam is all just plain-text, it does use a database to index your pages for fast lookup by page/alias. You can also tag things to categorize them but I don't really do that. There's a cool web-based UI that will give you a graphical representation of your nodes and how they're linked together. It's neat to look at but I don't really use it. 

As always, there's more than one way to do it. There are other tools in this space too like [Notion](https://www.notion.so) or [Obsidian](https://obsidian.md) that will also help with notes. This is my style and I've found keeping these notes really helpful. Find what works for you!
