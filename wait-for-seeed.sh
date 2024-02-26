#!/bin/bash
while [ ! -f apps/backend/seeded.txt ];
do
  sleep 2
  echo "Waiting for backend seed is finished"
done