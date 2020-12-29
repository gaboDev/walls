let calls = 0;
let volume = -1;
let iterations = 0;

const heights_array = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const itemsPerGroup = 2;
const length = heights_array.length - 1;
let combinations = [];

getCombinations(heights_array, combinations, 0, length, 0, itemsPerGroup);
console.log(`calls: ${calls}`);
console.log(`iterations: ${iterations}`);
console.log(`volume: ${volume}`);


function calculateVolume(heights, currentCombination) {

    const firstCombinationItem = currentCombination[0];
    const secondCombinationItem = currentCombination[1];

    const currentWallIndex = firstCombinationItem.index;
    const currentWallHeight = firstCombinationItem.wall;

    const nextWallIndex = secondCombinationItem.index;
    const nextWallHeight = secondCombinationItem.wall;

    const distance = nextWallIndex - currentWallIndex;
    const selectedHeight = currentWallHeight > nextWallHeight
                           ? nextWallHeight
                           : currentWallHeight;
    const calculatedVolume = selectedHeight * distance;

    return calculatedVolume > volume ? calculatedVolume : volume;

}

function getCombinations(walls, combinations, start, end, index, itemsPerGroup) {

    calls++;

    if (index === itemsPerGroup){
        volume = calculateVolume(walls, combinations);
        return;
    }

    /***
     * end-i+1 >= itemsPerGroup-index It help us to make sure that includes only 1 item
     * at index will create a combination with pending items
    */
    for (let i = start;
         i <= end && (end - i + 1) >= (itemsPerGroup - index);
         i++)
    {
        iterations++;
        combinations[index] = {
            wall: walls[i],
            index: i
        };
        getCombinations(walls, combinations, i + 1, end, index + 1, itemsPerGroup);
    }

}
