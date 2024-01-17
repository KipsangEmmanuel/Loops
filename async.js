async function fetchData() {
    try{

       const response =  await fetch('https://jsonplaceholder.typicode.com/todos/1');

       if(!response.ok) {
        throw new Error('Network response was not okay')
       }

       const data = await response.json();

       console.log('Data:', data)

    }catch(error) {
        console.log('Error fetching data:', error.message);
    }
}

fetchData();

