#!/bin/bash
cp .ic-assets.json out/.ic-assets.json
cp -R .well-known out/

yes | dfx canister install sps_lite --mode reinstall --network ic