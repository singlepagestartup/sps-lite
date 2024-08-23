#!/bin/bash

if [ "$1" = "vercel" ]; then
  echo $(printenv) > apps/host/.env.local
  exit 0
fi

cd apps/db && ./create_env.sh
cd ../redis && ./create_env.sh
cd ../host && ./create_env.sh