#!/bin/bash

USERNAME=$1
PASSWORD=$2

TRAEFIK_BASIC_AUTH=$(echo $(htpasswd -nb $USERNAME $PASSWORD) | sed -e s/\\$/\\$\\$/g)

echo $TRAEFIK_BASIC_AUTH