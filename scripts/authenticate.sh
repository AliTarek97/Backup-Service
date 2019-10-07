#!/bin/bash
firebase auth:export daily-backup.csv --project $PROJECT --token $FIRBASE_AUTH_TOKEN
gsutil cp daily-backup.csv gs://$AUTH_BACKUP_BUCKET/$(date -d "today" +"%Y%m%d%H%M")/