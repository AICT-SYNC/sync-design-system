import type { Meta, StoryObj } from '@storybook/react';
import ListItem from './listItem';

const meta: Meta<typeof ListItem> = {
  title: 'Components/ListItem',
  component: ListItem,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    showCheckbox: { control: 'boolean' },
    checked: { control: 'boolean' },
    showAvatar: { control: 'boolean' },
    avatarSrc: { control: 'text' },
    size: { control: { type: 'select', options: ['large', 'medium', 'small'] } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LargeWithCheckbox: Story = {
  args: {
    title: 'Jason Of Lee',
    subtitle: 'leegeh1213@gmail.com',
    showCheckbox: true,
    checked: true,
    showAvatar: true,
    size: 'large',
  },
};

export const LargeWithoutCheckbox: Story = {
  args: {
    title: 'Jason Of Lee',
    subtitle: 'leegeh1213@gmail.com',
    showCheckbox: false,
    showAvatar: true,
    size: 'large',
  },
};

export const MediumWithCheckbox: Story = {
  args: {
    title: 'Jason Of Lee',
    subtitle: 'leegeh1213@gmail.com',
    showCheckbox: true,
    checked: true,
    showAvatar: true,
    size: 'medium',
  },
};

export const MediumWithoutCheckbox: Story = {
  args: {
    title: 'Jason Of Lee',
    subtitle: 'leegeh1213@gmail.com',
    showCheckbox: false,
    showAvatar: true,
    size: 'medium',
  },
};

export const SmallWithCheckbox: Story = {
  args: {
    title: 'Jason Of Lee',
    subtitle: 'leegeh1213@gmail.com',
    showCheckbox: true,
    checked: true,
    showAvatar: true,
    size: 'small',
  },
};

export const SmallWithoutCheckbox: Story = {
  args: {
    title: 'Jason Of Lee',
    subtitle: 'leegeh1213@gmail.com',
    showCheckbox: false,
    showAvatar: true,
    size: 'small',
  },
};