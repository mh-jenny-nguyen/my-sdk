#!/usr/bin/env bash
rm -rf ./build

function buildJs {
  tsc --project tsconfig.build.json
  # build JS sources
  NODE_ENV=production babel "src" --out-dir "build" \
    --config-file ./babel.config.js \
    --extensions ".js,.jsx,.ts,.tsx" \
    --ignore "src/bin/**/*,src/**/*.d.ts,src/node_modules/**/*" \
    --copy-files

  rm -rf ./build/node_modules
}
buildJs &
# build SASS
node-sass \
  --importer node_modules/node-sass-package-importer/dist/cli.js \
  "src" -o "build" \
  &
wait
cp ./package.json ./build/package.json

sed -i -e 's/src\///g' ./build/package.json
echo "completed"
