#!/bin/bash
module=sps-website-builder
# model_names=(alert-block button buttons-array checkout-form-block contact-section-block cta-section-block edit-subscription-block faq faq-block feature features-section-block flyout font footer footer-block header-section-block hero-section-block incentives-block layout loader locale logotype logotypes-cloud-block metatag modal navbar navbar-block not-found-block page products-list-block reviews-list-block reviews-table-block shopping-cart-block sidebar slide slide-over slider slider-block subscription-checkout-form-block theme tiers-list-block topbar)

# for model_name in "${model_names[@]}"
# do
#     echo $model_name
#     # model_name=attribute
#     variants=()

#     # read folders names
#     for folder in $(ls -d libs/modules/$module/models/$model_name/component/variants/sps-lite/*); do
#         # check is directory
#         if [ -d $folder ]; then
#             # get last string
#             folder=${folder##*/}
#             # add to variants
#             variants+=($folder)
#         fi
#     done

#     # echo variants: ${variants[@]}

#     nx reset

#     npx nx g @nx/workspace:move --project=@sps/$module-$model_name-api --destination=libs/modules/$module/models/$model_name/frontend/api --newProjectName=@sps/$module-$model_name-frontend-api

#     nx reset

#     npx nx g @nx/workspace:move --project=@sps/$module-$model_name-component-redux --destination=libs/modules/$module/models/$model_name/frontend/redux --newProjectName=@sps/$module-$model_name-frontend-redux


#     for variant in "${variants[@]}"
#     do
#         nx reset
#         npx nx g @nx/workspace:move --project=@sps/$module-$model_name-component-variants-sps-lite-$variant --destination=libs/modules/$module/models/$model_name/frontend/component/variants/sps-lite/$variant --newProjectName=@sps/$module-$model_name-frontend-component-sps-lite-variants-$variant
#     done

#     nx reset

#     npx nx g @nx/workspace:move --project=@sps/$module-$model_name-component --destination=libs/modules/$module/models/$model_name/frontend/component/root --newProjectName=@sps/$module-$model_name-frontend-component

#     # move startup variants
#     mv libs/modules/$module/models/$model_name/component/variants/startup libs/modules/$module/models/$model_name/frontend/component/variants/startup

#     # remove old folders
#     rm -rf libs/modules/$module/models/$model_name/component/variants
#     rm -rf libs/modules/$module/models/$model_name/component
# done

model_name=hero-section-block
variant=simple-centered

rm -rf libs/modules/$module/models/$model_name/frontend/component/variants/ptmp

nx reset

npx nx g @nx/workspace:move --project @sps/$module-$model_name-frontend-component-variants-sps-lite-$variant --destination libs/modules/$module/models/$model_name/frontend/component/variants/ptmp/$variant --newProjectName @sps/$module-models-$model_name-frontend-component-variants-sps-lite-$variant

nx reset

npx nx g @nx/workspace:move --project @sps/$module-models-$model_name-frontend-component-variants-sps-lite-$variant --destination libs/modules/$module/models/$model_name/frontend/component/variants/sps-lite/$variant
