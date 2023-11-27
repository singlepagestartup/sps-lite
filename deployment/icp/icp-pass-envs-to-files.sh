#!/bin/bash

# Import wallet to the file
touch sps-lite-deployer-wallet.txt
echo $ICP_DEPLOYER_WALLET > sps-lite-deployer-wallet.txt

# Import identity to the file from github secrets
touch sps-lite-deployer.pem.base64
echo $ICP_DEPLOYER_KEY > sps-lite-deployer.pem.base64

touch sps-lite-deployer.pem
openssl base64 -d -in sps-lite-deployer.pem.base64 -out sps-lite-deployer.pem