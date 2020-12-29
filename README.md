### Running files
> `node original.js`

> `node refactored.js`

### Files

`original.js` initial approach with nested loops.

`refactored.js` new approach file.

### Approach: Recursive and fixed array items

The approach is to use recursion instead of nested loops. 

We're going to calculate all possible combinations of the walls array, the `itemsPerGroup` const is used 
to define the amount of items per combination, for this case it will be 2 items.

The const `combinations` is a temporary array which is defined to store the combinations for each wall.
We're going to start from 0 index, then we fix elements to this index and call recursively the `getCombinations` function
to handle pending indexes.

For example:

We have the array of walls:
`[1, 8, 6, 2, 5, 4, 8, 3, 7]`

First of all, we take the wall with height 1, then an object (with current height and index) is created, we're going to use this data later to calculate volume.
Then we upgrade index and start value and then call recursively `getCombinations` function.

If the amount of elements stored inside combinations array are equals to `itemsPerGroup` that means we got a new combinations, only then we can calculate the volume for that combination. 