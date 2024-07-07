#/bin/bash

export NEW_MIGRATIONS="false"

migrate=$(npx nx run host:db:migrate)

if [[ $migrate == *"NEW_MIGRATIONS=true"* ]]; then
  echo "New migrations found"
  NEW_MIGRATIONS="true"
fi

npx nx run host:db:seed
npm run host:build
