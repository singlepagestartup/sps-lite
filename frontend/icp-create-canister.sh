#!/bin/bash
cp .ic-assets.json out/.ic-assets.json
cp -R .well-known out/

yes | dfx canister create sps_lite --network ic --with-cycles 2000000000000 | dfx deploy --network ic