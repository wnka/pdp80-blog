+++
title = "JAMMA Input Display"
date = "2014-05-04"
slug = "jamma-input-display"
Categories = ["raspberrypi", "jamma"]
+++

I built an input display for my arcade cabinets by reading the
[GPIO pins](http://elinux.org/RPi_Low-level_peripherals) on a
[Raspberry Pi](http://www.raspberrypi.org/) using
[Node.js](http://nodejs.org) and [socket.io](http://socket.io).

[The code is available on GitHub](https://github.com/wnka/arcadebuttons-node-pi) and here is a sample capture from me playing some [Espgaluda](http://en.wikipedia.org/wiki/Espgaluda):

{{< youtube uSHMhtIR2wg  >}}

I created an AMP-UP control panel wiring extender that splits off the input wires on my Astro City into the Raspberry
Pi, but you could also split the wires off of the JAMMA harness. The needed 12-pin AMP-UP connectors are available
from [DigiKey](http://digikey.com).

- [Male Pins](http://www.digikey.com/product-detail/en/175151-1/A107106TR-ND/1152993)
- [Male Connector](http://www.digikey.com/product-search/en?WT.z_header=search_go&lang=en&site=us&keywords=A106906-ND&x=0&y=0&formaction=on)
- [Female Pins](http://www.digikey.com/product-detail/en/175149-2/A107105TR-ND/1149437)
- [Female Connector](http://www.digikey.com/product-search/en?WT.z_header=search_go&lang=en&site=us&keywords=A106914-ND&x=0&y=0&formaction=on)

{{<img src="/images/rpibuttons.jpg" caption="Raspberry Pi with control panel extension">}}

With Node up and running on the Raspberry Pi, you can just point a web browser at the server and see
the inputs reflected there.

{{<img src="/images/buttonslocal.jpg" caption="Button display">}}

For streaming I just added the region of the desktop where the browser was being shown so that it
would be shown in the stream.

I wanted to play around with Node.js and this project was what I thought of when reading about
Node's event-driven model. Streamers that play arcade games in MAME have the ability to use
input displays and I wanted to be able to do that as well for an actual arcade cab.

**NOTE**: The display does sometimes freeze up, however refreshing the
browser page typically solves this. I'm not sure what causes it, maybe I'll figure it out.

