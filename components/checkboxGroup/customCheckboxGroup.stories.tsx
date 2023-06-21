// stories/MyButton.stories.tsx
import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {CustomCheckboxGroup} from './customCheckboxGroup';

export default {
  title: 'CheckboxGroup',
  component: CustomCheckboxGroup,
} as ComponentMeta<typeof CustomCheckboxGroup>;

export const Basic: ComponentStory<typeof CustomCheckboxGroup> = args => (
  <CustomCheckboxGroup {...args} />
);

Basic.args = {};
