#! /bin/bash
HOST=localhost
PORT=5432
USER=postgres

# PGPASSWORD=$1 psql -h $HOST -p $PORT -U $USER -c 'drop database sps;';
# PGPASSWORD=$1 psql -h $HOST -p $PORT -U $USER -c 'create database sps owner $USER;';
# PGPASSWORD=$1 psql -h $HOST -p $PORT -U $USER sps < sps.sql;