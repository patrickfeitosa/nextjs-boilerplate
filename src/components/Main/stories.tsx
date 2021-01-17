import { Meta, Story } from '@storybook/react/types-6-0';

import Main from '.';

const stories = {
  title: 'Main',
  component: Main,
};

export const Basic: Story = (args) => (
  <Main {...args} />
);

export default stories as Meta;
