import { Chip } from '@/components';
import { FcCloseUpMode } from 'react-icons/fc';
import { SiNextdotjs } from 'react-icons/si';
import { Box } from '../common/Box';

export function Chips() {
  return (
    <Box title="chip" description="chip 예제 목록입니다">
      <div className="text-xl">Default</div>
      <div className="flex gap-4">
        <Chip>default Chip</Chip>
        <Chip startIcon={<FcCloseUpMode />}>with start icon</Chip>
        <Chip endIcon={<SiNextdotjs stroke="red" />}>with end icon</Chip>
        <Chip
          startIcon={<FcCloseUpMode />}
          endIcon={<SiNextdotjs stroke="red" />}
        >
          with start and end icon
        </Chip>
      </div>
      <div className="text-xl">Dense</div>
      <div className="flex gap-4">
        <Chip selected>dense Chip</Chip>
        <Chip selected startIcon={<FcCloseUpMode />}>
          with start icon
        </Chip>
        <Chip selected endIcon={<SiNextdotjs color="red" />} closable>
          with end icon and closable
        </Chip>
        <Chip selected startIcon={<FcCloseUpMode color="red" />} closable>
          with start and closable
        </Chip>
      </div>
      <div className="text-xl">Disable</div>
      <div className="flex gap-4">
        <Chip disabled>dense Chip</Chip>
        <Chip disabled startIcon={<FcCloseUpMode />}>
          with start icon
        </Chip>
        <Chip disabled endIcon={<SiNextdotjs color="red" />} closable>
          with end icon and closable
        </Chip>
        <Chip disabled startIcon={<FcCloseUpMode color="red" />} closable>
          with start and closable
        </Chip>
      </div>
    </Box>
  );
}
