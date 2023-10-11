#!/bin/bash
. ./get_env.sh

DOMAIN=$(get_env DOMAIN)

if [ "$1" == "up" ]
then
    ansible-playbook create_portainer.yaml \
        -e "DOMAIN=$DOMAIN"
else
    ansible-playbook delete_portainer.yaml
fi