#!/bin/bash

cd apps/db && ./create_env.sh
cd ../backend && ./create_env.sh
cd ../frontend && ./create_env.sh