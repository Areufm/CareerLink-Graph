

# 基于知识图谱可视化的人才招聘平台

本项目 main 分支为求职者端

技术栈 `vue3` `ts` `scss` `relation-graph` `pinia` `element-plus` `echarts`

## 本地运行
1. 安装依赖：`pnpm install`
2. 启动开发服务器：`pnpm dev`
3. 构建生产版本：`pnpm build`

企业端及管理员端由于和后台服务器绑定 无法直接查看

数据采用 `mockjs` 模拟发送请求，并无实际算法作用

## 首页

首页头部搜索框，可以搜索职位，热门职位点击可以跳转至搜索页面并搜索其职位

快捷登录框，可以输入账号密码直接进行登录

智能岗位推荐可跳转至推荐岗位页面，能力评价跳转至个人信息页面，畅写简历跳转至简历上传页面

热门职位可以切换分类，展示不同分类推荐的热门职位

![image-20241201202331088](https://raw.githubusercontent.com/Areufm/TuChuang/main/img/202412012023780.webp)

![image-20241201202426002](https://raw.githubusercontent.com/Areufm/TuChuang/main/img/202412012024492.webp)

![image-20241201204246456](https://raw.githubusercontent.com/Areufm/TuChuang/main/img/202412012042939.webp)

## 登录

由于项目背景要求，需要根据简历分析个人知识图谱，所以账号注册登录后必须**强制上传简历**

- 若曾经注册成功且已上传过简历，则跳过上传简历步骤，直接登录成功
- 若未上传过简历则跳转至上传简历页面，且必须上传简历成功才算注册成功

已上传简历：默认用户名 111111 默认密码 111111

已注册但未上传简历：默认用户名 222222 默认密码 222222

![image-20241201202500479](https://raw.githubusercontent.com/Areufm/TuChuang/main/img/202412012025039.webp)

## 上传简历

![image-20241201202724520](https://raw.githubusercontent.com/Areufm/TuChuang/main/img/202412012027029.webp)

## 简历信息初始化

上传简历后，会识别出部分个人关键信息，可针对具体情况进行自定义修改

![image-20241201202842777](https://raw.githubusercontent.com/Areufm/TuChuang/main/img/202412012028672.webp)

![image-20241201202915082](https://raw.githubusercontent.com/Areufm/TuChuang/main/img/202412012029850.webp)

![image-20241201202941456](https://raw.githubusercontent.com/Areufm/TuChuang/main/img/202412012029173.webp)

提交成功后，跳转至首页，首页原先登录框会更新为个人简略信息卡片

![image-20241201203039821](https://raw.githubusercontent.com/Areufm/TuChuang/main/img/202412012030358.webp)

## 个人信息

个人信息页有如下模块：基础信息、教育经历、个人介绍、个人技能点、个人知识图谱、AI 建议、上传简历附件、个人隐私项、个人能力雷达图、求职岗位全国数量分布图、推荐结果评价

- **基础信息**：可修改个人基础信息，包括姓名、年龄、电话、邮箱、求职地区和岗位
- **教育经历**：可以修改自己教育经历，设定学校名称，时间及学位
- **个人介绍**：详细的个人信息介绍
- **个人技能点**：描述个人技能点，有助于更好的知识图谱构建
- **个人知识图谱**：根据个人技能点构建出的知识图谱
- **AI 建议**：针对简历给出改进意见
- **上传简历附件**：可上传其余简历附件
- **个人隐私性**：可以对关键信息做模糊处理
- **个人能力雷达图**：从能力、学历、地区三维度与平均水平做直观对比
- **求职岗位全国数量分布图**：求职岗位在全国数量的分布图，颜色深浅直观对比
- **推荐结果评价**：对系统推荐的结果进行评价

![image-20241201203207123](https://raw.githubusercontent.com/Areufm/TuChuang/main/img/202412012032578.webp)

![image-20241201203247000](https://raw.githubusercontent.com/Areufm/TuChuang/main/img/202412012032774.webp)

![image-20241201203310018](https://raw.githubusercontent.com/Areufm/TuChuang/main/img/202412012033766.webp)

## 职位详细信息页

点击职位卡片，可以跳转至职位详细信息页面

展现职位具体信息：**名称、薪资、地点、福利、要求等**

![image-20241201204346217](https://raw.githubusercontent.com/Areufm/TuChuang/main/img/202412012043892.webp)

## 推荐岗位

推荐页面，可以根据个人信息及求职岗位，构建出推荐职位和个人能力的**知识图谱**

每次推荐 20 个职位，支持分页切换查看不同职位，推荐顺序按**匹配度降序排列**

推荐方式支持技能优先、名企优先等方法

知识图谱支持拖动、缩放、分类筛选展示详细节点等功能

点击左侧小卡片可以弹窗查看该职位具体信息

![image-20241201204510414](https://raw.githubusercontent.com/Areufm/TuChuang/main/img/202412012045925.webp)

![image-20241201204903189](https://raw.githubusercontent.com/Areufm/TuChuang/main/img/202412012049000.webp)

![image-20250204170042300](https://raw.githubusercontent.com/Areufm/TuChuang/main/img/202502041700979.webp)
