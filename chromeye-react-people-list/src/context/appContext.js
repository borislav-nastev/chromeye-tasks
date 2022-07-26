import {
  useState,
  useContext,
  createContext,
  useEffect,
  useCallback,
} from 'react';

import { getPeople } from '../api/peopleAPI';

import getNumberOfButtons from '../utils/getNumberOfButtons';
import findFirstPersonNumberOnPage from '../utils/findFirstPersonNumberOnPage';
import findLastPersonNumberOnPage from '../utils/findLastPersonNumberOnPage';
import findPeopleOnPage from '../utils/findPeopleOnPage';
import filterPeople from '../utils/filterPeople';

const AppContext = createContext({
  people: [],
  peopleOnCurrentPage: [],
  peoplePerPage: 0,
  currentSelectedPage: 0,
  filteredValue: '',
  countOfBtn: 0,
  onSelectPeoplePerPage: () => {},
  onSelectPage: () => {},
  onMoveToPrevPage: () => {},
  onMoveToNextPage: () => {},
  onFilterPeople: () => {},
});

const AppContextProvider = ({ children }) => {
  const [people, setPeople] = useState([]);
  const [peopleOnCurrentPage, setPeopleOnCurrentPage] = useState([]);
  const [peoplePerPage, setPeoplePerPage] = useState(3);
  const [currentSelectedPage, setCurrentSelectedPage] = useState(1);
  const [filteredValue, setFilterValue] = useState('');
  const [countOfBtn, setCountOfBtn] = useState(0);

  const startNumberOfSelection = findFirstPersonNumberOnPage(
    peoplePerPage,
    currentSelectedPage
  );
  const endNumberOfSelection = findLastPersonNumberOnPage(
    peoplePerPage,
    currentSelectedPage
  );

  useEffect(() => {
    if (filteredValue !== '' && peoplePerPage === 'all') {
      let filteredPeople = filterPeople(people, filteredValue);

      setCountOfBtn(getNumberOfButtons(filteredPeople, peoplePerPage));
      setPeopleOnCurrentPage(filteredPeople);
    } else if (filteredValue !== '') {
      let filteredPeople = filterPeople(people, filteredValue);

      setCountOfBtn(getNumberOfButtons(filteredPeople, peoplePerPage));
      setPeopleOnCurrentPage(
        findPeopleOnPage(
          filteredPeople,
          startNumberOfSelection,
          endNumberOfSelection
        )
      );
    } else if (peoplePerPage === 'all') {
      setPeopleOnCurrentPage(people);
      setCountOfBtn(getNumberOfButtons(people, peoplePerPage));
    } else {
      setPeopleOnCurrentPage(
        findPeopleOnPage(people, startNumberOfSelection, endNumberOfSelection)
      );
      setCountOfBtn(getNumberOfButtons(people, peoplePerPage));
    }
  }, [
    people,
    filteredValue,
    startNumberOfSelection,
    endNumberOfSelection,
    peoplePerPage,
  ]);

  useEffect(() => {
    loadPeople();
  }, []);

  const loadPeople = async () => {
    const people = await getPeople();
    setPeople(people);
  };

  const onFilterPeople = useCallback((criteriaValue) => {
    setFilterValue(criteriaValue.toLowerCase());
    setCurrentSelectedPage(1);
  }, []);

  const onSelectPeoplePerPage = useCallback((e) => {
    setPeoplePerPage(e.target.value);
    setCurrentSelectedPage(1);
  }, []);

  const onSelectPage = useCallback((pageNumber) => {
    setCurrentSelectedPage(pageNumber);
  }, []);

  const onMoveToPrevPage = useCallback(() => {
    setCurrentSelectedPage((currentSelectedPage) => {
      return currentSelectedPage - 1;
    });
  }, []);

  const onMoveToNextPage = useCallback(() => {
    setCurrentSelectedPage((currentSelectedPage) => {
      return currentSelectedPage + 1;
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        people,
        peopleOnCurrentPage,
        peoplePerPage,
        currentSelectedPage,
        filteredValue,
        countOfBtn,
        setPeoplePerPage,
        setCurrentSelectedPage,
        onSelectPeoplePerPage,
        onSelectPage,
        onMoveToPrevPage,
        onMoveToNextPage,
        onFilterPeople,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContextProvider, useAppContext };
