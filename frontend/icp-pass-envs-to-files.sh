#!/bin/bash

# Import wallet to the file
touch sps-lite-deployer-wallet.txt
echo $ICP_DEPLOYER_WALLET > sps-lite-deployer-wallet.txt

# Import identity to the file
touch sps-lite-deployer.pem
echo $ICP_DEPLOYER_KEY > sps-lite-deployer.pem

cat sps-lite-deployer-wallet.txt