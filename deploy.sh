#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

MODE=$1

if [[ $MODE = 'pro' ]];
then
  npm run build:pro
  echo 'FunGoj86p,s' | deploy production
else [ !$MODE ]
  npm run build
  echo 'FunGoj86p,s' | deploy
fi
