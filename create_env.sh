#!/bin/bash

if [ "$1" = "vercel" ]; then
  production_env=$(cat apps/host/.env.production)
  echo $production_env > apps/host/.env.local
  echo $(printenv) > apps/host/.env.local
  exit 0
fi

cd apps/db && ./create_env.sh
cd ../redis && ./create_env.sh
cd ../host && ./create_env.sh