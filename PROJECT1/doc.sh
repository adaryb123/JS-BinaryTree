#!/bin/bash
echo  "Installing JSDOC, this will take a few seconds."
npm install -g jsdoc
npm run doc
echo  "Done. Files generated in folder '/docs'."
