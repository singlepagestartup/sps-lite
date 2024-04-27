#!/bin/bash
. ../../tools/deployer/ansible/get_env.sh

add_env() {
    echo "$1=$2" >> .env.local
}

# Check is .env.local file exists
if [ -f .env.local ]; then
    echo "File .env.local already exists"
    exit 1
fi

# Clear env file
> .env.local
echo "Created /.env.local file"

NODE_ENV=local
add_env "NODE_ENV" $NODE_ENV

NEXT_PUBLIC_BACKEND_URL=http://localhost:3000
add_env "NEXT_PUBLIC_BACKEND_URL" $NEXT_PUBLIC_BACKEND_URL

NEXT_PUBLIC_FRONTEND_URL=http://localhost:3000
add_env "NEXT_PUBLIC_BACKEND_URL" $NEXT_PUBLIC_BACKEND_URL

DATABASE_HOST=localhost
add_env "DATABASE_HOST" $DATABASE_HOST

DATABASE_NAME=$(get_env POSTGRES_DB ../db/.env)
add_env "DATABASE_NAME" $DATABASE_NAME

DATABASE_USERNAME=$(get_env POSTGRES_USER ../db/.env)
add_env "DATABASE_USERNAME" $DATABASE_USERNAME

DATABASE_PASSWORD=$(get_env POSTGRES_PASSWORD ../db/.env)
add_env "DATABASE_PASSWORD" $DATABASE_PASSWORD

DATABASE_PORT=$(get_env POSTGRES_PORT ../db/.env)
add_env "DATABASE_PORT" $DATABASE_PORT