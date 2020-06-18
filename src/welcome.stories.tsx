import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome page', module).add(
  'welcome',
  () => {
    return (
      <>
        <h1>欢迎来到 spirit 组件库</h1>
        <p>spirit 仿AntD 从零到一实现一套组件库</p>
        <h3>安装试试</h3>
        <code>npm install spirit --save</code>
      </>
    )
  },
  { info: { disable: true } }
)
