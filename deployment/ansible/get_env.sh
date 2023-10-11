#!/bin/bash
get_env() {
    ENV=$(grep "^$1=" .env | cut -d '=' -f2)

    echo $ENV
}

export -f get_env