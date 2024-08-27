#!/bin/bash
./server.sh up && \
    ./aws.sh up && \
    ./traefik.sh up && \
    ./portainer.sh up && \
    ./postgres.sh up && \
    ./host.sh up