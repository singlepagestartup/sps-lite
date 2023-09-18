#!/bin/bash
# Starting dfx at the background
dfx start --background

# Creating new identity with name "sps-lite-deployer"
# you will get your seed phrase, please save it
dfx identity new sps-lite-deployer

# You can list all your identites by running command
dfx identity list

# For selecting created identity "sps-lite-deployer" run command
dfx identity use sps-lite-deployer

# Check that you selected correct identity by running command
# Should return "sps-lite-deployer"
dfx identity whoami

# If you run commad for checking your wallet balance
# You will get an error:
# Error: Failed to setup wallet caller.
# Caused by: Failed to setup wallet caller.
#   Failed to get wallet canister caller for identity 'sps-lite-deployer' on network 'ic'.
dfx wallet balance --network ic

# For solving this problem you need to create wallet canister
# For that you need to transfer some icp to your ledger wallet, that also exists in your identity
# For getting your ledger wallet address run command
dfx ledger --network=ic account-id

# Your ledger wallet is empty now, for checking that, run command
# You will get 0.00000000 ICP
dfx ledger --network ic balance

# Transfer 2-3 ICP to that address from your main wallet or crypto exchange

# Check your ledger wallet balance now
# You should get something like that 3.00000000 ICP
dfx ledger --network ic balance

# Give access to run that script
chmod +x ./save-wallet-address.sh 

# Now run command for creating wallet for cycles and
# passing data to get-wallet-address script, that creates .txt file with wallet id
# It will took some time and you will get something like that
# Transfer sent at block height 6719981
# Using transfer at block height 6719981
# Canister created with id: "cfhaf-gaaaa-aaaal-qccpq-cai"
dfx ledger --network ic create-canister $(dfx identity get-principal) --amount 1 | ./save-wallet-address.sh

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