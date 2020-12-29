let count = 0;
const heights_array = [1, 8, 6, 2, 5, 4, 8, 3, 7];

const volume = maxVolume(heights_array);
console.log(`Volume: ${volume}`);
console.log(`Iterations: ${count}`);

function maxVolume(heights) {
    let volume = -1;
    heights.forEach((currentHeight, currentHeightIndex) => {
        heights.forEach((nestedHeight, nestedHeightIndex) => {
            const distance = nestedHeightIndex - currentHeightIndex;
            const selectedHeight = currentHeight > nestedHeight
                ? nestedHeight
                : currentHeight;
            const calculatedVolume = selectedHeight * distance;
            volume = calculatedVolume > volume ? calculatedVolume : volume;
            count++;
        });
        count++;
    });
    return volume;
}