import { Component } from "react";

export default {
     plugins: [
          [
               // 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
               'umi-plugin-react', {}
          ],
     ],
     routes: [
          {
               path: '/',
               component: './Shopping'
          },
          {
               path: 'shopping',
               component: './Shopping'
          }
     ]
};