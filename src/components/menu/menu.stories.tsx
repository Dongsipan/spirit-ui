import React from 'react'
import Menu from './menu'
import MenuItem from './menuItem'
import SubMenu from './subMenu'
import { storiesOf } from '@storybook/react'
import { decorate } from '@storybook/addon-actions'
import { withKnobs, boolean, array } from '@storybook/addon-knobs'

const onSelect = decorate([args => args.slice(0, 1)])

export const basic = () => (
  <>
    <Menu
      multiple={boolean('是否支持多选', false)}
      defaultSelectedKeys={array('当前选中的key', ['100001'])}
      onSelect={onSelect.action('menu item selected')}
    >
      <MenuItem keyFiled="100001">cool link 1</MenuItem>
      <MenuItem keyFiled="100002" disabled={boolean('是否禁用“100002”菜单', false)}>
        cool link 2
      </MenuItem>
      <MenuItem keyFiled="100003">cool link 3</MenuItem>
    </Menu>
  </>
)

export const subMenu = () => (
  <>
    <Menu mode="vertical" defaultOpenKeys={['sub-1']}>
      <SubMenu keyFiled="sub-1" title="含有子菜单">
        <MenuItem keyFiled="100001">cool link</MenuItem>
        <MenuItem keyFiled="100002">cool link</MenuItem>
        <MenuItem keyFiled="100003">cool link</MenuItem>
        <MenuItem keyFiled="100004">cool link</MenuItem>
      </SubMenu>
      <MenuItem keyFiled="200001" disabled={boolean('是否禁用“200001”菜单', false)}>
        cool link 2
      </MenuItem>
      <MenuItem keyFiled="300001">cool link 3</MenuItem>
      <MenuItem keyFiled="400001">cool link 4</MenuItem>
    </Menu>
  </>
)

storiesOf('菜单', module).addDecorator(withKnobs).add('基础', basic).add('子菜单', subMenu)
