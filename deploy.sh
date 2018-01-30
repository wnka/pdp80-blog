#!/bin/bash
export S3_BUCKET=pdp80.com
# clean public build dir
rm -rf public
# rebuild site
hugo
# destructively sync with S3 bucket
# (anything not mirrored on the local filesystem will be deleted)
aws s3 sync public/ s3://$S3_BUCKET/ --delete
