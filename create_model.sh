#!/bin/bash
# directory=$1
# model_name=$2

directory=sps-subscription
model_name=tier

nx reset
npx nx g @nx/react:library --name=@sps/$directory-$model_name-component --dir=libs/modules/$directory/models/$model_name/component --bundler=none --compiler=babel --style=none

nx reset
npx nx g @nx/react:library --name=@sps/$directory-$model_name-component-redux --dir=libs/modules/$directory/models/$model_name/component/redux --bundler=none --compiler=babel --style=none

nx reset
npx nx g @nx/js:lib --name=@sps/$directory-$model_name-contracts --directory=libs/modules/$directory/models/$model_name/contracts --bundler=tsc --unitTestRunner=jest

nx reset
npx nx g @nx/js:lib --name=@sps/$directory-$model_name-contracts-extended --directory=libs/modules/$directory/models/$model_name/contracts-extended --bundler=tsc --unitTestRunner=jest

nx reset
npx nx g @nx/react:library --name=@sps/$directory-$model_name-api --dir=libs/modules/$directory/models/$model_name/api --bundler=none --compiler=babel --style=none

# module=sps-billing
# model_name=currency
# variants=(default list)

# for variant in ${variants[@]}; do
#     npx nx g @nx/react:library --name=@sps/$module-$model_name-component-variants-sps-lite-$variant --dir=libs/modules/$module/models/$model_name/component/variants/sps-lite/$variant --bundler=none --compiler=babel --style=none
# done