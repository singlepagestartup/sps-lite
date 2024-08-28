#!/bin/bash
./server.sh up && \
    ./aws.sh up && \
    ./traefik.sh up && \
    ./portainer.sh up && \
    ./redis.sh up && \
    ./postgres.sh up && \
    ./host.sh up