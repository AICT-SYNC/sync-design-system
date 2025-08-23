import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './index';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '다양한 두께와 너비를 가진 구분선 컴포넌트입니다. Bold(4px), Medium(2px), Thin(1px) 세 가지 크기를 제공합니다.',
      },
    },
  },
  argTypes: {
    widthProps: {
      description: '디바이더의 너비 설정',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '375px' },
      },
    },
    Size: {
      description: '디바이더의 두께 설정',
      control: 'select',
      options: ['Bold', 'Medium', 'Thin'],
      table: {
        type: { summary: 'Bold | Medium | Thin' },
        defaultValue: { summary: 'Bold' },
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Divider>;

// 기본 스토리
export const Default: Story = {
  args: {
    widthProps: '375px',
    Size: 'Bold',
  },
};

// Bold 디바이더
export const Bold: Story = {
  args: {
    widthProps: '300px',
    Size: 'Bold',
  },
  parameters: {
    docs: {
      description: {
        story: '4px 두께의 Bold 디바이더입니다. 강한 구분이 필요한 영역에 사용합니다.',
      },
    },
  },
};

// Medium 디바이더
export const Medium: Story = {
  args: {
    widthProps: '300px',
    Size: 'Medium',
  },
  parameters: {
    docs: {
      description: {
        story: '2px 두께의 Medium 디바이더입니다. 일반적인 구분선으로 사용합니다.',
      },
    },
  },
};

// Thin 디바이더
export const Thin: Story = {
  args: {
    widthProps: '300px',
    Size: 'Thin',
  },
  parameters: {
    docs: {
      description: {
        story: '1px 두께의 Thin 디바이더입니다. 가벼운 구분이 필요한 영역에 사용합니다.',
      },
    },
  },
};

// 짧은 너비
export const ShortWidth: Story = {
  args: {
    widthProps: '100px',
    Size: 'Medium',
  },
  parameters: {
    docs: {
      description: {
        story: '짧은 너비의 디바이더입니다. 작은 영역의 구분선으로 사용할 수 있습니다.',
      },
    },
  },
};

// 긴 너비
export const LongWidth: Story = {
  args: {
    widthProps: '600px',
    Size: 'Medium',
  },
  parameters: {
    docs: {
      description: {
        story: '긴 너비의 디바이더입니다. 큰 섹션의 구분선으로 사용할 수 있습니다.',
      },
    },
  },
};

// 전체 너비
export const FullWidth: Story = {
  args: {
    widthProps: '100%',
    Size: 'Medium',
  },
  parameters: {
    docs: {
      description: {
        story: '부모 컨테이너의 전체 너비를 차지하는 디바이더입니다.',
      },
    },
  },
};

// 뷰포트 너비
export const ViewportWidth: Story = {
  args: {
    widthProps: '100vw',
    Size: 'Thin',
  },
  parameters: {
    docs: {
      description: {
        story: '뷰포트 전체 너비를 차지하는 디바이더입니다.',
      },
    },
  },
};

// 모든 크기 비교
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <p style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666' }}>Bold (4px)</p>
        <Divider widthProps="250px" Size="Bold" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <p style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666' }}>Medium (2px)</p>
        <Divider widthProps="250px" Size="Medium" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <p style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666' }}>Thin (1px)</p>
        <Divider widthProps="250px" Size="Thin" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '모든 크기의 디바이더를 비교할 수 있는 스토리입니다.',
      },
    },
  },
};

// 실제 사용 예시
export const UsageExample: Story = {
  render: () => (
    <div style={{
      backgroundColor: 'white',
      padding: '24px',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      maxWidth: '400px'
    }}>
      <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>프로필 설정</h3>
      <Divider widthProps="100%" Size="Medium" />
      <div style={{ margin: '16px 0' }}>
        <p style={{ margin: '0 0 8px 0', fontSize: '14px' }}>기본 정보</p>
        <p style={{ margin: '0', fontSize: '12px', color: '#666' }}>이름, 이메일 등의 기본 정보를 설정합니다.</p>
      </div>
      <Divider widthProps="100%" Size="Thin" />
      <div style={{ margin: '16px 0' }}>
        <p style={{ margin: '0 0 8px 0', fontSize: '14px' }}>보안 설정</p>
        <p style={{ margin: '0', fontSize: '12px', color: '#666' }}>비밀번호 및 2단계 인증을 관리합니다.</p>
      </div>
      <Divider widthProps="100%" Size="Thin" />
      <div style={{ margin: '16px 0' }}>
        <p style={{ margin: '0 0 8px 0', fontSize: '14px' }}>알림 설정</p>
        <p style={{ margin: '0', fontSize: '12px', color: '#666' }}>이메일 및 푸시 알림을 설정합니다.</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '실제 UI에서 디바이더를 사용하는 예시입니다. 섹션 구분과 내용 분리에 활용됩니다.',
      },
    },
  },
};

// 반응형 너비
export const ResponsiveWidth: Story = {
  args: {
    widthProps: 'clamp(200px, 50vw, 400px)',
    Size: 'Medium',
  },
  parameters: {
    docs: {
      description: {
        story: 'CSS clamp()를 사용한 반응형 너비 디바이더입니다. 화면 크기에 따라 너비가 조정됩니다.',
      },
    },
  },
};