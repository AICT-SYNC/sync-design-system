import type { Meta, StoryObj } from '@storybook/react';
import { ToggleButton } from './ToggleButton';
import { ToggleButtonSize } from '@foundation/ToggleButton';

interface ToggleButtonProps {
  options: string[];
  defaultSelected?: number;
  onChange?: (selectedIndex: number) => void;
  size?: ToggleButtonSize;
}

const meta: Meta<ToggleButtonProps> = {
  title: 'Components/ToggleButton',
  component: ToggleButton,
  argTypes: {
    options: {
      control: 'object',
      description: '토글 버튼 옵션들',
    },
    defaultSelected: {
      control: 'number',
      description: '기본 선택된 인덱스',
    },
    onChange: {
      action: 'changed',
      description: '선택 변경 시 호출되는 콜백',
    },
    size: {
      control: { type: 'radio' },
      options: Object.values(ToggleButtonSize),
      description: '토글 버튼 크기',
    },
  },
};

export default meta;
type Story = StoryObj<ToggleButtonProps>;

export const Large: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    defaultSelected: 0,
    size: ToggleButtonSize.L,
  },
};

export const Medium: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    defaultSelected: 0,
    size: ToggleButtonSize.M,
  },
};

export const SemiMedium: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    defaultSelected: 0,
    size: ToggleButtonSize.SM,
  },
};

export const Small: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    defaultSelected: 0,
    size: ToggleButtonSize.S,
  },
};

export const ExtraSmall: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    defaultSelected: 0,
    size: ToggleButtonSize.XS,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
      <ToggleButton
        size={ToggleButtonSize.L}
        options={['Option 1', 'Option 2', 'Option 3']}
        defaultSelected={0}
      />
      <ToggleButton
        size={ToggleButtonSize.M}
        options={['Option 1', 'Option 2', 'Option 3']}
        defaultSelected={0}
      />
      <ToggleButton
        size={ToggleButtonSize.SM}
        options={['Option 1', 'Option 2', 'Option 3']}
        defaultSelected={0}
      />
      <ToggleButton
        size={ToggleButtonSize.S}
        options={['Option 1', 'Option 2', 'Option 3']}
        defaultSelected={0}
      />
      <ToggleButton
        size={ToggleButtonSize.XS}
        options={['Option 1', 'Option 2', 'Option 3']}
        defaultSelected={0}
      />
    </div>
  ),
};