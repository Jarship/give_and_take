#!/usr/bin/env bash
yarn build
aws s3 sync ./dist s3://example/ --delete