#!/bin/bash
chmod +x ./create_env.sh ./develop.sh
./create_env.sh
npm install
find ./src/plugins -maxdepth 1 -type d \( ! -name . \) -exec bash -c "cd '{}' && npm install && npm run build" \;
./develop.sh