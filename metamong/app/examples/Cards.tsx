'use client';
import { Button, Card, CardBase } from '@/components';
import { useState } from 'react';
import { Box } from '../common/Box';

export function Cards() {
  const [checked, setChecked] = useState(false);
  return (
    <Box title="Cards" description="Card component 예제 입니다.">
      <div className="text-xl">type에 따른 형태</div>
      <div className="flex gap-4">
        <Card title="hello world">contents</Card>
        <Card type="outlined" title="hello world2">
          hello world
        </Card>
      </div>
      <div className="text-xl">여러 케이스</div>
      <div className="flex gap-4">
        <Card>contents(props를 아무것도 전달 안할 때)</Card>
        <Card type="outlined" subtitle="subtitle">
          hello world(subtitle만 넣은 경우)
        </Card>
        <Card type="outlined" title="hello world2">
          hello world
        </Card>
        <CardBase.Root className="w-fit h-fit">
          <CardBase.Content>contents(컨텐츠만 있고 사이즈를 딱 맞출 경우)</CardBase.Content>
        </CardBase.Root>
        <Card
          type="outlined"
          title="with action button"
          actions={
            <>
              <Button onClick={() => alert('action1')}>action1</Button>
              <Button onClick={() => alert('action2')}>action2</Button>
              <Button onClick={() => alert('action3')}>action3</Button>
            </>
          }
        >
          kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
        </Card>
      </div>
    </Box>
  );
}
