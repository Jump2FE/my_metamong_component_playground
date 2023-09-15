'use client';

import {
  Button,
  CircleButton,
  btnShortSizes,
  btnTypes,
} from '@/components/Button';
import { Fragment, useCallback } from 'react';
import { FcRefresh } from 'react-icons/fc';
import { Box } from '../common/Box';

export function Buttons() {
  const handleRefresh = useCallback(() => alert('refresh'), []);

  const formatShortToLong = (short: string) => {
    switch (short) {
      case 'sm':
        return 'small';
      case 'md':
        return 'medium';
      case 'lg':
        return 'large';
    }
  };

  return (
    <Box
      title="Button"
      description="Button 예제 입니다. 사이즈별, 목적별 버튼을 확인할 수 있습니다."
    >
      <div className="flex flex-col gap-3">
        {btnShortSizes.map((size) => (
          <Fragment key={size}>
            <div className="text-xl">{formatShortToLong(size)}</div>
            <span className="text-xs">(dense, default, ghost, disable 순)</span>
            <div className="flex gap-4">
              {btnTypes.map((type) => (
                <Button type={type} size={size} key={`${size}-${type}`}>
                  Button
                </Button>
              ))}
              <Button disabled size={size}>
                Disabled
              </Button>
            </div>
          </Fragment>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-xl">Circle Button</div>
        <div className="flex gap-4">
          <CircleButton onClick={handleRefresh}>
            <FcRefresh />
          </CircleButton>
          <CircleButton onClick={handleRefresh} disabled>
            <FcRefresh />
          </CircleButton>
        </div>
      </div>
    </Box>
  );
}
