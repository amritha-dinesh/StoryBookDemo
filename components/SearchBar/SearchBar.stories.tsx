// stories/MyButton.stories.tsx
import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {SearchBar} from './SearchBar';

export default {
  title: 'SearchBar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

export const Basic: ComponentStory<typeof SearchBar> = args => (
  <SearchBar {...args} />
);

Basic.args = {
  placeholder: 'Heelo',
  placeholderTextColor: 'black',
  round: true,
};
