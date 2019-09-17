
# nodejs-coalesce
Implementation of SQL's coalesce function: return the first argument that is not null

# Features
From Postgres document: [https://www.postgresql.org/docs/9.5/functions-conditional.html](https://www.postgresql.org/docs/9.5/functions-conditional.html)

> The `COALESCE` function returns the first of its arguments that is not null. Null is returned only if all arguments are null.



# Usage

### Install
```npm
npm install pg-coalesce
```
### Using:
```javascript
const coalesce = require("pg-coalesce");

console.log(coalesce(null, "Hello world")); //Hello world
```
