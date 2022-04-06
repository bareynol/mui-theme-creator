import { Theme } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';
import { EditorState } from "./editor/types"

export interface RootState {
  editor: EditorState;
  themeId: string;
  themeObject: Theme;
  themeOptions: ThemeOptions;
  savedThemes: Record<string, SavedTheme>;
  loadedFonts: Set<string>;
  activeTab: string;
  previewSize: PreviewSize;
  tutorialStep: number;
  tutorialOpen: boolean;
  componentNavOpen: boolean;
  themeConfigOpen: boolean;
  mobileWarningSeen: boolean;
}

export type SavedTheme = {
  id: string;
  name: string;
  themeOptions: ThemeOptions;
  fonts: string[];
  lastUpdated: string;
}

export type NewSavedTheme = Omit<SavedTheme, "id">

export type PreviewSize = "xs" | "sm" | "md" | "lg" | "xl" | false
