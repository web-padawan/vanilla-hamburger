export interface BurgerProps {
  direction: 'left' | 'right';
  disabled: boolean;
  distance: 'sm' | 'md' | 'lg';
  duration: number;
  easing: string;
  label: string;
  pressed: boolean;
  size: number;
}

export interface RenderOptions {
  barHeight: number;
  barStyles: Record<string, string>;
  margin: number;
  move: number;
  pressed: boolean;
  time: number;
  topOffset: number;
}
