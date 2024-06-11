#!/bin/bash
terminal=$1

if [ "$terminal" == "db" ];
then
    # wait until docker is started
    while ! docker ps
    do
        sleep 1
        echo "Waiting to Docker start..."
    done

    cd apps/db
    chmod +x ./up.sh
    ./up.sh
    cd ..
    npm install
fi

if [ "$terminal" == "frontend" ];
then
    gh codespace ports visibility 3000:public -c $CODESPACE_NAME

    # cd apps/frontend
    # chmod +x ./create_env.sh
    # ./create_env.sh
fi