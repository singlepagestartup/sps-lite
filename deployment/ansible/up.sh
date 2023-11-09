#!/bin/bash
./server.sh up && \
    ./aws.sh up && \
    ./traefik.sh up && \
    ./portainer.sh up && \
    ./postgres.sh up && \
    ./backend.sh up && \
    ./documentation.sh up && \
    ./frontend.sh up