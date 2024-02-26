#!/bin/bash
module=sps-file-storage
model_names=(file)

for model_name in "${model_names[@]}"
do
    # rename contracts projects
    rm -rf libs/modules/$module/models/$model_name/contracts/tmp-root

    nx reset
    npx nx g @nx/workspace:move --project @sps/$module-$model_name-contracts --destination libs/modules/$module/models/$model_name/contracts/tmp-root --newProjectName @sps/$module-models-$model_name-contracts
    
    nx reset
    npx nx g @nx/workspace:move --project @sps/$module-models-$model_name-contracts --destination libs/modules/$module/models/$model_name/contracts/root

    rm -rf libs/modules/$module/models/$model_name/contracts/tmp-extended

    nx reset
    npx nx g @nx/workspace:move --project @sps/$module-$model_name-contracts-extended --destination libs/modules/$module/models/$model_name/contracts/tmp-extended --newProjectName @sps/$module-models-$model_name-contracts-extended
    
    nx reset
    npx nx g @nx/workspace:move --project @sps/$module-models-$model_name-contracts-extended --destination libs/modules/$module/models/$model_name/contracts/extended

    # move frontend api
    rm -rf libs/modules/$module/models/$model_name/frontend/api-tmp

    nx reset
    npx nx g @nx/workspace:move --project @sps/$module-$model_name-frontend-api --destination libs/modules/$module/models/$model_name/frontend/api-tmp --newProjectName @sps/$module-models-$model_name-frontend-api

    nx reset
    npx nx g @nx/workspace:move --project @sps/$module-models-$model_name-frontend-api --destination libs/modules/$module/models/$model_name/frontend/api

    # move frontend redux
    rm -rf libs/modules/$module/models/$model_name/frontend/redux-tmp

    nx reset
    npx nx g @nx/workspace:move --project @sps/$module-$model_name-frontend-redux --destination libs/modules/$module/models/$model_name/frontend/redux-tmp --newProjectName @sps/$module-models-$model_name-frontend-redux

    nx reset
    npx nx g @nx/workspace:move --project @sps/$module-models-$model_name-frontend-redux --destination libs/modules/$module/models/$model_name/frontend/redux

    # move frontend component
    rm -rf libs/modules/$module/models/$model_name/frontend/component/root-tmp

    nx reset
    npx nx g @nx/workspace:move --project @sps/$module-$model_name-frontend-component --destination libs/modules/$module/models/$model_name/frontend/component/root-tmp --newProjectName @sps/$module-models-$model_name-frontend-component

    nx reset
    npx nx g @nx/workspace:move --project @sps/$module-models-$model_name-frontend-component --destination libs/modules/$module/models/$model_name/frontend/component/root




    # rm -rf libs/modules/$module/models/$model_name/contracts/tmp-extended

    # # echo $model_name
    # # model_name=attribute
    # variants=()

    # # read folders names
    # for folder in $(ls -d libs/modules/$module/models/$model_name/frontend/component/variants/sps-lite/*); do
    #     # check is directory
    #     if [ -d $folder ]; then
    #         # get last string
    #         folder=${folder##*/}
    #         # add to variants
    #         variants+=($folder)
    #     fi
    # done

    # # echo variants: ${variants[@]}


    # for variant in "${variants[@]}"
    # do
    #     rm -rf libs/modules/$module/models/$model_name/frontend/component/variants/tmp-$variant

    #     # nx reset
    #     echo $variant

    #     nx reset

    #     npx nx g @nx/workspace:move --project @sps/$module-$model_name-frontend-component-sps-lite-variants-$variant --destination libs/modules/$module/models/$model_name/frontend/component/variants/tmp-$variant --newProjectName @sps/$module-models-$model_name-frontend-component-variants-sps-lite-$variant

    #     nx reset

    #     npx nx g @nx/workspace:move --project @sps/$module-models-$model_name-frontend-component-variants-sps-lite-$variant --destination libs/modules/$module/models/$model_name/frontend/component/variants/sps-lite/$variant
    # done
done