// stories/MyButton.stories.tsx
import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Switch} from './Switch';

export default {
  title: 'Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;

export const Basic: ComponentStory<typeof Switch> = args => (
  <Switch {...args} />
);

Basic.args = {
  value: true,
  onValueChange: () => {},
  disabled: false,
};
