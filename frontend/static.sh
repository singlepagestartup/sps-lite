#!/bin/bash
# sleep 180

rm -rf .next out

npm run build:icp

# ICP has bug with encodeURI()
# GET https://7jwa3-hqaaa-aaaao-aanuq-cai.icp0.io/_next/static/chunks/app/%5Blocale%5D/%5B%5B...url%5D%5D/page-eed475f3356c9ad1.js net::ERR_ABORTED 502
# import should be
# https://7jwa3-hqaaa-aaaao-aanuq-cai.icp0.io/_next/static/chunks/app/[locale]/[[...url]]/page-eed475f3356c9ad1.js
# file=$(find ./out/_next/static/chunks -name "webpack-*.js" -type f)
# echo $file

files=($(find ./out/_next/static/chunks -name "webpack-*.js" -type f))
echo $files

# add regex, because 's' and 'e' in s.tu(e) can be any string
# 's/\([a-zA-Z0-9_.]\+\)\.\([a-zA-Z0-9_.]\+\)(\([a-zA-Z0-9_.]\+\))/decodeURI(\1.\2(\3))/g')
# old_function="l.tu(e)"
regex='s/\([a-zA-Z0-9_.]\{1\}\)\.\([a-zA-Z0-9_.]\{2\}\)(\([a-zA-Z0-9_.]\{1\}\))/decodeURI(\1.\2(\3))/gi'

# old_function="\([a-zA-Z0-9_.]{1}\)\.\([a-zA-Z0-9_.]{2}\)\(\([a-zA-Z0-9_.]\)\)"
# new_function="decodeURI(\1.\2(\3))/g)"

# if [[ "$OSTYPE" == "darwin"* ]]; then
#   sed -i '' -e "s|${old_function}|${new_function}|gi" $file
# else
#   sed -i -e "s/$old_function/$new_function/gi" $file
# fi

if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS uses a different version of sed
    sed_command="sed -i '' -e"
else
    # Assume Linux
    sed_command="sed -i -e"
fi

# Loop through the array
for file in $files
do
  # Use sed to perform the replacement
  $sed_command $regex $file
done

# Moving files from out/en/ folder to out/
mv out/en/* out/
rm -rf out/en/

# cp .ic-assets.json out/.ic-assets.json
# cp -R .well-known out/

# dfx canister install sps_lite --mode reinstall --network ic