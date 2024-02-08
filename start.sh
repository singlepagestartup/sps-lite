#!/bin/bash

# Run frontend app
# if first passed argument is "frontend" run npm run frontend:start
if [ "$1" = "frontend" ]; then
  npm run frontend:start
  exit 0
fi