#!/bin/bash
# directory=$1
# model_name=$2

directory=sps-file-storage
model_name=file

nx reset
npx nx g @nx/react:library --name=@sps/$directory-$model_name-component --dir=libs/modules/$directory/models/$model_name/component --bundler=none --compiler=babel --style=none

nx reset
npx nx g @nx/js:lib --name=@sps/$directory-$model_name-contracts --directory=libs/modules/$directory/models/$model_name/contracts --bundler=tsc --unitTestRunner=jest

nx reset
npx nx g @nx/js:lib --name=@sps/$directory-$model_name-contracts-extended --directory=libs/modules/$directory/models/$model_name/contracts-extended --bundler=tsc --unitTestRunner=jest

nx reset
npx nx g @nx/react:library --name=@sps/$directory-$model_name-api --dir=libs/modules/$directory/models/$model_name/api --bundler=none --compiler=babel --style=none