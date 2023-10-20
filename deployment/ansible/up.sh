#!/bin/bash
./server.sh up && \
    ./aws.sh up && \
    ./cloudflare.sh up && \
    ./services.sh up && \
    ./github.sh up