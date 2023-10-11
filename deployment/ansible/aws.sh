#!/bin/bash
. ./get_env.sh

PROJECT_NAME=$(get_env PROJECT_NAME)
AWS_ACCESS_KEY=$(get_env ROOT_AWS_ACCESS_KEY)
AWS_SECRET_ACCESS_KEY=$(get_env ROOT_AWS_SECRET_ACCESS_KEY)
AWS_S3_REGION=$(get_env AWS_S3_REGION)

if [ "$1" == "up" ]
then
    ansible-playbook create_iam_user.yaml create_s3.yaml \
        -e "AWS_ACCESS_KEY=$AWS_ACCESS_KEY \
            AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY \
            AWS_S3_REGION=$AWS_S3_REGION \
            PROJECT_NAME=$PROJECT_NAME"
else
    ansible-playbook delete_iam_user.yaml delete_s3.yaml \
        -e "AWS_ACCESS_KEY=$AWS_ACCESS_KEY \
            AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY \
            AWS_S3_REGION=$AWS_S3_REGION \
            PROJECT_NAME=$PROJECT_NAME"
fi