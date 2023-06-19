const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const fruits = { item1: "mango", item2: "banana", item3: "orange", item4: "licchi" }
    res.send(fruits);
});


app.get('/fruits/:item', (req, res) => {
    const fruits = ['mango', 'banana', 'orange', 'licchi', 'jack-fruit'];
    const item = req.params.item;
    const fruit = fruits[item];
    res.send({ name: fruit, id: item })
});


app.listen(4000, () => console.log('listenting to port 4000'));