// stories/MyButton.stories.tsx
import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {CustomButton} from './customButton';

export default {
  title: 'Button',
  component: CustomButton,
} as ComponentMeta<typeof CustomButton>;

export const Basic: ComponentStory<typeof CustomButton> = args => (
  <CustomButton {...args} />
);

Basic.args = {
    buttonColor:'red',
    mode:'contained',
    buttonTitle:'Hello'
};
