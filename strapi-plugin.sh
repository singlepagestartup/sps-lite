#!/bin/bash
# https://itnext.io/local-library-development-with-nx-release-and-verdaccio-019af5c5bec0

# if not found
# apt install netcat-traditional
if nc -z localhost 4873; then
    echo "Verdaccio is running"
else
    npx nx run @sps/source:local-registry &\
fi

# npx nx run sps-billing-backend:tsc:lib
npx nx release prepatch --first-release -y
npx nx run sps-billing-backend:nx-release-publish
# npx nx release prepatch --first-release -y
# npx nx run sps-billing-backend:nx-release-publish -y
# npx nx release publish
npm i sps-billing-plugin@latest @sps/shared-frontend-utils-server@latest @sps/shared-utils@latest

# npx nx run @sps/source:force-stop-registry
npm config set registry https://registry.npmjs.org