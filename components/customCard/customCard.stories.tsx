// stories/MyButton.stories.tsx
import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {CustomCard} from './customCard';

export default {
  title: 'Card',
  component: CustomCard,
} as ComponentMeta<typeof CustomCard>;

export const Basic: ComponentStory<typeof CustomCard> = args => (
  <CustomCard {...args} />
);

Basic.args = {
  title: 'hello',
  content: 'hi',
  mode: 'elevated',
};
