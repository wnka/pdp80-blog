---
title: "Amazon Spheres"
date: 2018-02-07T21:57:31-08:00
Categories: ["amazon"]
code: true
---
I got to tour the [Spheres at Amazon](https://www.seattlespheres.com) this week, and it was pretty awesome. There's quite a lot of space to hang out and relax, but for now you have to make an appointment to go as they ramp up letting people in. I sat for a bit and enjoyed a [donut](https://www.gpdoughnuts.com).

{{<figure src="/images/spheres/2018-02-06_09-20-06_475.jpg">}}
{{<figure src="/images/spheres/2018-02-06_09-21-50_875.jpg">}}
{{<figure src="/images/spheres/2018-02-06_09-22-21_961.jpg">}}
{{<figure src="/images/spheres/2018-02-06_09-22-55_148.jpg">}}
{{<figure src="/images/spheres/2018-02-06_09-23-20_444.jpg">}}
{{<figure src="/images/spheres/2018-02-06_09-24-42_461.jpg">}}
{{<figure src="/images/spheres/2018-02-06_09-26-41_091.jpg">}}
{{<figure src="/images/spheres/2018-02-06_09-27-28_219.jpg">}}
{{<figure src="/images/spheres/2018-02-06_09-27-54_271.jpg">}}
{{<figure src="/images/spheres/2018-02-06_09-28-10_195.jpg">}}
{{<figure src="/images/spheres/2018-02-06_09-28-34_363.jpg">}}
{{<figure src="/images/spheres/2018-02-06_09-28-50_704.jpg">}}
{{<figure src="/images/spheres/2018-02-06_09-29-00_993.jpg">}}
{{<figure src="/images/spheres/2018-02-06_09-29-12_478.jpg">}}
{{<figure src="/images/spheres/2018-02-06_09-30-16_283.jpg">}}
{{<figure src="/images/spheres/2018-02-06_09-30-42_263.jpg">}}
{{<figure src="/images/spheres/2018-02-06_09-30-59_092.jpg">}}
{{<figure src="/images/spheres/2018-02-06_09-31-32_360.jpg">}}
{{<figure src="/images/spheres/2018-02-06_09-31-43_778.jpg">}}
{{<figure src="/images/spheres/2018-02-06_09-32-44_415.jpg">}}
{{<figure src="/images/spheres/2018-02-06_09-34-09_162.jpg">}}
{{<figure src="/images/spheres/2018-02-06_09-34-24_091.jpg">}}
{{<figure src="/images/spheres/2018-02-06_09-35-18_861.jpg">}}

I took these pictures on my iPhone 8 Plus, and pretty much just walked around and snapped whatever.

To put these on this page, I wanted to resize them such that the width of the images was fixed regardless of their orientation. To do this, I used [ImageMagick](https://www.imagemagick.org/script/index.php). These notes are mostly for me.

First, I need to find each image's orientation:

```bash
for i in `ls *.jpeg`; do 
   j=`identify -format '%[orientation]' $i`; 
   echo $j,$i;
done
```

This gives output like this:

```bash
BottomRight,2018-02-06_09-30-16_283.jpeg
RightTop,2018-02-06_09-30-25_981.jpeg
```

* BottomRight = landscape, or wider than tall.
* RightTop = portrait, or taller than wide.

To resize the portrait images (and also rename them from .jpeg to .jpg):
```bash
for i in `grep RightTop files.out | cut -d, -f2`; do 
    echo $i; 
    convert $i -resize "1024x" -sampling-factor 4:2:0 -strip -quality 85 -interlace JPEG -colorspace sRGB -auto-orient ${i: : -5}.jpg; 
done
```

To resize the landscape images:
```bash
for i in `grep BottomRight files.out | cut -d, -f2`; do
    echo $i; 
    convert $i -resize "768x" -sampling-factor 4:2:0 -strip -quality 85 -interlace JPEG -colorspace sRGB -auto-orient ${i: : -5}.jpg;
done
```

Neat!
