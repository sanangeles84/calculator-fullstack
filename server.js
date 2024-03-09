const app = require("./app.js");
require("dotenv").config();
var port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port: ${port}`));
