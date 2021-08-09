const getUsers = async () => {
  try {
    const response = await fetch(`https://randomuser.me/api`);
    const data = await response.json();
    const { results } = data;
    const img = document.querySelector('#profile_pic');
    console.log(img);
    img.style.cssText = `background-image: url(${results[0].picture.large})`;
    console.log(results[0].picture.large);
  } catch (error) {
    console.warn('Error');
  }
};

getUsers();
