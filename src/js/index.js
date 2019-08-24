import axios from 'axios'; // axios is a popular HTTP request library. install it from npm as --save. 
                           //axios is better than fetch because it works on older browsers/automatically returns json(so dont need 2 steps as fetch)/and also better in error handling.

async function getResults(query) {
    const key = '4060c2889a4fd3a70ca5c876c19abcf6';
    try {
        const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`);
        const recipes = res.data.recipes;
        console.log(recipes);
    } catch (error) {
        alert(error);
    }
}
getResults('pizza');


// https://www.food2fork.com/api/search
// 4060c2889a4fd3a70ca5c876c19abcf6
// https://www.food2fork.com/api/search?key=4060c2889a4fd3a70ca5c876c19abcf6&q=pizza

