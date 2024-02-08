#!/bin/bash
. ./get_env.sh

DOMAIN=$(get_env DOMAIN)

SERVICE_NAME=$(get_env FRONTEND_SERVICE_NAME)
SERVICE_SUBDOMAIN=$(get_env FRONTEND_SERVICE_SUBDOMAIN)

PORTAINER_USERNAME=$(get_env PORTAINER_USERNAME)
PORTAINER_PASSWORD=$(get_env PORTAINER_PASSWORD)
PORTAINER_SERVICE_SUBDOMAIN=$(get_env PORTAINER_SERVICE_SUBDOMAIN)

DOCKER_HUB_URL=$(get_env DOCKER_HUB_URL)
DOCKER_HUB_SERVICE_REPOSITORY=$(get_env FRONTEND_DOCKER_HUB_REPOSITORY_NAME)

GITHUB_TOKEN=$(get_env GITHUB_TOKEN)
GITHUB_REPOSITORY=$(get_env GITHUB_REPOSITORY)

PORTAINER_URL=$PORTAINER_SERVICE_SUBDOMAIN.$DOMAIN

if [ -z "$SERVICE_SUBDOMAIN" ]
then
    SERVICE_A="@"
    SERVICE_URL=$DOMAIN
else 
    SERVICE_A=$SERVICE_SUBDOMAIN
    SERVICE_URL=$SERVICE_SUBDOMAIN.$DOMAIN
fi

if [ -z $SERVICE_NAME ]
then
    echo "Skip $0"
    exit 0
fi

if [ -z $DOCKER_HUB_SERVICE_REPOSITORY ]
then
    echo "No docker hub repository name for service $SERVICE_NAME"
    exit 0
fi

if [ "$1" != "down" ]
then
    ./sentry.sh up $SERVICE_NAME javascript-react NEXT_PUBLIC_SENTRY_DSN && \
    ./domain.sh present $SERVICE_URL $SERVICE_A && \
    ansible-playbook \
        ./frontend/create_frontend.yaml \
        -e "SERVICE_NAME=$SERVICE_NAME \
            PORTAINER_URL=$PORTAINER_URL \
            PORTAINER_USERNAME=$PORTAINER_USERNAME \
            PORTAINER_PASSWORD=$PORTAINER_PASSWORD \
            DOCKER_HUB_URL=$DOCKER_HUB_URL \
            DOCKER_HUB_SERVICE_REPOSITORY=$DOCKER_HUB_SERVICE_REPOSITORY \
            SERVICE_URL=$SERVICE_URL" && \
    ansible-playbook \
        ./frontend/fill_github.yaml \
        -e "GITHUB_TOKEN=$GITHUB_TOKEN \
            GITHUB_REPOSITORY=$GITHUB_REPOSITORY \
            PORTAINER_URL=$PORTAINER_URL \
            SERVICE_URL=$SERVICE_URL"
else
    ansible-playbook \
        ./frontend/clear_github.yaml \
        -e "GITHUB_TOKEN=$GITHUB_TOKEN \
            GITHUB_REPOSITORY=$GITHUB_REPOSITORY" && \
    ansible-playbook \
        ./frontend/delete_frontend.yaml \
        -e "SERVICE_NAME=$SERVICE_NAME" && \
    ./domain.sh down $SERVICE_URL $SERVICE_A && \
    ./sentry.sh down $SERVICE_NAME NEXT_PUBLIC_SENTRY_DSN
fi