#!/bin/bash
while [ ! -f backend/is-seeded.txt ];
do
  ls backend
  sleep 2
  echo "Waiting for seed finished"
done