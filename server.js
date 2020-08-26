// const express = require('express');
// const app = express();



// app.use(express.static(__dirname + '/HTML'));

// app.listen(process.env.PORT || 3000, ()=> {
// 	console.log(`app is running on port ${process.env.PORT}`);
// })




const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
app.use(cors())
app.use(bodyParser.json());


app.use(express.static(__dirname + '/germanium/HTML'));

app.listen(process.env.PORT || 3000, ()=> {
	console.log(`app is running on port ${process.env.PORT}`);
})


app.use(express.urlencoded({
	extended: false
}));
app.use(express.json());







app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'views', 'index1.html'));
});
