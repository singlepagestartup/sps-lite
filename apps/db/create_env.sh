#!/bin/bash

# Check is .env file exists
if [ -f .env ]; then
    echo "File .env already exists"
    exit 1
fi

# Clear env file
> .env
echo "Created /db/.env file"

add_env() {
    echo "$1=$2" >> .env
}

generate_random_string() {
    echo $RANDOM | md5sum | head -c 32;
}

get_available_port() {
    START=$1
    
    while nc -z localhost $START
    do
        START=$((START+1))
    done

    echo $START
}

add_env "CREATE_DUMP_ON_COMMIT" "true"

REPO_NAME=$(basename -s .git `git config --get remote.origin.url`)

add_env "COMPOSE_PROJECT_NAME" $REPO_NAME

add_env "POSTGRES_DB" $REPO_NAME

add_env "POSTGRES_USER" $REPO_NAME

add_env "POSTGRES_PASSWORD" $(generate_random_string)

POSTGRES_PORT=$(get_available_port 5432)

add_env "POSTGRES_PORT" $POSTGRES_PORT

ADMINER_PORT=$(get_available_port 8080)

add_env "ADMINER_PORT" $ADMINER_PORT