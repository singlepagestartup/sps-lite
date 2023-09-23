#!/bin/bash
# Starting dfx at the background
dfx start --background

# Set canister id to variable
wallet_canister_id=$(cat sps-lite-deployer-wallet.txt)

# Copy id of created canister and deploy wallet to it, !!! CHANGE ID OF CANISTER !!!
# dfx identity --network=ic deploy-wallet <paste_your_wallet_canister_id_here>
# 
# You will get something like that
# Creating a wallet canister on the ic network./
# The wallet canister on the "ic" network for user "sps-lite-deployer" is "cfhaf-gaaaa-aaaal-qccpq-cai"
dfx identity --network=ic deploy-wallet $wallet_canister_id

# Now you can check your wallet cycles balance
# You will get something like that
# 2.124 TC (trillion cycles).
dfx wallet balance --network=ic

# Export your identity by running command
# And store exported key at the file
# You can use that file on another machine for deploying canisters
# !!! DO NOT COMMIT IT TO GIT !!!
dfx identity export sps-lite-deployer > sps-lite-deployer.pem

# Now you are ready to deploy your canisters to Internet Computer network
# You can set your exported deployer as new by adding it with identity import
dfx identity import sps-lite-exported-deployer sps-lite-deployer.pem --storage-mode plaintext

# Set that deployer as current
dfx identity use sps-lite-exported-deployer

# Connect wallet to your identity
dfx identity set-wallet --network ic $wallet_canister_id

# Now you can test that wallet is connected by running command
# It should return something like that
# 2.124 TC (trillion cycles).
dfx wallet balance --network=ic