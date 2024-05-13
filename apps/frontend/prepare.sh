#!/bin/bash

# check is bun exists on the system
if ! [ -x "$(command -v bun)" ]; then
    echo 'Error: bun is not installed.' >&2
    # install bun
    curl -fsSL https://bun.sh/install | bash
fi

# Postgres database
cd ./db
chmod +x ./up.sh
./up.sh
cd ..

# Local env for Next.js
chmod +x ./create_env.sh
./create_env.sh

bun install

bun db:generate
echo "Waiting for postgres to start..."
sleep 10
bun db:migrate
bun db:seed
bun dev