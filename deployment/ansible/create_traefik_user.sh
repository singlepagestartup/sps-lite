#!/bin/bash
. ./get_env.sh

USERNAME=$(get_env TRAEFIK_USERNAME)
PASSWORD=$(get_env TRAEFIK_PASSWORD)

TRAEFIK_BASIC_AUTH=$(echo $(htpasswd -nb $USERNAME $PASSWORD) | sed -e s/\\$/\\$\\$/g)

echo $TRAEFIK_BASIC_AUTH