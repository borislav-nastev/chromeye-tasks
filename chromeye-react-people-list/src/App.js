import PeopleFilters from './components/PeopleFilters/PeopleFilters';
import Table from './components/Table/Table';

import { useAppContext } from './context/appContext';

import './App.css';

function App() {
  const { peopleOnCurrentPage } = useAppContext();

  return (
    <main className='appContainer'>
      <PeopleFilters />
      <Table people={peopleOnCurrentPage} />
    </main>
  );
}

export default App;
