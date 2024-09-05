#!/bin/bash
get_environment_type() {
    ENVIRONMENT_TYPE=$1
    
    if [ -z "$ENVIRONMENT_TYPE" ]; then
        ENVIRONMENT_TYPE=""
    fi

    export ENVIRONMENT_TYPE
}

export -f get_environment_type