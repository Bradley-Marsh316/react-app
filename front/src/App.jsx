import MainView from './components/MainView';
import Sidebar from './components/Sidebar';

export default function App() {
  return (
    <div className="flex">
      <Sidebar />
      <MainView />
    </div>
  );
};
