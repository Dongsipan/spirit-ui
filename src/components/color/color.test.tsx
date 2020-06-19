import React from 'react'
import { render } from '@testing-library/react'

import Color from './color'

describe('测试Color组件', () => {
  it('应该正常渲染Color组件', () => {
    const wrapper = render(<Color />)
    const colors = wrapper.queryAllByTestId('color')
    expect(colors).toHaveLength(6)
  })
})
