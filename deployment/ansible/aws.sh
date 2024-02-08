#!/bin/bash
. ./get_env.sh

PROJECT_NAME=$(get_env PROJECT_NAME)

AWS_ACCESS_KEY=$(get_env ROOT_AWS_ACCESS_KEY)
AWS_SECRET_ACCESS_KEY=$(get_env ROOT_AWS_SECRET_ACCESS_KEY)

AWS_S3_REGION=$(get_env AWS_S3_REGION)
AWS_S3_BUCKET=$(get_env AWS_S3_BUCKET)

GITHUB_TOKEN=$(get_env GITHUB_TOKEN)
GITHUB_REPOSITORY=$(get_env GITHUB_REPOSITORY)

if [ -z "$AWS_ACCESS_KEY" ]
then
    echo "ROOT_AWS_ACCESS_KEY not passed - skipping AWS IAM, S3 and SES creation/deletion"
    exit 0
fi

if [ -z "$AWS_S3_BUCKET" ]
then
    AWS_S3_BUCKET=$PROJECT_NAME
fi

if [ -z "$AWS_S3_REGION" ]
then
    AWS_S3_REGION=eu-central-1
fi

if [ "$1" != "down" ]
then
    ansible-playbook \
        ./aws/create_iam_user.yaml \
        -e "AWS_ACCESS_KEY=$AWS_ACCESS_KEY \
            AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY \
            PROJECT_NAME=$PROJECT_NAME \
            AWS_S3_BUCKET=$AWS_S3_BUCKET" && \
    ansible-playbook \
        ./aws/create_s3.yaml \
        -e "AWS_ACCESS_KEY=$AWS_ACCESS_KEY \
            AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY \
            AWS_S3_REGION=$AWS_S3_REGION \
            PROJECT_NAME=$PROJECT_NAME \
            AWS_S3_BUCKET=$AWS_S3_BUCKET" && \
    ansible-playbook \
        ./aws/fill_github.yaml \
        -e "GITHUB_TOKEN=$GITHUB_TOKEN \
            GITHUB_REPOSITORY=$GITHUB_REPOSITORY \
            AWS_S3_REGION=$AWS_S3_REGION \
            PROJECT_NAME=$PROJECT_NAME \
            AWS_S3_BUCKET=$AWS_S3_BUCKET"
else
    ansible-playbook \
        ./aws/clear_github.yaml \
        -e "GITHUB_TOKEN=$GITHUB_TOKEN \
            GITHUB_REPOSITORY=$GITHUB_REPOSITORY" && \
    ansible-playbook \
        ./aws/delete_iam_user.yaml \
        -e "AWS_ACCESS_KEY=$AWS_ACCESS_KEY \
            AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY \
            PROJECT_NAME=$PROJECT_NAME" && \
    ansible-playbook \
        ./aws/delete_s3.yaml \
        -e "AWS_ACCESS_KEY=$AWS_ACCESS_KEY \
            AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY \
            PROJECT_NAME=$PROJECT_NAME \
            AWS_S3_BUCKET=$AWS_S3_BUCKET"
    
fi