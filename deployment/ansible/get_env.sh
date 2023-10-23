#!/bin/bash
get_env() {
    PASS_FILE=$2
    ENV_FILE=.env

    if [ ! -z $PASS_FILE ]; then
        ENV_FILE=$PASS_FILE
    fi

    ENV=$(grep "\b$1=" $ENV_FILE | cut -d '=' -f2)

    echo $ENV
}

export -f get_env