#!/bin/bash
./server.sh up && \
    ./aws.sh up && \
    ./sentry.sh up && \
    ./cloudflare.sh up && \
    ./services.sh up && \
    ./github.sh up