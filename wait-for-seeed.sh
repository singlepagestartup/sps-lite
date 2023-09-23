#!/bin/bash
while [ ! -f backend/seeded.txt ];
do
  sleep 2
  echo "Waiting for backend seed is finished"
done