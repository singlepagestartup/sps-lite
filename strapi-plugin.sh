#!/bin/bash
# https://itnext.io/local-library-development-with-nx-release-and-verdaccio-019af5c5bec0
npx nx run sps-billing-backend:build && echo yes | nx release prepatch && nx release publish && npm i sps-billing-plugin@latest