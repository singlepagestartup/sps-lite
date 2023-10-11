#!/bin/bash

ansible-playbook update_packages.yaml set_cron_jobs.yaml install_nodejs.yaml install_docker.yaml init_docker_swarm.yaml create_working_directory.yaml