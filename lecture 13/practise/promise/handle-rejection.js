// Handle rejection with async/await
function failingPromise() {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Something went wrong')), 600);
  });
}

async function fetchData() {
  try {
    const response = await failingPromise();
    console.log(response);
  } catch (error) {
    console.error('Error occurred:', error.message);
  } finally {
    console.log('Fetch attempt finished (success or failure).');
  }
}

fetchData();
