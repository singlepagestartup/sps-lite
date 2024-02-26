#!/bin/bash

. ./get_env.sh

PROJECT_NAME=$(get_env PROJECT_NAME)

DOCKER_HUB_USERNAME=$(get_env DOCKER_HUB_USERNAME)
DOCKER_HUB_LOGIN_USERNAME=$(get_env DOCKER_HUB_LOGIN_USERNAME)
DOCKER_HUB_URL=$(get_env DOCKER_HUB_URL)
DOCKER_HUB_PASSWORD=$(get_env DOCKER_HUB_PASSWORD)

NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID=$(get_env NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID)
DOCUMENTATION_GOOGLE_TAG_MANAGER_ID=$(get_env DOCUMENTATION_GOOGLE_TAG_MANAGER_ID)

GITHUB_TOKEN=$(get_env GITHUB_TOKEN)
GITHUB_REPOSITORY=$(get_env GITHUB_REPOSITORY)

AVOID_DATABASE_SEEDING=$(get_env AVOID_DATABASE_SEEDING)

SECRETS=(\
    "PROJECT_NAME $PROJECT_NAME" \
    "DOCKER_HUB_USERNAME $DOCKER_HUB_USERNAME" \
    "DOCKER_HUB_LOGIN_USERNAME $DOCKER_HUB_LOGIN_USERNAME" \
    "DOCKER_HUB_URL $DOCKER_HUB_URL" \
    "DOCKER_HUB_PASSWORD $DOCKER_HUB_PASSWORD" \
    "AVOID_DATABASE_SEEDING $AVOID_DATABASE_SEEDING" \
    "NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID $NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID" \
    "DOCUMENTATION_GOOGLE_TAG_MANAGER_ID $DOCUMENTATION_GOOGLE_TAG_MANAGER_ID" \
)

BRANCHES=("update-backend" "update-frontend" "update-documentation" "seed-database")

if [ "$1" != "down" ]
then
    cd ./github/github-node-api && npm install && cd ../..

    for i in "${BRANCHES[@]}"
    do
        BRANCH_NAME=$i
        node ./github/github-node-api/create_branch.js \
            $GITHUB_TOKEN \
            $GITHUB_REPOSITORY \
            $BRANCH_NAME
    done
        
    for i in "${SECRETS[@]}"
    do
        SECRET_NAME="${i%% *}"
        SECRET_CONTENT="${i#* }"

        node ./github/github-node-api/create_secret.js \
            $GITHUB_TOKEN \
            $GITHUB_REPOSITORY \
            $SECRET_NAME \
            $SECRET_CONTENT
    done
else
    cd ./github/github-node-api && npm install && cd ../..

    for i in "${SECRETS[@]}"
    do
        SECRET_NAME="${i%% *}"
        SECRET_CONTENT="${i#* }"

        node ./github/github-node-api/delete_secret.js \
            $GITHUB_TOKEN \
            $GITHUB_REPOSITORY \
            $SECRET_NAME
    done
fi