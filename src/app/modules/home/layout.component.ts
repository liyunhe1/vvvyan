import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  items: MenuItem[];

  userItems: MenuItem[];

  constructor() { }

  ngOnInit(): void {

    this.items = [
      {
        label: '商品管理',
        items: [{
          label: '商品列表',
          items: [
            { label: '添加商品' },
          ]
        },
        {
          label: '商品分类',
          items: [
            { label: '添加商品分类' },
          ]
        }
        ]
      },
      {
        label: '订单管理',
        items: [
          { label: '订单列表', },
          { label: '订单设置', },
          { label: '退货处理', },
        ]
      },
      {
        label: '系统设置',
        items: [
          { label: '系统设置', },
          { label: '清理缓存', },
          {
            label: '数据备份还原',
            items: [
              { label: '数据备份' },
              { label: '数据还原' },
            ]
          },
        ]
      },
    ];

    this.userItems = [
      { label: '账户管理',  },
      { label: '关于本系统', },
      { separator: true },
      { label: '退出登录', }
    ]
  }

}
