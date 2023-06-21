// stories/MyButton.stories.tsx
import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {CustomCheckBox} from './customCheckbox';

export default {
  title: 'Checkbox',
  component: CustomCheckBox,
} as ComponentMeta<typeof CustomCheckBox>;

export const Basic: ComponentStory<typeof CustomCheckBox> = args => (
  <CustomCheckBox {...args} />
);

Basic.args = {
  label: 'Hello',
  value: true,
  onValueChanged: () => {},
};
