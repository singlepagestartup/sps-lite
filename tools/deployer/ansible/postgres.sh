#!/bin/bash
. ./get_env.sh

DATABASE_NAME=$(get_env DATABASE_NAME)
DATABASE_USERNAME=$(get_env DATABASE_USERNAME)
DATABASE_PASSWORD=$(get_env DATABASE_PASSWORD)

GITHUB_TOKEN=$(get_env GITHUB_TOKEN)
GITHUB_REPOSITORY=$(get_env GITHUB_REPOSITORY)

if [ "$1" != "down" ]
then
    ansible-playbook \
        ./postgres/create_postgres.yaml \
         -e "DATABASE_NAME=$DATABASE_NAME \
            DATABASE_USERNAME=$DATABASE_USERNAME \
            DATABASE_PASSWORD=$DATABASE_PASSWORD" &&\
    ansible-playbook \
        ./postgres/fill_github.yaml \
        -e "GITHUB_TOKEN=$GITHUB_TOKEN \
            GITHUB_REPOSITORY=$GITHUB_REPOSITORY"
else
    ansible-playbook \
        ./postgres/delete_postgres.yaml && \
    ansible-playbook \
        ./postgres/clear_github.yaml \
        -e "GITHUB_TOKEN=$GITHUB_TOKEN \
            GITHUB_REPOSITORY=$GITHUB_REPOSITORY"
fi