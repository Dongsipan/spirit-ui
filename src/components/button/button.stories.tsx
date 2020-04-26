import React from 'react';
import Button from './button'
import { storiesOf } from '@storybook/react';

const types = () => (
  <>
    <Button>默认按钮</Button>
    <Button btnType="primary">默认按钮</Button>
  </>
)

storiesOf('按钮', module)
.add('按钮类型', types)