
// You should implement your task here.

module.exports = function towelSort (matrix) {
   let towelArray = [];

    if (matrix == undefined || matrix == "") return towelArray;
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i]);
        if (i % 2 === 0) {
            matrix[i].forEach((element) => {
                towelArray.push(element)
            });
        } else {
            matrix[i].reverse().forEach((element) => {
                towelArray.push(element)
            });
        }
    }

    return towelArray;
}
