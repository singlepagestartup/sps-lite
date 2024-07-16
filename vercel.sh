#/bin/bash

export NEW_MIGRATIONS="false"

migrate=$(npx nx run host:db:migrate)

echo "Migrate command: $migrate"

if [[ $migrate == *"NEW_MIGRATIONS=true"* ]]; then
  echo "New migrations found"
  NEW_MIGRATIONS="true"
fi

npx nx run host:db:seed

if [[ $VERCEL_ENV == "production"  ]] ; then
  npm run host:build
else
  npm run host:build
fi