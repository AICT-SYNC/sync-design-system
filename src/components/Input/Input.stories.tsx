import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Input } from "./Input";
import { InputSize } from "../../foundation/Input";
const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    Size: {
      control: { type: "select" },
      options: Object.values(InputSize),
      description: "Input 크기",
    },
    Enabled: {
      control: { type: "boolean" },
      description: "Input 활성화 상태",
    },
    PlaceHolder: {
      control: { type: "text" },
      description: "Placeholder 텍스트",
    },
    value: {
      control: { type: "text" },
      description: "Input 값",
    },
    onChange: {
      action: "changed",
      description: "Input 값 변경 이벤트",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive 컴포넌트 (상태 관리)
const InteractiveInput = (args: any) => {
  const [value, setValue] = useState(args.value || "");

  const handleChange = (
    newValue: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValue(newValue);
    args.onChange?.(newValue, event);
  };

  return <Input {...args} value={value} onChange={handleChange} />;
};

// 기본 스토리 (Interactive)
export const Default: Story = {
  render: InteractiveInput,
  args: {
    Size: InputSize.M,
    Enabled: true,
    PlaceHolder: "텍스트를 입력하세요",
    value: "",
  },
};

// 크기별 스토리
export const Small: Story = {
  render: InteractiveInput,
  args: {
    Size: InputSize.S,
    Enabled: true,
    PlaceHolder: "작은 입력창",
    value: "",
  },
};

export const Medium: Story = {
  render: InteractiveInput,
  args: {
    Size: InputSize.M,
    Enabled: true,
    PlaceHolder: "중간 입력창",
    value: "",
  },
};

export const Large: Story = {
  render: InteractiveInput,
  args: {
    Size: InputSize.L,
    Enabled: true,
    PlaceHolder: "큰 입력창",
    value: "",
  },
};

// 상태별 스토리
export const Disabled: Story = {
  args: {
    Size: InputSize.M,
    Enabled: false,
    PlaceHolder: "비활성화된 입력창",
    value: "수정할 수 없음",
    onChange: () => {}, //disabled 상태에서는 호출되지 않음
  },
};

export const WithValue: Story = {
  render: InteractiveInput,
  args: {
    Size: InputSize.M,
    Enabled: true,
    PlaceHolder: "초기값이 있는 입력창",
    value: "초기값",
  },
};

export const WithoutPlaceholder: Story = {
  render: InteractiveInput,
  args: {
    Size: InputSize.M,
    Enabled: true,
    PlaceHolder: "",
    value: "",
  },
};

// 모든 크기 비교
export const AllSizes: Story = {
  render: () => {
    const [smallValue, setSmallValue] = useState("");
    const [mediumValue, setMediumValue] = useState("");
    const [largeValue, setLargeValue] = useState("");

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          width: "300px",
        }}
      >
        <div>
          <h4 style={{ margin: "0 0 8px 0", fontSize: "14px" }}>Small (S)</h4>
          <Input
            Size={InputSize.S}
            Enabled={true}
            PlaceHolder="Small input"
            value={smallValue}
            onChange={(value) => setSmallValue(value)}
          />
        </div>
        <div>
          <h4 style={{ margin: "0 0 8px 0", fontSize: "14px" }}>Medium (M)</h4>
          <Input
            Size={InputSize.M}
            Enabled={true}
            PlaceHolder="Medium input"
            value={mediumValue}
            onChange={(value) => setMediumValue(value)}
          />
        </div>
        <div>
          <h4 style={{ margin: "0 0 8px 0", fontSize: "14px" }}>Large (L)</h4>
          <Input
            Size={InputSize.L}
            Enabled={true}
            PlaceHolder="Large input"
            value={largeValue}
            onChange={(value) => setLargeValue(value)}
          />
        </div>
      </div>
    );
  },
};

// 모든 상태 비교
export const AllStates: Story = {
  render: () => {
    const [defaultValue, setDefaultValue] = useState("");
    const [withValue, setWithValue] = useState("기존 값");

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "300px",
        }}
      >
        <div>
          <h4 style={{ margin: "0 0 8px 0", fontSize: "14px" }}>
            Default State
          </h4>
          <Input
            Size={InputSize.M}
            Enabled={true}
            PlaceHolder="기본 상태"
            value={defaultValue}
            onChange={(value) => setDefaultValue(value)}
          />
          <p style={{ margin: "4px 0 0 0", fontSize: "12px", color: "#666" }}>
            값: "{defaultValue}"
          </p>
        </div>

        <div>
          <h4 style={{ margin: "0 0 8px 0", fontSize: "14px" }}>
            Disabled State
          </h4>
          <Input
            Size={InputSize.M}
            Enabled={false}
            PlaceHolder="비활성화 상태"
            value="수정할 수 없음"
            onChange={() => {}}
          />
        </div>

        <div>
          <h4 style={{ margin: "0 0 8px 0", fontSize: "14px" }}>
            With Initial Value
          </h4>
          <Input
            Size={InputSize.M}
            Enabled={true}
            PlaceHolder="초기값 있음"
            value={withValue}
            onChange={(value) => setWithValue(value)}
          />
          <p style={{ margin: "4px 0 0 0", fontSize: "12px", color: "#666" }}>
            값: "{withValue}"
          </p>
        </div>

        <div>
          <h4 style={{ margin: "0 0 8px 0", fontSize: "14px" }}>
            No Placeholder
          </h4>
          <Input
            Size={InputSize.M}
            Enabled={true}
            PlaceHolder=""
            value=""
            onChange={() => {}}
          />
        </div>
      </div>
    );
  },
};

// 폼 사용 예시
export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
    });

    const handleFieldChange = (field: string) => (value: string) => {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    };

    const handleSubmit = () => {
      alert(JSON.stringify(formData, null, 2));
    };

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          width: "300px",
        }}
      >
        <h3 style={{ margin: "0 0 16px 0" }}>회원가입 폼 예시</h3>

        <div>
          <label
            style={{
              display: "block",
              marginBottom: "4px",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            이름
          </label>
          <Input
            Size={InputSize.M}
            Enabled={true}
            PlaceHolder="이름을 입력하세요"
            value={formData.name}
            onChange={handleFieldChange("name")}
          />
        </div>

        <div>
          <label
            style={{
              display: "block",
              marginBottom: "4px",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            이메일
          </label>
          <Input
            Size={InputSize.M}
            Enabled={true}
            PlaceHolder="이메일을 입력하세요"
            value={formData.email}
            onChange={handleFieldChange("email")}
          />
        </div>

        <div>
          <label
            style={{
              display: "block",
              marginBottom: "4px",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            전화번호
          </label>
          <Input
            Size={InputSize.M}
            Enabled={true}
            PlaceHolder="전화번호를 입력하세요"
            value={formData.phone}
            onChange={handleFieldChange("phone")}
          />
        </div>

        <button
          onClick={handleSubmit}
          style={{
            padding: "8px 16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          제출
        </button>

        <div
          style={{
            padding: "12px",
            backgroundColor: "#f8f9fa",
            borderRadius: "4px",
            fontSize: "12px",
          }}
        >
          <strong>현재 폼 데이터:</strong>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      </div>
    );
  },
};
