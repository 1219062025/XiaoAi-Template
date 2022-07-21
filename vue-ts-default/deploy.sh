#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

MODE=$1

if [[ $MODE = 'test' ]];
then
  npm run build:test
  echo 'FunGoj86p,s' | deploy
else [ !$MODE ]
  npm run build
  echo 'FunGoj86p,s' | deploy production
fi
