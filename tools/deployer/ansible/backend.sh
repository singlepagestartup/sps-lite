#!/bin/bash
. ./get_env.sh

PROJECT_NAME=$(get_env PROJECT_NAME)
DOMAIN=$(get_env DOMAIN)

JWT_SECRET=$(get_env JWT_SECRET)
ADMIN_JWT_SECRET=$(get_env ADMIN_JWT_SECRET)
APP_KEYS=$(get_env APP_KEYS)
API_TOKEN_SALT=$(get_env API_TOKEN_SALT)
SEED_ENTITIES=$(get_env SEED_ENTITIES)
UPLOAD_PROVIDER=$(get_env UPLOAD_PROVIDER)

AWS_S3_REGION=$(get_env AWS_S3_REGION)
AWS_S3_BUCKET=$(get_env AWS_S3_BUCKET)

SERVICE_NAME=$(get_env BACKEND_SERVICE_NAME)
SERVICE_SUBDOMAIN=$(get_env BACKEND_SERVICE_SUBDOMAIN)

FRONTEND_SERVICE_SUBDOMAIN=$(get_env FRONTEND_SERVICE_SUBDOMAIN)

PORTAINER_USERNAME=$(get_env PORTAINER_USERNAME)
PORTAINER_PASSWORD=$(get_env PORTAINER_PASSWORD)
PORTAINER_SERVICE_SUBDOMAIN=$(get_env PORTAINER_SERVICE_SUBDOMAIN)

DATABASE_NAME=$(get_env DATABASE_NAME)
DATABASE_USERNAME=$(get_env DATABASE_USERNAME)
DATABASE_PASSWORD=$(get_env DATABASE_PASSWORD)

DOCKER_HUB_URL=$(get_env DOCKER_HUB_URL)
DOCKER_HUB_SERVICE_REPOSITORY=$(get_env BACKEND_DOCKER_HUB_REPOSITORY_NAME)

GITHUB_TOKEN=$(get_env GITHUB_TOKEN)
GITHUB_REPOSITORY=$(get_env GITHUB_REPOSITORY)

AVOID_DATABASE_SEEDING=$(get_env AVOID_DATABASE_SEEDING)

PORTAINER_URL=$PORTAINER_SERVICE_SUBDOMAIN.$DOMAIN

TELEGRAM_BOT_TOKEN=$(get_env TELEGRAM_BOT_TOKEN)
TELEGRAM_BOT_USERNAME=$(get_env TELEGRAM_BOT_USERNAME)
RUN_TELEGRAM_BOT=$(get_env RUN_TELEGRAM_BOT)

OPENAI_API_KEY=$(get_env OPENAI_API_KEY)

STRIPE_API_KEY=$(get_env STRIPE_API_KEY)

ZERO_X_PROCESSING_TEST_PAYMENTS=$(get_env ZERO_X_PROCESSING_TEST_PAYMENTS)
ZERO_X_PROCESSING_SHOP_ID=$(get_env ZERO_X_PROCESSING_SHOP_ID)
ZERO_X_PROCESSING_WEBHOOK_PASSWORD=$(get_env ZERO_X_PROCESSING_WEBHOOK_PASSWORD)

if [ -z "$AWS_S3_REGION" ]
then
    AWS_S3_REGION=eu-central-1
fi

if [ -z "$AWS_S3_BUCKET" ]
then
    AWS_S3_BUCKET=$PROJECT_NAME
fi

if [ -z "$SERVICE_SUBDOMAIN" ]
then
    SERVICE_A="@"
    SERVICE_URL=$DOMAIN
else
    SERVICE_A=$SERVICE_SUBDOMAIN
    SERVICE_URL=$SERVICE_SUBDOMAIN.$DOMAIN
fi

if [ -z "$FRONTEND_SERVICE_SUBDOMAIN" ]
then
    HOST_URL=$DOMAIN
else
    HOST_URL=$FRONTEND_SERVICE_SUBDOMAIN.$DOMAIN
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
    ./sentry.sh up $SERVICE_NAME node && \
    ./domain.sh present $SERVICE_URL $SERVICE_A && \
    ansible-playbook \
        ./backend/create_backend.yaml \
        -e "SERVICE_NAME=$SERVICE_NAME \
            JWT_SECRET=$JWT_SECRET \
            ADMIN_JWT_SECRET=$ADMIN_JWT_SECRET \
            APP_KEYS=$APP_KEYS \
            API_TOKEN_SALT=$API_TOKEN_SALT \
            SEED_ENTITIES=$SEED_ENTITIES \
            UPLOAD_PROVIDER=$UPLOAD_PROVIDER \
            DATABASE_NAME=$DATABASE_NAME \
            DATABASE_USERNAME=$DATABASE_USERNAME \
            DATABASE_PASSWORD=$DATABASE_PASSWORD \
            AWS_S3_BUCKET=$AWS_S3_BUCKET \
            AWS_S3_REGION=$AWS_S3_REGION \
            PROJECT_NAME=$PROJECT_NAME \
            DOMAIN=$DOMAIN \
            PORTAINER_USERNAME=$PORTAINER_USERNAME \
            PORTAINER_PASSWORD=$PORTAINER_PASSWORD \
            PORTAINER_URL=$PORTAINER_URL \
            DOCKER_HUB_URL=$DOCKER_HUB_URL \
            DOCKER_HUB_SERVICE_REPOSITORY=$DOCKER_HUB_SERVICE_REPOSITORY \
            SERVICE_URL=$SERVICE_URL \
            AVOID_DATABASE_SEEDING=$AVOID_DATABASE_SEEDING \
            TELEGRAM_BOT_TOKEN=$TELEGRAM_BOT_TOKEN \
            TELEGRAM_BOT_USERNAME=$TELEGRAM_BOT_USERNAME \
            RUN_TELEGRAM_BOT=$RUN_TELEGRAM_BOT \
            OPENAI_API_KEY=$OPENAI_API_KEY \
            STRIPE_API_KEY=$STRIPE_API_KEY \
            HOST_URL=$HOST_URL \
            ZERO_X_PROCESSING_TEST_PAYMENTS=$ZERO_X_PROCESSING_TEST_PAYMENTS \
            ZERO_X_PROCESSING_SHOP_ID=$ZERO_X_PROCESSING_SHOP_ID \
            ZERO_X_PROCESSING_WEBHOOK_PASSWORD=$ZERO_X_PROCESSING_WEBHOOK_PASSWORD" && \
    ansible-playbook \
        ./backend/fill_github.yaml \
        -e "GITHUB_TOKEN=$GITHUB_TOKEN \
            GITHUB_REPOSITORY=$GITHUB_REPOSITORY \
            SERVICE_URL=$SERVICE_URL \
            PORTAINER_URL=$PORTAINER_URL"
else
    ansible-playbook \
        ./backend/clear_github.yaml \
        -e "GITHUB_TOKEN=$GITHUB_TOKEN \
            GITHUB_REPOSITORY=$GITHUB_REPOSITORY" && \
    ansible-playbook \
        ./backend/delete_backend.yaml \
        -e "SERVICE_NAME=$SERVICE_NAME" && \
    ./domain.sh down $SERVICE_URL $SERVICE_A &&
    ./sentry.sh down $SERVICE_NAME
fi