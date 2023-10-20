#!/bin/bash
. ./get_env.sh

DOMAIN=$(get_env DOMAIN)
PORTAINER_SERVICE_SUBDOMAIN=$(get_env PORTAINER_SERVICE_SUBDOMAIN)

PORTAINER_URL=$PORTAINER_SERVICE_SUBDOMAIN.$DOMAIN

if [ "$1" == "up" ]
then
    ansible-playbook create_portainer.yaml \
        -e "DOMAIN=$DOMAIN \
            SERVICE_URL=$PORTAINER_URL"
else
    ansible-playbook delete_portainer.yaml
fi