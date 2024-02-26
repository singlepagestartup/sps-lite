#!/bin/bash
./frontend.sh down && \
    ./documentation.sh down && \
    ./backend.sh down && \
    ./postgres.sh down && \
    ./portainer.sh down && \
    ./traefik.sh down && \
    ./aws.sh down