const getPeople = async () => {
  try {
    const response = await fetch('http://apis.chromeye.com:9191/people', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export { getPeople };
