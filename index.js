const express = require('express');


const app = express();
// function rooCall(req, res) {
//     res.send('thank you very much');
// }
// app.get('/', rootCall)
//same as line 11, 12

app.get('/', (req, res) => {
    res.send('thank you very much')
})
app.listen(3000, ()=> console.log('listening to port 3000'));