#!/bin/bash
while read line; do
#   echo "$line"

  if [[ $line == *"Canister created with id"* ]]; then
    canister_id=$(echo $line | grep -e "\([a-z]\{5\}-\)\{4\}[a-z]\{3\}" | sed -e 's/Canister created with id://' | sed -e 's/"//g')

    echo $canister_id > sps-lite-deployer-wallet.txt

    echo $canister_id
  fi
done