#!/bin/bash
directory=$1
model_name=$2

npx nx g @nx/react:library --name=@sps/$1-$2-component --dir=libs/modules/$1/models/$2/component --bundler=none --compiler=babel --style=css
npx nx g @nx/js:lib --name=@sps/$1-$2-contracts --directory=libs/modules/$1/models/$2/contracts --bundler=tsc --unitTestRunner=jest
npx nx g @nx/js:lib --name=@sps/$1-$2-contracts-extended --directory=libs/modules/$1/models/$2/contracts-extended --bundler=tsc --unitTestRunner=jest
npx nx g @nx/react:library --name=@sps/$1-$2-api --dir=libs/modules/$1/models/$2/api --bundler=none --compiler=babel --style=css