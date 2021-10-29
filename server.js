const express = require("express");
const app = express();
const { render } = require("@riotjs/ssr");
const MyComponent = require("./src/my-component");

app.use(express.static("./dist"));

app.get("/", (req, res) => {
	const ssr = render('my-component', MyComponent, {name:'Riot'});
	console.log(ssr);
	const html = `
	<html>
		<head>
			<title>SSR Test</title>
		</head>
		<body>
			<div id="root">${ssr}</div>
			<script src="index.js"></script>
		</body>
	</html>
	`;
	res.send(html);
});

app.get("/hydration", (req, res) => {
	const ssr = render('my-component', MyComponent, {name:'Riot'});
	console.log(ssr);
	const html = `
	<html>
		<head>
			<title>SSR Test</title>
		</head>
		<body>
			<div id="root">${ssr}</div>
			<script src="hydration.js"></script>
		</body>
	</html>
	`;
	res.send(html);
});


app.listen(8888, () => {
	console.log("Server is starging...");
});