#! /bin/bash
docker run -it --env-file=.env -e "CONFIG=$(cat /Users/lvbin/workspace/tqt-doc/config.json | jq -r tostring)" algolia/docsearch-scraper