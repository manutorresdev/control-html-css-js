const getUsers = async () => {
  try {
    const response = await fetch(`https://randomuser.me/api/?results=3`);
    const data = await response.json();
    const { results } = data;
    // selecting html nodes
    const frst = document.querySelector('#frst_prof');
    const scnd = document.querySelector('#scnd_prof');
    const thrd = document.querySelector('#thrd_prof');
    const frst_node_name = document.querySelector('#frst_name');
    const scnd_node_name = document.querySelector('#scnd_name');
    const thrd_node_name = document.querySelector('#thrd_name');
    // Saving names from object returned from api
    const frst_name = `${results[0].name.first} ${results[0].name.last}`;
    const scnd_name = `${results[1].name.first} ${results[1].name.last}`;
    const thrd_name = `${results[2].name.first} ${results[2].name.last}`;
    // Setting names into html
    frst_node_name.textContent = `${frst_name}`;
    scnd_node_name.textContent = `${scnd_name}`;
    thrd_node_name.textContent = `${thrd_name}`;
    frst.setAttribute('alt', `${frst_name}`);
    scnd.setAttribute('alt', `${scnd_name}`);
    thrd.setAttribute('alt', `${thrd_name}`);
    // saving images from api
    const frst_img = `${results[0].picture.large}`;
    const scnd_img = `${results[1].picture.large}`;
    const thrd_img = `${results[2].picture.large}`;
    // setting img to nodes
    frst.setAttribute('src', `${frst_img}`);
    scnd.setAttribute('src', `${scnd_img}`);
    thrd.setAttribute('src', `${thrd_img}`);
  } catch (error) {
    console.warn('Error');
  }
};

getUsers();
