---
title: "This site now uses AWS Amplify"
date: 2022-11-26T15:23:01-08:00
---

I work at AWS on the Lambda team, so it's only natural that I would use Lambda to build this blog. [This old post](/posts/hugo-lambda/) has all the details of how I did that. It was a fun experiment that has worked well, but I had to deal with things like upgrade the version of Hugo embedded in my Lambda function, set up API Gateway endpoints, and deal with S3 buckets and their permissions in relation to CloudFront. I was chatting with another person in AWS from the [Amplify](https://aws.amazon.com/amplify/) team and learned how Amplify can handle Hugo blogs easily. I played around with it and found it super easy to use, so I migrated this site over to it.

The migration process was really easy, I just had to set it up and then point the DNS records to the endpoint Amplify created. **Very easy!** I got to go disable my old GitHub webhook, delete my API Gateway endpoints, delete my Lambda functions, delete the CloudFront distribution, and nuke the S3 bucket.

My "workflow" is the same: Write a post in Markdown and then push to [the GitHub repository](https://github.com/wnka/pdp80-blog). It's great to not have to think about my glued together stuff and simplify!
