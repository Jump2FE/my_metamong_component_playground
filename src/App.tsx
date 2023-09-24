import AppLayout from 'components/AppLayout/AppLayout';
import './App.css';
import AppRoutes from 'routes';
import Sidebar from 'components/Sidebar/Sidebar';

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
    </div>
  );
}

export default App;
