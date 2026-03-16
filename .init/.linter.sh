#!/bin/bash
cd /tmp/kavia/workspace/code-generation/dark-theme-web-layout-240746-240760/simple_dark_theme_frontend
npx eslint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
 if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi

