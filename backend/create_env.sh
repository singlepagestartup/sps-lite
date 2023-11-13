#!/bin/bash
. ../deployment/ansible/get_env.sh

# Check is .env file exists
if [ -f .env ]; then
    echo "File .env already exists"
    exit 1
fi

# Clear env file
> .env
echo "Created /backend/.env file"

add_env() {
    echo "$1=$2" >> .env
}

generate_random_string() {
    echo $RANDOM | md5sum | head -c 32;
}

if [ ! -z $CODESPACE_NAME ]; then
    BACKEND_URL=https://$CODESPACE_NAME-1337.app.github.dev
    add_env "BACKEND_URL" $BACKEND_URL

    FRONTEND_URL=https://$CODESPACE_NAME-3000.app.github.dev
    add_env "FRONTEND_URL" $FRONTEND_URL
fi

add_env "HOST" "localhost"

JWT_SECRET=$(generate_random_string)
add_env "JWT_SECRET" $JWT_SECRET

ADMIN_JWT_SECRET=$(generate_random_string)
add_env "ADMIN_JWT_SECRET" $ADMIN_JWT_SECRET

APP_KEYS=$(generate_random_string)
add_env "APP_KEYS" $APP_KEYS

API_TOKEN_SALT=$(generate_random_string)
add_env "API_TOKEN_SALT" $API_TOKEN_SALT

DATABASE_CLIENT=postgres
add_env "DATABASE_CLIENT" $DATABASE_CLIENT

DATABASE_HOST=localhost
add_env "DATABASE_HOST" $DATABASE_HOST

DATABASE_NAME=$(get_env POSTGRES_DB ../db/.env)
add_env "DATABASE_NAME" $DATABASE_NAME

DATABASE_USERNAME=$(get_env POSTGRES_USER ../db/.env)
add_env "DATABASE_USERNAME" $DATABASE_USERNAME

DATABASE_PASSWORD=$(get_env POSTGRES_PASSWORD ../db/.env)
add_env "DATABASE_PASSWORD" $DATABASE_PASSWORD

DATABASE_PORT=$(get_env POSTGRES_PORT ../db/.env)
add_env "DATABASE_PORT" $DATABASE_PORT

SET_PERMISSIONS=true
add_env "SET_PERMISSIONS" $SET_PERMISSIONS

AWS_SES_ACCESS_KEY=$AWS_ACCESS_KEY
if [ ! -z "$AWS_SES_ACCESS_KEY" ];
then
    add_env "AWS_SES_ACCESS_KEY" $AWS_SES_ACCESS_KEY

    EMAIL_PROVIDER=amazon-ses
    add_env "EMAIL_PROVIDER" $EMAIL_PROVIDER

    AWS_SES_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY
    add_env "AWS_SES_SECRET_ACCESS_KEY" $AWS_SES_SECRET_ACCESS_KEY

    AWS_SES_URL=https://email.eu-central-1.amazonaws.com
    add_env "AWS_SES_URL" $AWS_SES_URL

    AWS_SES_DEFAULT_FROM=no-reply@$AWS_S3_BUCKET.singlepagestartup.com
    add_env "AWS_SES_DEFAULT_FROM" $AWS_SES_DEFAULT_FROM

    AWS_SES_DEFAULT_REPLY_TO=$AWS_S3_BUCKET@singlepagestartup.com
    add_env "AWS_SES_DEFAULT_REPLY_TO" $AWS_SES_DEFAULT_REPLY_TO

    AWS_S3_ACCESS_KEY=$AWS_ACCESS_KEY
    add_env "AWS_S3_ACCESS_KEY" $AWS_S3_ACCESS_KEY

    AWS_S3_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY
    add_env "AWS_S3_SECRET_ACCESS_KEY" $AWS_S3_SECRET_ACCESS_KEY

    AWS_S3_BUCKET=$AWS_S3_BUCKET
    add_env "AWS_S3_BUCKET" $AWS_S3_BUCKET

    AWS_S3_REGION=eu-central-1
    add_env "AWS_S3_REGION" $AWS_S3_REGION

    AWS_S3_ENDPOINT=https://s3.amazonaws.com/$AWS_S3_BUCKET
    add_env "AWS_S3_ENDPOINT" $AWS_S3_ENDPOINT
else
    echo "No AWS credentials found. Uploads saving to local storage"
fi