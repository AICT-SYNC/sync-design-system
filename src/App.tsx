import './App.css'
import Button from './components/Button/button'
import ToggleButton from './components/ToggleButton/toggleButton'
import IconButton from './components/IconButton/iconButton'
import Dropdown from './components/Dropdown/dropdown'
import Checkbox from './components/Checkbox/checkbox'

function App() {

  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Button size="xlarge" variant="primary">가나다라</Button>
      <Button size="large" variant="primary">가나다라</Button>
      <Button size="medium" variant="primary">가나다라</Button>
      <Button size="small" variant="primary">가나다라</Button>
      <Button size="xsmall" variant="primary">가나다라</Button>

      <Button size="xlarge" variant="secondary">가나다라</Button>
      <Button size="large" variant="secondary">가나다라</Button>
      <Button size="medium" variant="secondary">가나다라</Button>
      <Button size="small" variant="secondary">가나다라</Button>
      <Button size="xsmall" variant="secondary">가나다라</Button>

      <Button size="xlarge" variant="tertiary">가나다라</Button>
      <Button size="large" variant="tertiary">가나다라</Button>
      <Button size="medium" variant="tertiary">가나다라</Button>
      <Button size="small" variant="tertiary">가나다라</Button>
      <Button size="xsmall" variant="tertiary">가나다라</Button>

      <Button size="xlarge" variant="danger">가나다라</Button>
      <Button size="large" variant="danger">가나다라</Button>
      <Button size="medium" variant="danger">가나다라</Button>
      <Button size="small" variant="danger">가나다라</Button>
      <Button size="xsmall" variant="danger">가나다라</Button>

      <Button size="xlarge" variant="warning">가나다라</Button>
      <Button size="large" variant="warning">가나다라</Button>
      <Button size="medium" variant="warning">가나다라</Button>
      <Button size="small" variant="warning">가나다라</Button>
      <Button size="xsmall" variant="warning">가나다라</Button>

      <ToggleButton size="large" options={['옵션 1', '옵션 2']} />
      <ToggleButton size="large" options={['ON', 'OFF']} defaultSelected={0} />

      <ToggleButton size="small" options={['옵션 A', '옵션 B']} />
      <ToggleButton size="small" options={['활성', '비활성']} defaultSelected={1} />

      <IconButton size="large" />
      <IconButton size="medium" />
      <IconButton size="small" />

      <Dropdown size="large" options={['옵션 1', '옵션 2', '옵션 3']} />
      <Dropdown size="large" options={['사과', '바나나', '오렌지', '포도']} defaultSelected={1} />
      <Dropdown size="large" options={['월요일', '화요일', '수요일', '목요일', '금요일']} placeholder="요일 선택" />

      <Dropdown size="medium" options={['Small', 'Medium', 'Large']} />
      <Dropdown size="medium" options={['Red', 'Green', 'Blue', 'Yellow']} defaultSelected={2} />
      <Dropdown size="medium" options={['1월', '2월', '3월', '4월', '5월', '6월']} placeholder="월 선택" />

      <Dropdown buttonSize="small" size="large" options={['옵션 A', '옵션 B', '옵션 C']} />
      <Dropdown buttonSize="small" size="medium" options={['Cat', 'Dog', 'Bird']} defaultSelected={1} />
      <Dropdown buttonSize="small" size="large" options={['Yes', 'No']} placeholder="선택" />

      <Checkbox size="xlarge" />
      <Checkbox size="large" />
      <Checkbox size="medium" />
      <Checkbox size="small" />
      <Checkbox size="xsmall" />

      <Checkbox size="large" checked={false} />
      <Checkbox size="large" checked={true} />
      <Checkbox size="large" checked={false} disabled={true} />
    </div>
  )
}

export default App
