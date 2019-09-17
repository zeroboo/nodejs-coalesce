
# nodejs-coalesce
Implementations of coalesce function in postgres sql

# Features
From Postgres document: [https://www.postgresql.org/docs/9.5/functions-conditional.html](https://www.postgresql.org/docs/9.5/functions-conditional.html)

> The `COALESCE` function returns the first of its arguments that is not null. Null is returned only if all arguments are null. It is often used to substitute a default value for null values when data is retrieved for display.



# Usage

### Install to your project:
```npm
npm install pg-coalesce```
```
Using:
```javascript
const coalesce = require("pg-coalesce");

console.log(coalesce(null, "Hello world")); //Hello world
```
