#!/bin/bash
. ./get_env.sh

DOMAIN=$(get_env DOMAIN)

TRAEFIK_SERVICE_SUBDOMAIN=$(get_env TRAEFIK_SERVICE_SUBDOMAIN)
TRAEFIK_USERNAME=$(get_env TRAEFIK_USERNAME)
TRAEFIK_PASSWORD=$(get_env TRAEFIK_PASSWORD)

SERVICE_URL=$TRAEFIK_SERVICE_SUBDOMAIN.$DOMAIN
SERVICE_A=$TRAEFIK_SERVICE_SUBDOMAIN

if [ "$1" != "down" ]
then
    ansible-playbook \
        ./traefik/create_traefik.yaml \
        -e "DOMAIN=$DOMAIN \
            SERVICE_URL=$SERVICE_URL \
            TRAEFIK_USERNAME=$TRAEFIK_USERNAME \
            TRAEFIK_PASSWORD=$TRAEFIK_PASSWORD" && \
    ./domain.sh present $SERVICE_URL $SERVICE_A
else
    ansible-playbook \
        ./traefik/delete_traefik.yaml && \
    ./domain.sh down $SERVICE_URL $SERVICE_A
fi