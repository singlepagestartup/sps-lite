#!/bin/bash
find ./src/plugins -maxdepth 1 -type d \( ! -name . \) -exec bash -c "cd '{}' && npm install && npm run build" \;
npm rebuild --verbose sharp
npm run develop