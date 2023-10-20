#!/bin/bash

ansible-playbook update_packages.yaml create_working_directory.yaml install_psql.yaml set_cron_jobs.yaml install_nodejs.yaml install_docker.yaml init_docker_swarm.yaml