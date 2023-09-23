#!/bin/bash
./icp-build-static.sh

cp .ic-assets.json out/.ic-assets.json
cp -R .well-known out/

dfx deploy --network ic

# yes | dfx canister install sps_lite --mode reinstall --network ic