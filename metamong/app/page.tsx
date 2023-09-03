import { Chip } from '@/components/Chip/Chip';
import { FcCloseUpMode } from 'react-icons/fc';
import { SiNextdotjs } from 'react-icons/si';
import { Box } from './common/Box';

export default function Home() {
  return (
    <div className="flex flex-col gap-8 p-3">
      <Box title="chip" description="chip 예제 목록입니다">
        <div className="text-xl">Default</div>
        <div className="flex gap-5">
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
        <div className="flex gap-5">
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
        <div className="flex gap-5">
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
    </div>
  );
}
