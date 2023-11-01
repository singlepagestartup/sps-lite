#!/bin/bash
./services.sh down && \
    ./github.sh down && \
    ./cloudflare.sh down && \
    ./sentry.sh down && \
    ./aws.sh down