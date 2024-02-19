#!/bin/bash
module=sps-crm
model_name=form-request
variants=(simple list)

for variant in ${variants[@]}; do
    npx nx g @nx/react:library --name=@sps/$module-$model_name-component-variants-sps-lite-$variant --dir=libs/modules/$module/models/$model_name/component/variants/sps-lite/$variant --bundler=none --compiler=babel --style=none
done

npx nx g @nx/react:library --name=@sps/$module-$model_name-component-redux --dir=libs/modules/$module/models/$model_name/component/redux --bundler=none --compiler=babel --style=none

# move contracts
npx nx generate @nx/workspace:move --project=@sps/$module-$model_name-contracts --destination=libs/modules/$module/models/$model_name/contracts/root
npx nx generate @nx/workspace:move --project=@sps/$module-$model_name-contracts-extended --destination=libs/modules/$module/models/$model_name/contracts/extended

mkdir -p libs/modules/$module/models/$model_name/component/variants/startup
touch libs/modules/$module/models/$model_name/component/variants/startup/.gitkeep