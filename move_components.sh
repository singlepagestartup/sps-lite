#!/bin/bash
module=sps-billing
model_names=(currency invoice)

for model_name in "${model_names[@]}"
do
    # echo $model_name
    # model_name=attribute
    variants=()

    # read folders names
    for folder in $(ls -d libs/modules/$module/models/$model_name/frontend/component/variants/sps-lite/*); do
        # check is directory
        if [ -d $folder ]; then
            # get last string
            folder=${folder##*/}
            # add to variants
            variants+=($folder)
        fi
    done

    # echo variants: ${variants[@]}


    for variant in "${variants[@]}"
    do
        rm -rf libs/modules/$module/models/$model_name/frontend/component/variants/tmp-$variant

        # nx reset
        echo $variant

        nx reset

        npx nx g @nx/workspace:move --project @sps/$module-$model_name-frontend-component-sps-lite-variants-$variant --destination libs/modules/$module/models/$model_name/frontend/component/variants/tmp-$variant --newProjectName @sps/$module-models-$model_name-frontend-component-variants-sps-lite-$variant

        nx reset

        npx nx g @nx/workspace:move --project @sps/$module-models-$model_name-frontend-component-variants-sps-lite-$variant --destination libs/modules/$module/models/$model_name/frontend/component/variants/sps-lite/$variant
    done
done