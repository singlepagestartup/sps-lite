#!/bin/bash
terminal=$1

if [ "$terminal" == "infrastructure" ];
then
    gh codespace ports visibility 8080:public -c $CODESPACE_NAME
    gh codespace ports visibility 3000:public -c $CODESPACE_NAME
    
    npm install

    # wait until docker is started
    while ! docker ps
    do
        sleep 1
        echo "Waiting to Docker start..."
    done

    # Not default Github Codespace not connects to Github, that's why you shoud do it manually, use .devcontainer/README.md
    cd apps/db
    chmod +x ./up.sh

    cd ../redis
    chmod +x ./up.sh

    cd ..
fi