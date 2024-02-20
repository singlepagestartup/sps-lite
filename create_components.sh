#!/bin/bash
module=sps-crm


nx reset

npx nx g @nx/workspace:move --project=@sps/$module-frontend --destination=libs/modules/sps-billing/frontend/root

nx reset

npx nx g @nx/react:library --name=@sps/$module-frontend-components --dir=libs/modules/$module/frontend/components --bundler=none --compiler=babel --style=none --minimal=true --component=false