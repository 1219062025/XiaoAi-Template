#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build


#输入密码并发布到测试环境
# echo 'FunGoj86p,s' | deploy
echo 'FunGoj86p,s' | deploy