import type { Meta, StoryObj } from '@storybook/react';
import { ToggleButton } from './toggleButton';
import { ToggleButtonSize } from '../../foundation/ToggleButton';

const meta: Meta<typeof ToggleButton> = {
  title: 'Components/ToggleButton',
  component: ToggleButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
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
      control: 'select',
      options: [ToggleButtonSize.Large, ToggleButtonSize.Small],
      description: '토글 버튼 크기',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    defaultSelected: 0,
    size: ToggleButtonSize.Large,
  },
};

export const Large: Story = {
  args: {
    options: ['Daily', 'Weekly', 'Monthly'],
    defaultSelected: 1,
    size: ToggleButtonSize.Large,
  },
};

export const Small: Story = {
  args: {
    options: ['Daily', 'Weekly', 'Monthly'],
    defaultSelected: 1,
    size: ToggleButtonSize.Small,
  },
};

export const TwoOptions: Story = {
  args: {
    options: ['On', 'Off'],
    defaultSelected: 0,
    size: ToggleButtonSize.Large,
  },
};

export const FourOptions: Story = {
  args: {
    options: ['1D', '1W', '1M', '1Y'],
    defaultSelected: 2,
    size: ToggleButtonSize.Small,
  },
};

export const LongText: Story = {
  args: {
    options: ['Short Term', 'Medium Term', 'Long Term Investment'],
    defaultSelected: 0,
    size: ToggleButtonSize.Large,
  },
};

export const Interactive: Story = {
  args: {
    options: ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4'],
    defaultSelected: 0,
    size: ToggleButtonSize.Large,
  },
  play: async ({ canvasElement }) => {
    // 상호작용 테스트를 위한 play function (선택사항)
  },
};

// 모든 크기 비교
export const AllSizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
      <div>
        <h3 style={{ margin: '0 0 10px 0', fontSize: '14px', fontWeight: 'bold' }}>Large</h3>
        <ToggleButton
          {...args}
          size={ToggleButtonSize.Large}
          options={['Option 1', 'Option 2', 'Option 3']}
        />
      </div>
      <div>
        <h3 style={{ margin: '0 0 10px 0', fontSize: '14px', fontWeight: 'bold' }}>Small</h3>
        <ToggleButton
          {...args}
          size={ToggleButtonSize.Small}
          options={['Option 1', 'Option 2', 'Option 3']}
        />
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};