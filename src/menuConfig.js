// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: '联系',
    //path: 'https://github.com/CormickKneey',
    path: 'mailto:cormick1080@gmail.com',
    external: true,
    newWindow: true,
    icon: 'email',
  },
];

const asideMenuConfig = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: 'atm',
    children: [
      {
        name: '服务器状态',
        path: '/dashboard/monitor',
      },
    ],
  },
  {
    name: '\u6253\u5361\u9875\u9762',
    path: '/steps',
    icon: 'calendar',
    children: [
      {
        name: '今日打卡',
        path: '/steps/today',
      },
    ],
  },
  {
    name: '\u6587\u4EF6\u5BC4\u5B58 : )',
    path: '/storage',
    icon: 'upload',
    children:[
      {
        name: '上传',
        path:'/storage/upload',
      },{
        name: '下载',
        path:'/storage/download',
      },
    ],
  },
];

export { headerMenuConfig, asideMenuConfig };
