---
title: "Outdoor Wifi"
date: 2020-08-09T20:16:46-07:00
draft: false
mermaid: true
---
The COVID 2020 work from home life marches on and the weather here in Seattle has been nice, so I wanted to be able to work while sitting outside in our backyard.

The problem though is that the WiFi reception in our backyard sucks, so I needed to fix it if I wanted to dial into video calls and not have slow networking. Our house was built in the 1920s and it has plaster walls which I think have a wire mesh substructure. WiFi reception was a huge struggle in our house until 2015 when I got hip to [Ubiquiti UniFi equipment](https://unifi-network.ui.com/wi-fi). Their system allows for multiple wireless *access points* that mesh into one network. The inside of our house is covered with [two access points](https://store.ui.com/collections/unifi-network-access-points/products/unifi-ac-pro): one in the basement near the front of the house and one upstairs near the back of the house.

The backyard was covered but was spotty, if I video chatted with someone the signal would drop, I couldn't stream video, ping times were all over the place. With UniFi the answer is easy: add another access point! They have an [outdoor model](https://store.ui.com/collections/unifi-network-access-points/products/unifi-flexhd) that can be mounted in a variety of ways, so I ran a cable out of the basement into the backyard (which included some gross crawlspace crawling), up the side of the house, and mounted the access point under the awning. 

![Installed](/images/IMG_2356.jpg)

One great thing about these access points is that they use [Power over Ethernet](https://en.wikipedia.org/wiki/Power_over_Ethernet) or *PoE* which makes it so you just have to run an Ethernet cable and data and power are provided. I have two of these [UniFi switches](https://store.ui.com/collections/unifi-network-routing-switching/products/unifi-switch-8-60w) that provide PoE for the access points.

Here's a graph of my network:

{{<mermaid>}}
graph TD;
  I((Internet))
  CB([Cable Modem])
  USG([UniFi Security Gateway])
  BS([Basement UniFi Switch])
  BA([Basement Access Point])
  FS([Furnace Room Switch])
  UA([Upstairs Access Point])
  OA([Outdoor Access Point])

  classDef ap fill:#000,color:#FFF
  class BA,UA,OA ap
  
  subgraph Basement
  I-->CB;
  CB-->USG;
  USG-->BS;
  BS-- PoE -->BA;
  BS-->FS;
  end;
  subgraph Upstairs
  FS-- PoE -->UA;
  end
  subgraph Outside
  FS-- PoE -->OA;
  end
  
{{</mermaid>}}

I can now enjoy the weather and sip some coffee on the deck while working or streaming some video!
