#!/bin/bash
# directory=$1
# model_name=$2

module=sps-website-builder
models=(button buttons-array checkout-form-block contact-section-block contracts contracts-extended cta-section-block edit-subscription-block faq faq-block feature features-section-block flyout font footer footer-block)
folders=(component contracts contracts-extended api)

for model in ${models[@]}; do
    for folder in ${folders[@]}; do
        if [ -d "libs/modules/$module/$model/$folder" ]; then
            npx nx g @nx/workspace:move --project=@sps/$module-$model-$folder --destination=libs/modules/$module/models/$model/$folder
        fi
    done
done


