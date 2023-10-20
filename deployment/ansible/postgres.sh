#!/bin/bash
. ./get_env.sh

POSTGRES_DB=$(get_env POSTGRES_DB)
POSTGRES_USER=$(get_env POSTGRES_USER)
POSTGRES_PASSWORD=$(get_env POSTGRES_PASSWORD)

if [ "$1" == "up" ]
then
    ansible-playbook create_postgres.yaml \
        -e "POSTGRES_DB=$POSTGRES_DB \
            POSTGRES_USER=$POSTGRES_USER \
            POSTGRES_PASSWORD=$POSTGRES_PASSWORD"
else
    ansible-playbook delete_postgres.yaml
fi