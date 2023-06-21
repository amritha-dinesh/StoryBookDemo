// stories/MyButton.stories.tsx
import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {CustomInput} from './customInput';

export default {
  title: 'TextInput',
  component: CustomInput,
} as ComponentMeta<typeof CustomInput>;

export const Basic: ComponentStory<typeof CustomInput> = args => (
  <CustomInput {...args} />
);

Basic.args = {
  mode: 'outlined',
};
