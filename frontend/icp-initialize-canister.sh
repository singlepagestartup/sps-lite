#!/bin/bash
# Do every stage in icp-create-identity.sh
# ./icp-create-identity.sh

# Now you can deploy your canisters to Internet Computer network
# You need to prepare your repo for deploying
# Fill well-known/ic-domains with data
# Replace your_domain_name.com with your domain
# echo "<your_domain_name.com>" > .well-known/ic-domains
# domain="<your_domain_name.com>"
domain=$1
echo $domain > .well-known/ic-domains

# Delete canister_ids.json that you get from sps-lite repository
# You will create your own canister_ids.json with your canister_id
rm -rf ./canister_ids.json

# Give access to initialization script
chmod +x ./icp-update-canister.sh

# Run initialization script
./icp-update-canister.sh

# Give access to connect domain script
chmod +x ./icp-connect-domain.sh

# Connect domain to your project
./icp-connect-domain.sh $domain