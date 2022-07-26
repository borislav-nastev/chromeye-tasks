const formatPeople = (people) => {
  const formatData = [];

  for (let i = 0; i < people.length; i++) {
    const avatarURL = `http://apis.chromeye.com:9191${people[i].avatar.url}`;
    const currentPerson = {
      avatar: avatarURL,
      ID: people[i].id,
      'first name': people[i].firstName,
      'last name': people[i].lastName,
      email: people[i].email,
      company: people[i].company.name,
      department: people[i].company.department,
      'start date': people[i].company.startDate,
    };

    formatData.push(currentPerson);
  }

  return formatData;
};

export default formatPeople;
