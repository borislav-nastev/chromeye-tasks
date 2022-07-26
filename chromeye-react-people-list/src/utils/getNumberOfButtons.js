const getNumberOfButtons = (people, peoplePerPage) => {
  if (peoplePerPage === 'all' || people.length === 1) {
    return 1;
  }

  return Math.ceil(people.length / peoplePerPage);
};

export default getNumberOfButtons;
