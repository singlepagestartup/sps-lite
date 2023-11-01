#!/bin/bash
. ./get_env.sh
PROJECT_NAME=$(get_env PROJECT_NAME)
DOMAIN=$(get_env DOMAIN)
JWT_SECRET=$(get_env JWT_SECRET)
ADMIN_JWT_SECRET=$(get_env ADMIN_JWT_SECRET)
APP_KEYS=$(get_env APP_KEYS)
API_TOKEN_SALT=$(get_env API_TOKEN_SALT)
AWS_S3_REGION=$(get_env AWS_S3_REGION)

AWS_ACCESS_KEY=$(grep "^AWS_ACCESS_KEY=" iam.env | cut -d '=' -f2)
AWS_SECRET_ACCESS_KEY=$(grep "^AWS_SECRET_ACCESS_KEY=" iam.env | cut -d '=' -f2)
SENTRY_DSN=$(cat backend_sentry_dsn.env)

# Clear file
> backend.env

add_env() {
    echo "$1=$2" >> backend.env
}

add_env "HOST" "0.0.0.0"
add_env "PORT" "1337"
add_env "NODE_ENV" "production"

add_env "JWT_SECRET" $JWT_SECRET
add_env "ADMIN_JWT_SECRET" $ADMIN_JWT_SECRET

add_env "APP_KEYS" $APP_KEYS
add_env "API_TOKEN_SALT" $API_TOKEN_SALT

add_env "DATABASE_CLIENT" "postgres"
add_env "DATABASE_PORT" "5432"
add_env "DATABASE_HOST" "postgres"
add_env "DATABASE_NAME" $(get_env POSTGRES_DB)
add_env "DATABASE_USERNAME" $(get_env POSTGRES_USER)
add_env "DATABASE_PASSWORD" $(get_env POSTGRES_PASSWORD)

add_env "SET_PERMISSIONS" true

add_env "EMAIL_PROVIDER" "amazon-ses"
add_env "AWS_SES_ACCESS_KEY" $AWS_ACCESS_KEY
add_env "AWS_SES_SECRET_ACCESS_KEY" $AWS_SECRET_ACCESS_KEY
add_env "AWS_SES_URL" "https://email.eu-central-1.amazonaws.com"
add_env "AWS_SES_DEFAULT_FROM" "no-reply-$PROJECT_NAME@mail.singlepagestartup.com"
add_env "AWS_SES_DEFAULT_REPLY_TO" "contact@$DOMAIN"

add_env "AWS_S3_ACCESS_KEY" $AWS_ACCESS_KEY
add_env "AWS_S3_SECRET_ACCESS_KEY" $AWS_SECRET_ACCESS_KEY
add_env "AWS_S3_BUCKET" $PROJECT_NAME
add_env "AWS_S3_REGION" $AWS_S3_REGION
add_env "AWS_S3_ENDPOINT" "https://s3.amazonaws.com/$PROJECT_NAME"

add_env "SENTRY_DSN" $SENTRY_DSN