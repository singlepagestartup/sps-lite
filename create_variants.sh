#!/bin/bash
module=sps-crm
model_name=review
variants=()

npx nx generate @nx/workspace:move --project=@sps/$module-$model_name-component --destination=libs/modules/$module/models/$model_name/component/root

# for variant in ${variants[@]}; do
#     npx nx g @nx/react:library --name=@sps/$module-$model_name-component-variants-sps-lite-$variant --dir=libs/modules/$module/models/$model_name/component/variants/sps-lite/$variant --bundler=none --compiler=babel --style=none --minimal=true --component=false
# done

# npx nx g @nx/react:library --name=@sps/$module-$model_name-component-redux --dir=libs/modules/$module/models/$model_name/component/redux --bundler=none --compiler=babel --style=none --minimal=true --component=false

# # move contracts
# npx nx generate @nx/workspace:move --project=@sps/$module-$model_name-contracts --destination=libs/modules/$module/models/$model_name/contracts/root
# npx nx generate @nx/workspace:move --project=@sps/$module-$model_name-contracts-extended --destination=libs/modules/$module/models/$model_name/contracts/extended

# mkdir -p libs/modules/$module/models/$model_name/component/variants/startup
# touch libs/modules/$module/models/$model_name/component/variants/startup/.gitkeep

# # copy file
# mkdir -p libs/modules/$module/models/$model_name/component/redux/src/lib
# mv libs/modules/$module/models/$model_name/component/root/src/lib/redux.tsx libs/modules/$module/models/$model_name/component/redux/src/lib/index.tsx

# # write to file
# echo "export { ReduxProvider } from './lib';" > libs/modules/$module/models/$model_name/component/redux/src/index.ts

# read folders names
for folder in $(ls -d libs/modules/$module/models/$model_name/component/root/src/lib/component/sps-lite/*); do
    # check is directory
    if [ -d $folder ]; then
        # get last string
        folder=${folder##*/}
        # to lower case
        variant=$(echo $folder | tr '[:upper:]' '[:lower:]')

        npx nx g @nx/react:library --name=@sps/$module-$model_name-component-variants-sps-lite-$variant --dir=libs/modules/$module/models/$model_name/component/variants/sps-lite/$variant --bundler=none --compiler=babel --style=none --minimal=true --component=false

        # create lib
        mkdir -p libs/modules/$module/models/$model_name/component/variants/sps-lite/$variant/src/lib

        # move all files to variant
        mv libs/modules/$module/models/$model_name/component/root/src/lib/component/sps-lite/$variant/* libs/modules/$module/models/$model_name/component/variants/sps-lite/$variant/src/lib

        # replace $folder in index.ts
        sed -i -e "s/$folder/Component/g" libs/modules/$module/models/$model_name/component/variants/sps-lite/$variant/src/lib/index.tsx

        # create export
        echo "export type { IComponentProps, IComponentPropsExtended } from './lib/interface';export { Component } from './lib';" > libs/modules/$module/models/$model_name/component/variants/sps-lite/$variant/src/index.ts
    fi
done