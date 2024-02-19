#!/bin/bash
module=sps-website-builder
model_name=slider

nx reset

npx nx generate @nx/workspace:move --project=@sps/$module-$model_name-component --destination=libs/modules/$module/models/$model_name/component/root

nx reset

npx nx g @nx/react:library --name=@sps/$module-$model_name-component-redux --dir=libs/modules/$module/models/$model_name/component/redux --bundler=none --compiler=babel --style=none --minimal=true --component=false

# move contracts
nx reset

npx nx generate @nx/workspace:move --project=@sps/$module-$model_name-contracts --destination=libs/modules/$module/models/$model_name/contracts/root
nx reset
npx nx generate @nx/workspace:move --project=@sps/$module-$model_name-contracts-extended --destination=libs/modules/$module/models/$model_name/contracts/extended

mkdir -p libs/modules/$module/models/$model_name/component/variants/startup
touch libs/modules/$module/models/$model_name/component/variants/startup/.gitkeep

# copy file
mkdir -p libs/modules/$module/models/$model_name/component/redux/src/lib
mv libs/modules/$module/models/$model_name/component/root/src/lib/redux.tsx libs/modules/$module/models/$model_name/component/redux/src/lib/index.tsx

# write to file
echo "export { ReduxProvider } from './lib';" > libs/modules/$module/models/$model_name/component/redux/src/index.ts

# read folders names
for folder in $(ls -d libs/modules/$module/models/$model_name/component/root/src/lib/component/sps-lite/*); do
    # check is directory
    if [ -d $folder ]; then
        # get last string
        folder=${folder##*/}
        # replace uppercase letters with lowercase and dash
        variant=$(echo $folder | sed 's/\([A-Z]\)/-\1/g' | sed 's/^-//' | tr '[:upper:]' '[:lower:]')

        nx reset

        npx nx g @nx/react:library --name=@sps/$module-$model_name-component-variants-sps-lite-$variant --dir=libs/modules/$module/models/$model_name/component/variants/sps-lite/$variant --bundler=none --compiler=babel --style=none --minimal=true --component=false

        # create lib
        mkdir -p libs/modules/$module/models/$model_name/component/variants/sps-lite/$variant/src/lib

        # move all files to variant
        mv libs/modules/$module/models/$model_name/component/root/src/lib/component/sps-lite/$folder/* libs/modules/$module/models/$model_name/component/variants/sps-lite/$variant/src/lib

        # remove old folder
        rm -rf libs/modules/$module/models/$model_name/component/root/src/lib/component/sps-lite/$folder

        # replace $folder in index.ts
        sed -i "" "s/$folder/Component/g" libs/modules/$module/models/$model_name/component/variants/sps-lite/$variant/src/lib/index.tsx

        # create export
        echo "export type { IComponentProps, IComponentPropsExtended } from './lib/interface';export { Component } from './lib';" > libs/modules/$module/models/$model_name/component/variants/sps-lite/$variant/src/index.ts

        # add ReduxProvider
        importServer="import Server from \".\/server\"\;"
        importReduxProvider="import { ReduxProvider } from \"@sps\/$module-$model_name-component-redux\"\;"

        sed -i "" "s/$importServer/$importServer$importReduxProvider/g" libs/modules/$module/models/$model_name/component/variants/sps-lite/$variant/src/lib/index.tsx

        returnComponent="return <Comp {...props} \/>\;"
        returnReduxProvider="return <ReduxProvider><Comp {...props} \/><\/ReduxProvider>\;"

        sed -i "" "s/$returnComponent/$returnReduxProvider/g" libs/modules/$module/models/$model_name/component/variants/sps-lite/$variant/src/lib/index.tsx

        # replace import in component/sps-lite/interfaces.ts
        sed -i "" "s/.\/$folder\/interface/@sps\/$module-$model_name-component-variants-sps-lite-$variant/g" libs/modules/$module/models/$model_name/component/root/src/lib/component/sps-lite/interface.ts

        sed -i "" "s/{ $folder }/{ Component as $folder }/g" libs/modules/$module/models/$model_name/component/root/src/lib/component/sps-lite/variants.ts

        sed -i "" "s/.\/$folder/@sps\/$module-$model_name-component-variants-sps-lite-$variant/g" libs/modules/$module/models/$model_name/component/root/src/lib/component/sps-lite/variants.ts
    fi
done

# move everything from /component folder to lib
mv libs/modules/$module/models/$model_name/component/root/src/lib/component/* libs/modules/$module/models/$model_name/component/root/src/lib

# remove old folder
rm -rf libs/modules/$module/models/$model_name/component/root/src/lib/component

# replace in index.ts
sed -i "" "s/\/component//g" libs/modules/$module/models/$model_name/component/root/src/index.ts

# remove ReduxProvider from root/src/lib/index.tsx
sed -i "" 's/import { ReduxProvider } from "..\/redux";//g' libs/modules/$module/models/$model_name/component/root/src/lib/index.tsx
sed -i "" 's/<ReduxProvider>//g' libs/modules/$module/models/$model_name/component/root/src/lib/index.tsx
sed -i "" 's/<\/ReduxProvider>//g' libs/modules/$module/models/$model_name/component/root/src/lib/index.tsx