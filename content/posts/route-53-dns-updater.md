---
title: "Route 53 DNS Updater"
date: 2021-05-05T21:02:24-07:00
draft: false
code: true
---

I use [Route 53](https://aws.amazon.com/route53/) for my DNS and have an A record that points to home for [Wireguard](https://www.wireguard.com/) access. Here's a handy script that I run in cron to keep that record updated.

{{< code language="bash" >}}
#!/bin/sh

### Things you need to set
###
# The record to update
DNS_RECORD="blahblah.com"
# The AWS profile to use for creds, must exist in ~/.aws/credentials
PROFILE_NAME="yr-creds"
# Your hosted zone ID
ZONE_NAME="yr-zone-id"
###
### END Things you need to set

IP="$(curl -s http://checkip.amazonaws.com/)"
TMP_FILE="$(mktemp)"

cat > "${TMP_FILE}" << EOF
{
  "Comment": "DDNS update",
  "Changes": [
    {
      "Action": "UPSERT",
      "ResourceRecordSet": {
        "ResourceRecords": [
          {"Value": "${IP}"}
        ],
        "Name": "${DNS_RECORD}",
        "Type": "A",
        "TTL": 300
      }
    }
  ]
}
EOF

aws --profile ${PROFILE_NAME} route53 change-resource-record-sets \
    --hosted-zone-id "/hostedzone/${ZONE_NAME}" \
    --change-batch "file://${TMP_FILE}"
{{< /code >}}

Then I run it in `cron` every 20 minutes, which you set using `crontab -e`.

{{< code language="bash" >}}
# m h  dom mon dow   command
*/20   *    *   *   *   bash /path/to/script/ddns.sh >> /path/to/output/ddns.out
{{< /code >}}
