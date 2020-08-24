PACKAGE_VERSION=$(cat package.json \
  | grep @material-ui/core \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')

printf "// Auto-generated on build by extractMuiVersion.sh\nexport default \"$PACKAGE_VERSION\"\n" > ./src/muiVersion.js
