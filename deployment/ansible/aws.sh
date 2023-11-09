#!/bin/bash
. ./get_env.sh

PROJECT_NAME=$(get_env PROJECT_NAME)

AWS_ACCESS_KEY=$(get_env ROOT_AWS_ACCESS_KEY)
AWS_SECRET_ACCESS_KEY=$(get_env ROOT_AWS_SECRET_ACCESS_KEY)
AWS_S3_REGION=eu-central-1

GITHUB_TOKEN=$(get_env GITHUB_TOKEN)
GITHUB_REPOSITORY=$(get_env GITHUB_REPOSITORY)

if [ "$1" != "down" ]
then
    ansible-playbook \
        ./aws/create_iam_user.yaml \
        -e "AWS_ACCESS_KEY=$AWS_ACCESS_KEY \
            AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY \
            PROJECT_NAME=$PROJECT_NAME" && \
    ansible-playbook \
        ./aws/create_s3.yaml \
        -e "AWS_ACCESS_KEY=$AWS_ACCESS_KEY \
            AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY \
            AWS_S3_REGION=$AWS_S3_REGION \
            PROJECT_NAME=$PROJECT_NAME" && \
    ansible-playbook \
        ./aws/fill_github.yaml \
        -e "GITHUB_TOKEN=$GITHUB_TOKEN \
            GITHUB_REPOSITORY=$GITHUB_REPOSITORY \
            AWS_S3_REGION=$AWS_S3_REGION \
            PROJECT_NAME=$PROJECT_NAME"
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
            PROJECT_NAME=$PROJECT_NAME"
    
fi