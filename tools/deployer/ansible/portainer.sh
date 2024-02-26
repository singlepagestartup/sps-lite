#!/bin/bash
. ./get_env.sh

DOMAIN=$(get_env DOMAIN)

SERVICE_SUBDOMAIN=$(get_env PORTAINER_SERVICE_SUBDOMAIN)

PORTAINER_USERNAME=$(get_env PORTAINER_USERNAME)
PORTAINER_PASSWORD=$(get_env PORTAINER_PASSWORD)

DOCKER_HUB_PASSWORD=$(get_env DOCKER_HUB_PASSWORD)
DOCKER_HUB_URL=$(get_env DOCKER_HUB_URL)
DOCKER_HUB_LOGIN_USERNAME=$(get_env DOCKER_HUB_LOGIN_USERNAME)

if [ -z "$SERVICE_SUBDOMAIN" ]
then
    SERVICE_A="@"
    SERVICE_URL=$DOMAIN
else 
    SERVICE_A=$SERVICE_SUBDOMAIN
    SERVICE_URL=$SERVICE_SUBDOMAIN.$DOMAIN
fi

if [ "$1" != "down" ]
then
    ./domain.sh present $SERVICE_URL $SERVICE_A && \
    ansible-playbook \
        ./portainer/create_portainer.yaml \
        -e "SERVICE_URL=$SERVICE_URL" && \
    ansible-playbook \
        ./portainer/create_portainer_user.yaml \
        -e "PORTAINER_USERNAME=$PORTAINER_USERNAME \
            PORTAINER_PASSWORD=$PORTAINER_PASSWORD \
            SERVICE_URL=$SERVICE_URL" && \
    ansible-playbook \
        ./portainer/add_docker_hub_registry.yaml \
        -e "PORTAINER_USERNAME=$PORTAINER_USERNAME \
            PORTAINER_PASSWORD=$PORTAINER_PASSWORD \
            DOCKER_HUB_PASSWORD=$DOCKER_HUB_PASSWORD \
            DOCKER_HUB_URL=$DOCKER_HUB_URL \
            DOCKER_HUB_LOGIN_USERNAME=$DOCKER_HUB_LOGIN_USERNAME \
            SERVICE_URL=$SERVICE_URL"
else
    ansible-playbook \
        ./portainer/delete_portainer.yaml && \
    ./domain.sh down $SERVICE_URL $SERVICE_A
fi