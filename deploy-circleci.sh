# build
echo "执行命令：npm run build-storybook\n"
npm run build-storybook

# 进入生成的文件夹
echo "执行命令：cd ./storybook-static\n"
cd ./storybook-static

git config --global user.email "dongsipan@126.com"
 
git config --global user.name "Dongsipan"

# 初始化一个仓库，仅仅是做了一个初始化的操作，项目里的文件还没有被跟踪
echo "执行命令：git init\n"
git init

# 保存所有的修改
echo "执行命令：git add -A"
git add -A

# 把修改的文件提交
echo "执行命令：commit -m 'deploy'"
git commit -m 'deploy: build docs[ci skip]'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/Dongsipan/spirit-ui.git master:gh-pages
