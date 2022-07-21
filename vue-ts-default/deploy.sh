#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

MODE=$1

if [[ $MODE = 'test' ]];
then
  echo '测试'
  # npm run build:test
  # echo 'FunGoj86p,s' | deploy
else [ !$MODE ]
  echo '生产'
  # npm run build
  # echo 'FunGoj86p,s' | deploy production
fi