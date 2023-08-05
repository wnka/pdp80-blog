---
title: "Best Paper Award at Usenix ATC '23!"
date: 2023-07-28T20:58:24-07:00
---

A paper that I wrote with some colleagues won a Best Paper Award at the USENIX ATC '23 conference! This is a huge honor!

The paper, [On-demand Container Loading in AWS Lambda](https://www.usenix.org/conference/atc23/presentation/brooker), details the system we built to enable incremental loading of container images. I worked on many aspects of this system and designed the Garbage Collector. 

> AWS Lambda is a serverless event-driven compute service, part of a category of cloud compute offerings sometimes called Function-as-a-service (FaaS). When we first released AWS Lambda, functions were limited to 250MB of code and dependencies, packaged as a simple compressed archive. In 2020, we released support for deploying container images as large as 10GiB as Lambda functions, allowing customers to bring much larger code bases and sets of dependencies to Lambda. Supporting larger packages, while still meeting Lambda’s goals of rapid scale (adding up to 15,000 new containers per second for a single customer, and much more in aggregate), high request rate (millions of requests per second), high scale (millions of unique workloads), and low start-up times (as low as 50ms) presented a significant challenge.
>
>We describe the storage and caching system we built, optimized for delivering container images on-demand, and our experiences designing, building, and operating it at scale. We focus on challenges around security, efficiency, latency, and cost, and how we addressed these challenges in a system that combines caching, deduplication, convergent encryption, erasure coding, and block-level demand loading.
>
>Since building this system, it has reliably processed hundreds of trillions of Lambda invocations for over a million AWS customers, and has shown excellent resilience to load and infrastructure failures.

This On-Demand loading technology was first used for [Container Support in 2020](https://aws.amazon.com/blogs/aws/new-for-aws-lambda-container-image-support/) then was later expanded to support [Lambda SnapStart which launched in 2022](https://aws.amazon.com/blogs/aws/new-accelerate-your-lambda-functions-with-lambda-snapstart/). 

{{< figure src="/images/IMG_0026.jpg" alt="Presentation slide announcing the award" caption="What an Honor!" >}}

{{< figure src="/images/aplusgc.jpg" alt="Coffee mug that says 'A+ Garbage Collector'" caption="A coworker got me this mug since I designed the Garbage Collector. It confuses non-computer science people." >}}
