#!/bin/bash

# Check is .env.local file exists
if [ -f .env.local ]; then
    echo "File .env.local already exists"
    exit 1
fi

# Clear env file
> .env.local
echo "Created /frontend/.env.local file"

add_env() {
    echo "$1=$2" >> .env.local
}

NODE_ENV=local
add_env "NODE_ENV" $NODE_ENV

if [ ! -z $CODESPACE_NAME ]; then
    NEXT_PUBLIC_BACKEND_URL=https://$CODESPACE_NAME-1337.app.github.dev
    add_env "NEXT_PUBLIC_BACKEND_URL" $NEXT_PUBLIC_BACKEND_URL

    NEXT_PUBLIC_FRONTEND_URL=https://$CODESPACE_NAME-3000.app.github.dev
    add_env "NEXT_PUBLIC_FRONTEND_URL" $NEXT_PUBLIC_FRONTEND_URL
else
    NEXT_PUBLIC_BACKEND_URL=http://localhost:1337
    add_env "NEXT_PUBLIC_BACKEND_URL" $NEXT_PUBLIC_BACKEND_URL

    NEXT_PUBLIC_FRONTEND_URL=http://localhost:3000
    add_env "NEXT_PUBLIC_FRONTEND_URL" $NEXT_PUBLIC_FRONTEND_URL
fi