#!/bin/bash

ansible-playbook \
    ./server/create_working_directory.yaml \
    ./server/install_psql.yaml \
    ./server/set_cron_jobs.yaml \
    ./server/install_nodejs.yaml \
    ./server/install_docker.yaml \
    ./server/init_docker_swarm.yaml