import { Meta, Story } from '@storybook/react';
import React from 'react';
import { DropDown, Props } from '../src/Dropdown-Menu/Dropdown';
import { BsThreeDotsVertical } from 'react-icons/bs';

const meta: Meta = {
  title: 'Basic DropDown',
  component: DropDown,
};

export default meta;

const Template: Story<Props> = args => <DropDown {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: [<h1>First Item</h1>, <h1>Second Item</h1>],
  title: <BsThreeDotsVertical />,
};
