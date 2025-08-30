import 'styled-components';
import { SyncTheme } from '../style/SyncTheme/type';

declare module 'styled-components' {
  export interface DefaultTheme extends SyncTheme {
    [key: string]: string;
  }
}