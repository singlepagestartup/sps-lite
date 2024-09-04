#!/bin/bash
get_env() {
    ENV_FILE=".env"

    if [ ! -z "$ENVIRONMENT_TYPE" ]; then
        ENV_FILE=".env.$ENVIRONMENT_TYPE"
    fi

    ENV=$(grep "^$1=" "$ENV_FILE" | cut -d '=' -f2-)

    echo $ENV
}

export -f get_env