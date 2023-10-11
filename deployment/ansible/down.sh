#!/bin/bash
./services.sh down && \
    ./github.sh down && \
    ./cloudflare.sh down && \
    ./aws.sh down