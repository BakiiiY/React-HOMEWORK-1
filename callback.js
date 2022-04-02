import axios from 'axios';
     (async () => {
    const { data: users} = await axios(
    "https://jsonplaceholder.typicode.com/users/1"
    );

    const { data: userID} = await axios(
        "https://jsonplaceholder.typicode.com/posts/1"                            
        );
    console.log("user:", users);
    console.log("post:", userID);
    
})();  

// axios kütüphanesi indirildi.

// fetch kullanmak icin node fetch kütüphanesi de indiridi.