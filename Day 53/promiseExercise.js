
const URL ="https://official-joke-api.appspot.com/random_joke";
const token ="BQCnCnVoSwo2d5EQ7NJFVjLBabqES0GHcFHBkLMeJYfgZBq-pIe_oN8jo96ySfKILlF7RNuQzd_gy6U8uUcYz-clBbirK6Yy2BiU0Qa7oIxEEEedP3Y";

async function spotifyFetch()
{
    const url ="https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg";
    const request = new Request(url,{
        headers:{
            'Authorization':`Bearer ${token}`
        }
    })

    const response = await fetch(request);
    const data = await response.json();
    console.log(data);
}

spotifyFetch();
// fetch(URL)
//     .then((data)=> data.json())
//     .then((res)=> console.log(res))

async function randomJoke()
{
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data.setup);
    setTimeout(()=>{
        console.log(data.punchline);
    },2500);
}
// randomJoke()


/* 

curl -X POST "https://accounts.spotify.com/api/token" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "grant_type=client_credentials&client_id=1f34084dae71404f8a5a39cd4d0c21b2&client_secret=4c8856575b0a4c5892d65b7cc6c4788c"


*/