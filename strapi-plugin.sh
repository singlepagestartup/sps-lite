#!/bin/bash
# https://itnext.io/local-library-development-with-nx-release-and-verdaccio-019af5c5bec0

# if not found
# apt install netcat-traditional
if nc -z localhost 4873; then
    echo "Verdaccio is running"
else
    npx nx run @sps/source:local-registry &\
fi

npx nx run sps-billing-backend:tsc:lib && echo yes | nx release prepatch && nx release publish && npm i --save-optional sps-billing-plugin@latest @sps/shared-frontend-utils-server@latest @sps/shared-utils@latest

npx nx run @sps/source:force-stop-registry