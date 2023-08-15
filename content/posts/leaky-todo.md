---
title: "A leaky TODO list"
date: 2023-08-15T10:13:08-08:00
code: true
---
I've been an [org-mode](https://orgmode.org/) user off and on since around 2007. I've tried other different tools that are excellent ([OmniFocus](https://www.omnigroup.com/omnifocus), [Things](https://culturedcode.com/things/)), but I always drift back to org-mode due to it's flexibility and the ease of dealing with plain text. Over time I've tried all these different strategies for keeping todo lists, like dumping everything thought I have into the list, breaking things down by project, urgency and all that. My big problem with this is that it leads to long lists, and long lists make me feel sad. I am a master of feeling "I should be doing more" so when I see a long todo list it causes me much anxiety.

My strategy is now this: My entire todo list is one file, `inbox.org`, and anything that isn't flagged as important or has a due date gets automatically archived after 7 days.

I come across lots of stuff where I think "oh! I should learn about this!" and add it to my todo list. Many of these things don't actually need to be looked into, so having them just fall off of my todo list after 7 days is fine. If I'm really supposed to learn about it, I'll go find it again. If I can't find it again, oh well. This keeps my list nice and short without me even having to think about it.

> Hold on is what they say
>
> But I say open up your hands and let it fly away
>
> Until the day it comes back and it was meant to be
>
> Take a look at the lovely gift the world has sent to me
>
> -- [Aceyalone - The Hold](https://www.youtube.com/watch?v=JpnEdUBczvk) 

Here's my elisp function that will do this pruning:

```elisp
(defun pdp-org-archive-done-tasks ()
  (interactive)
  ; take all entries that are over 7 days old and archive them
  ; I just want to end the endless build up.
  ;
  ; Mark items as DONE
  (org-ql-select (concat org-directory "inbox.org")
    '(and
      (todo "TODO")
      (not (ts :from -7)) ; older than 7 days
      (not (priority >= "C")) ; has no priority
      (not (scheduled)) ; isn't scheduled
      (not (deadline)) ; doesn't have a deadline
      )
    :action '(org-todo "DONE") ; mark it as done
    )

  ; Archive DONE items
  ; I was using org-ql-select but you had to run it multiple times to
  ; archive everything because the shifting of items in the file as things
  ; got archived confused it. From: https://stackoverflow.com/a/27043756
  (org-map-entries
   (lambda ()
     (org-archive-subtree)
     (setq org-map-continue-from
           (org-element-property
            :begin (org-element-at-point)))) "/DONE" 'file)
  )
```

I run this automatically on every save of `inbox.org`. I only want this to run on `inbox.org`, so my save hook looks like this:

```elisp
(defun pdp-org-autoarchive ()
  (when (derived-mode-p 'org-mode)
    (save-excursion
      (goto-char 0)
      (if (string-equal (car
                         (cdr
                          (car
                           (org-collect-keywords '("AUTOARCHIVE")))))
                        "t")
          (progn
            (pdp-org-archive-done-tasks))))))
(add-hook 'before-save-hook #'pdp-org-autoarchive)
```

This will only run when saving a file that has `#+AUTOARCHIVE t` at the top. I am a heavy user of [org-roam](https://www.orgroam.com/) so I don't want this running on the ~2,000 `.org` files I have in there. More on my org-roam usage in the future.

My `inbox.org` looks like this:

```org
#+TITLE: Inbox
#+AUTOARCHIVE: t
* TODO Something I need to do in the future. It's scheduled, so it won't get deleted.
SCHEDULED: <2023-10-23 Mon>
[2023-04-03 Mon]
* TODO [#A] This has a priority flag, so it won't get deleted.
[2023-04-01 Sat]
* TODO This doesn't have a due date or a priority, so it'll get deleted in the future.
[2023-08-14 Mon]
```

The important thing here is that everything I capture has a timestamp associated with it. My capture template looks like this:

```elisp
(setq org-capture-templates
      '(
        ("t" "Todo" entry (file (lambda () (concat org-directory "inbox.org")))
         "* TODO %?\n%u\n%i\n")
        ))
```

This is just what I do and it works well for me.
