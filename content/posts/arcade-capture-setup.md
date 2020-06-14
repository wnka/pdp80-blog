---
title: "Arcade Capture Setup"
date: 2020-06-13T20:01:26-07:00
draft: true
mermaid: true
---

I recently discovered [MermaidJS](https://mermaid-js.github.io/mermaid/#/) for drawing diagrams for work and found it to be really useful. I figured I'd use it to diagram how I can capture/record/stream from my arcade cabinets.

{{<mermaid>}}
graph TD;
  A([Arcade Board])
  Sp([Splice])
  S([SEGV echo.chan Splitter])
  C([Capture Card])
  Cab([Arcade Cabinet])
  Input([Joystick/Buttons])
  Pi([Raspberry Pi Input Display])
  OSSC([OSSC Scaler])

  A-- Audio+Video Outputs -->S;
  S-- Audio+Video -->OSSC;
  OSSC-- HDMI -->C;
  S-- Audio+Video -->Cab;
  Input-- Inputs -->Sp; 
  Sp-- Inputs -->Pi;
  Sp-- Inputs -->A;
{{</mermaid>}}

The [SEGV echo.chan](https://www.arcade-projects.com/forums/index.php?thread/7187-segv-echo-chan-%E2%9D%A4%EF%B8%8F/) is a JAMMA extender that splits and the video and audio signals from an arcade board. Before I had this, I just spliced the video wires which led to a dim image and crappy quality since the video signal coming off an arcade board isn't strong enough to drive two displays. The echo.chan has a video amp to maintain signal quality.

The [OSSC](https://www.retrorgb.com/ossc.html) is the **O**pen **S**ource **S**can **C**onverter which takes the 240p video signal and audio signal and outputs a 720p HDMI signal. The OSSC is a really fantastic piece of hardware!

The [Raspberry Pi Input Display](/posts/jamma-input-display/) is my own creation that I've posted about before.

## Hugo Shortcode

I created a little [Hugo Shortcode](https://gohugo.io/content-management/shortcodes/) called `mermaid` to easily embed these diagrams:

```html
<div class="mermaid">
  {{.Inner}}
</div>
```

## Diagram Source

Using that shortcode, here's the source for the above diagram:

```text
{{</* mermaid */>}}
graph TD;
  J([Arcade Board])
  Sp([Splice])
  S([SEGV echo.chan Splitter])
  C([Capture Card])
  Cab([Arcade Cabinet])
  Input([Joystick/Buttons])
  Pi([Raspberry Pi Input Display])
  OSSC([OSSC Scaler])

  J-- Audio+Video Outputs -->S;
  S-- Audio+Video -->OSSC;
  OSSC-- HDMI -->C;
  S-- Audio+Video -->Cab;
  Input-- Inputs -->Sp; 
  Sp-- Inputs -->Pi;
  Sp-- Inputs -->J;
{{</* /mermaid */>}}
```

