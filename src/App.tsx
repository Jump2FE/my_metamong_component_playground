import AppLayout from 'components/AppLayout/AppLayout';
import './App.css';
import AppRoutes from 'routes';
import Sidebar from 'components/Sidebar/Sidebar';
import ModalList from 'components/Modal/ModalList/ModalList';

function App() {
  return (
    <div className="App">
      <AppLayout>
        <AppLayout.Side>
          <Sidebar />
        </AppLayout.Side>
        <AppLayout.Main>
          <AppRoutes />
        </AppLayout.Main>
      </AppLayout>
      <ModalList />
    </div>
  );
}

export default App;
