import { Buttons } from './examples/Buttons';
import { Checkboxs } from './examples/Checkboxs';
import { Chips } from './examples/Chips';

export default function Home() {
  return (
    <div className="flex flex-col gap-6 p-3">
      <Chips />
      <Buttons />
      <Checkboxs />
    </div>
  );
}
