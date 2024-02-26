#!/bin/bash

# Check is .env.local file exists
if [ -f .env ]; then
    echo "File .env already exists"
    exit 1
fi

# Clear env file
> .env
echo "Created /bdd/.env file"

add_env() {
    echo "$1=$2" >> .env
}

add_env "STRAPI_ADMIN_LOGIN" "admin@example.com"
add_env "STRAPI_ADMIN_PASSWORD" "Password123!"

if [ ! -z $CODESPACE_NAME ]; then
    BACKEND_URL=https://$CODESPACE_NAME-1337.app.github.dev
    add_env "BACKEND_URL" $BACKEND_URL

    FRONTEND_URL=https://$CODESPACE_NAME-3000.app.github.dev
    add_env "FRONTEND_URL" $FRONTEND_URL
else
    BACKEND_URL=http://localhost:1337
    add_env "BACKEND_URL" $BACKEND_URL

    FRONTEND_URL=http://localhost:3000
    add_env "FRONTEND_URL" $FRONTEND_URL
fi