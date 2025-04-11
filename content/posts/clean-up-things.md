---
title: "Cleaning up old items in Things"
date: 2025-04-11T10:18:48-07:00
code: true
---

In the past I wrote about having [a leaky TODO list]({{ <ref "leaky-todo.md"> }}) and how I implemented that in org-mode. I moved to using [Things](https://culturedcode.com/things/) for tracking my TODO list and wanted to be able to keep cleaning up things that had been sitting in my list for too long.

Thankfully Things is scriptable using AppleScript, which is confusing as shit and doesn't have great documentation but I was able to get it working. Here's the script:

```js
(() => {
const things = Application('com.culturedcode.ThingsMac');
const todos = things.toDos().map(todo => ({
  id: todo.id(),
  name: todo.name(),
  status: todo.status(),
  notes: todo.notes(),
  tags: todo.tagNames(),
  creationDate: todo.creationDate(),
  dueDate: todo.dueDate() && todo.dueDate().toISOString(),
  activationDate: todo.activationDate() && todo.activationDate().toISOString(),
  originalItem: todo,
  project: todo.project() && {
    id: todo.project().id(),
    name: todo.project().name(),
  },
}));

// Clean up things more than 7 days old
const targetDate = new Date().setDate(new Date().getDate() - 7);

const expired = todos
  .filter(t => t.status == "open")
  .filter(t => t.project == null)
  .filter(t => t.activationDate == null)
  .filter(t => t.creationDate <= targetDate);

expired.forEach(t => {
  // console.log("Archiving: " + t.name);
  t.originalItem.status = "completed";
});
})()  
```

This will only act against your inbox folder for things that don't have a project or due date. Items in folders won't get touched. Put this in a `.jxa` file, like `things-cleanup.jxa` and then you can run it like so from the terminal:

```bash
osascript -l JavaScript things-cleanup.jxa  
```

I run this every morning as part of a larger script that starts my workday. It does this, pulls stuff from Git, gets my temporary creds, stuff like that.
