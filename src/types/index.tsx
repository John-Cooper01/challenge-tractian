export interface IContentProps {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

export interface IAppBarProps {
  HeadTitle: string;
}
