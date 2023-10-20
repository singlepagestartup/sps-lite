#!/bin/bash
if [ "$1" == "down" ]
then
    ./frontend.sh down && \
    ./backend.sh down && \
    ./postgres.sh down && \
    ./portainer.sh down && \
    ./traefik.sh down
else
    ./traefik.sh up && \
    ./portainer.sh up && \
    ./postgres.sh up && \
    ./create_portainer_user.sh && \
    ./backend.sh up && \
    ./frontend.sh up
fi