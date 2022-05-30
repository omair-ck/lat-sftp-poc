const express = require('express');
const app = express();
const postRoutes = require('./routes/post');
app.get("/", postRoutes.getPost);
const PORT = 8086;
app.listen(PORT, () => {
	console.log('Server listening');
});