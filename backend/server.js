const app = require("./app");

const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log(`App Running on port ${PORT}`);
});
