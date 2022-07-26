const filterPeople = (people, criteria) => {
  return people.filter(
    (person) =>
      person.firstName.toLowerCase().includes(criteria) ||
      person.lastName.toLowerCase().includes(criteria)
  );
};

export default filterPeople;
