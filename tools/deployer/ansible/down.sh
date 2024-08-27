#!/bin/bash
./host.sh down && \
    ./postgres.sh down && \
    ./portainer.sh down && \
    ./traefik.sh down && \
    ./aws.sh down