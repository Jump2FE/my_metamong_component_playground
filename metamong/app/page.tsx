import { Buttons } from './examples/Buttons';
import { Cards } from './examples/Cards';
import { Checkboxs } from './examples/Checkboxs';
import { Chips } from './examples/Chips';
import { GridExample } from './examples/GridExample';
import { Modals } from './examples/Modals';
import { Radios } from './examples/Radios';

export default function Home() {
  return (
    <div className="flex flex-col gap-6 p-3">
      <GridExample />
      <Chips />
      <Buttons />
      <Checkboxs />
      <Radios />
      <Modals />
      <Cards />
    </div>
  );
}
