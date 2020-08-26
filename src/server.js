const path = require('path')
const express = require('express');
// const cors = require('cors');
const app = express();
// const bodyParser = require('body-parser');

// console.log(__dirname)
// console.log(path.join(__dirname, '../HTML'))

// app.use(cors())
// app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, '../HTML')));



// app.use(express.urlencoded({
// 	extended: false
// }));



// app.use(express.json());

// app.get('', (req, res) => {
// 	res.render()
// }

app.get('/', (req, res) => {
	res.sendFile('index1.html', {root:path.join(__dirname, '../HTML')});
});


// app.get('/', (req, res) => {
// 	res.sendFile(path.join(__dirname, 'views', '..index1.html'));
// });



app.listen(process.env.PORT || 3000, ()=> {
	console.log(`app is running on port ${process.env.PORT}`);
})
