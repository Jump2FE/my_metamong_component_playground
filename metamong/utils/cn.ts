// eslint-disable-next-line no-restricted-imports
import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * a utility function to merge tailwind classes
 * @param args tailwind classes
 * @returns merged tailwind className string
 *
 * @example
 * ```tsx
 * import { cn } from '@/utils/cn';
 * const className = cn('text-red-500', 'bg-blue-500');
 * ```
 *
 * @see https://github.com/dcastil/tailwind-merge/issues/274
 * @see https://akhilaariyachandra.com/snippets/using-clsx-or-classnames-with-tailwind-merge
 */
export function cn(...args: ClassValue[]) {
  return twMerge(clsx(...args));
}
