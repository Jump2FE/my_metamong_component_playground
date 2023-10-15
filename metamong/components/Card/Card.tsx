import { CardBase } from './CardBase';

export interface CardProps {
  type?: 'outlined' | 'elevated';
  title?: string;
  subtitle?: string;
  mediaSrc?: string;
  thumbnail?: React.ReactNode;
  actions?: React.ReactNode;
  children: React.ReactNode;
}

export function Card({
  type = 'elevated',
  actions,
  title,
  subtitle,
  mediaSrc,
  thumbnail,
  children,
}: CardProps) {
  return (
    <CardBase.Root type={type}>
      <CardBase.Header title={title} subtitle={subtitle} thumbnail={thumbnail} />
      <CardBase.Media src={mediaSrc} />
      <CardBase.Content>{children}</CardBase.Content>
      <CardBase.Footer actions={actions} />
    </CardBase.Root>
  );
}
