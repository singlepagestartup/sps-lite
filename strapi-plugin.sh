#!/bin/bash
echo yes | nx release prepatch && nx release publish && npm i @sps/sps-billing@latest