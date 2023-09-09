// Img
import check from './assets/images/chip/check.png';
import close from './assets/images/chip/close.png';

// Component
import Chip from './chip';

const App = () => {
  return (
    <>
      <Chip>
        <Chip.Label>SUGGESTION</Chip.Label>
      </Chip>
      <Chip useSelected backgroundColor={{ default: '#bcbcbc', select: '#f17c7c' }}>
        <Chip.LeadingImg src={check} />
        <Chip.Label>ASSIST</Chip.Label>
      </Chip>
      <Chip useSelected>
        <Chip.LeadingImg src={check} />
        <Chip.Label>FILTER USE SELECT</Chip.Label>
      </Chip>
      <Chip
        useSelected
        backgroundColor={{ default: '#fff', select: '#f17c7c' }}
        borderColor={{ default: '#f17c7c', select: '#f17c7c' }}
      >
        <Chip.LeadingImg src={check} />
        <Chip.Label>INPUT</Chip.Label>
        <Chip.TrailingImg src={close} />
      </Chip>
    </>
  );
};

export default App;
