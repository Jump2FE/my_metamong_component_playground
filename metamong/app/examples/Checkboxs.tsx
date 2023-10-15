'use client';

import { Checkbox } from '@/components';
import { useState } from 'react';
import { Box } from '../common/Box';

export function Checkboxs() {
  const [checked, setChecked] = useState(false);
  return (
    <Box title="Checkbox" description="Checkbox 예제 입니다.">
      <div className="flex gap-4">
        <Checkbox
          checked={checked}
          onClick={() => setChecked((c: boolean) => !c)}
        />
        <Checkbox
          checked={checked}
          onClick={() => setChecked((c: boolean) => !c)}
        />
      </div>
    </Box>
  );
}
