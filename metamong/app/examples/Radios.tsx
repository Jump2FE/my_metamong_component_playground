import { Radio } from '@/components/Radio/Radio';
import { RadioGroup } from '@/components/Radio/RadioGroup';
import { Box } from '../common/Box';

export function Radios() {
  return (
    <Box title="Checkbox" description="Checkbox 예제 입니다.">
      <section className="flex flex-col gap-6">
        <div className="text-sm">Default</div>
        <section className="flex flex-row gap-4">
          <Radio />
          <Radio size="xl" />
        </section>
        <div className="text-sm">with title</div>
        <section className="flex flex-row gap-4">
          <Radio title="안녕" disabled />
          <Radio title="저녁 밥 먹기" />
        </section>
        <div className="text-sm">Radio Group</div>
        <section className="flex flex-row gap-4">
          <RadioGroup>
            <Radio value="1" title="안뇽!" />
            <Radio value="2" size="xl" title="그래요(xl)" />
            <Radio value="3" size="lg" title="사요나라(lg)" disabled />
          </RadioGroup>
        </section>
        <div className="text-sm">Radio Group with default value</div>
        <section className="flex flex-row gap-4 items-center">
          <RadioGroup defaultValue="3">
            <Radio value="1" title="1번" />
            <Radio value="2" size="xl" title="2번" />
            <Radio value="3" size="lg" title="3번" />
          </RadioGroup>
        </section>
      </section>
    </Box>
  );
}
//<div className="flex gap-4"></div>
