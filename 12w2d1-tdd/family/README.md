# ancestry

This module navigates the ancestry of a person, assuming it looks like this:

```javascript
{
  "name": "Carolus Haverbeke", 
  "sex": "m", 
  "born": 1832, 
  "died": 1905, 
  "father": "Carel Haverbeke", 
  "mother": "Maria van Brussel"
}
```

The `ancestors` function will return an array with all the names of the ancestors for a given person.

The `witnessed` function will only return those ancestors who were alive *during* a particular year.


## Testing

Make sure to `npm install` to get `mocha` and `chai` and then invoke tests by running `npm test`. Curious how this works?  Check the `package.json` file.

All tests can be found in `test/test.js`