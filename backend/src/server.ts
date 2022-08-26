import app from './app';
import database from './database';

database.sync();
console.log('Database running at 3306');

app.listen(process.env.PORT);
console.log(`Server running at ${process.env.PORT}`);

// app.listen(process.env.PORT || 3001, () => {
//   // console.log(`Server running at 3001`);
//   console.log(`Server running at ${process.env.PORT}`);
// });
