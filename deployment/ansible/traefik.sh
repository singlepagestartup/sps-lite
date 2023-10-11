#!/bin/bash
. ./get_env.sh

TRAEFIK_BASIC_AUTH=$(./create_traefik_user.sh)
DOMAIN=$(get_env DOMAIN)

if [ "$1" == "up" ]
then
    ansible-playbook create_traefik.yaml \
        -e "DOMAIN=$DOMAIN \
            TRAEFIK_BASIC_AUTH='$TRAEFIK_BASIC_AUTH'"
else
    ansible-playbook delete_traefik.yaml
fi