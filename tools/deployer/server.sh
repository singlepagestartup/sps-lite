#!/bin/bash
. ./get_environment_type.sh

get_environment_type $2

./create_inventory.sh

ansible-playbook \
    ./server/create_working_directory.yaml \
    ./server/install_psql.yaml \
    ./server/set_cron_jobs.yaml \
    ./server/install_nodejs.yaml \
    ./server/install_bun.yaml \
    ./server/install_docker.yaml \
    ./server/init_docker_swarm.yaml