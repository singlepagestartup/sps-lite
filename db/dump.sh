#! /bin/bash
PGPASSWORD=$1 pg_dump sps > sps.sql -h localhost -p 5432 -U postgres