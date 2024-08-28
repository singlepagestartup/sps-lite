#!/bin/bash
. ./get_env.sh

REDIS_PASSWORD=$(get_env REDIS_PASSWORD)
REDIS_PORT=$(get_env REDIS_PORT)

GITHUB_TOKEN=$(get_env GITHUB_TOKEN)
GITHUB_REPOSITORY=$(get_env GITHUB_REPOSITORY)

if [ "$1" != "down" ]
then
    ansible-playbook \
        ./redis/create_redis.yaml \
         -e "REDIS_PORT=$REDIS_PORT \
            REDIS_PASSWORD=$REDIS_PASSWORD" &&\
    ansible-playbook \
        ./redis/fill_github.yaml \
        -e "GITHUB_TOKEN=$GITHUB_TOKEN \
            GITHUB_REPOSITORY=$GITHUB_REPOSITORY"
else
    ansible-playbook \
        ./redis/delete_redis.yaml && \
    ansible-playbook \
        ./redis/clear_github.yaml \
        -e "GITHUB_TOKEN=$GITHUB_TOKEN \
            GITHUB_REPOSITORY=$GITHUB_REPOSITORY"
fi