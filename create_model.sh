#!/bin/bash
# directory=$1
# model_name=$2

# npx nx g @nx/react:library --name=@sps/$1-$2-component --dir=libs/modules/$1/models/$2/component --bundler=none --compiler=babel --style=none
# npx nx g @nx/react:library --name=@sps/$1-$2-component-redux --dir=libs/modules/$1/models/$2/component/redux --bundler=none --compiler=babel --style=none
# npx nx g @nx/js:lib --name=@sps/$1-$2-contracts --directory=libs/modules/$1/models/$2/contracts --bundler=tsc --unitTestRunner=jest
# npx nx g @nx/js:lib --name=@sps/$1-$2-contracts-extended --directory=libs/modules/$1/models/$2/contracts-extended --bundler=tsc --unitTestRunner=jest
# npx nx g @nx/react:library --name=@sps/$1-$2-api --dir=libs/modules/$1/models/$2/api --bundler=none --compiler=babel --style=none

module=sps-billing
model_name=currency
variants=(default list)

for variant in ${variants[@]}; do
    npx nx g @nx/react:library --name=@sps/$module-$model_name-component-variants-sps-lite-$variant --dir=libs/modules/$module/models/$model_name/component/variants/sps-lite/$variant --bundler=none --compiler=babel --style=none
done