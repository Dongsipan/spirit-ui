import React from 'react';
import Button from './button'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions'

const types = () => (
  <>
    <Button onClick={action('default button clicked')}>默认按钮</Button>
    <Button btnType="primary" onClick={action('primary button clicked')}>主要按钮</Button>
    <Button btnType="success" onClick={action('success button clicked')}>成功按钮</Button>
    <Button btnType="warning" onClick={action('warning button clicked')}>警告按钮</Button>
    <Button btnType="danger" onClick={action('danger button clicked')}>危险按钮</Button>
  </>
)

storiesOf('按钮', module)
.add('按钮类型', types)