/**
 * Check every triangle side in range between 1 and 200
 * @param {*} side Triangle side
 */
function checkRange(side) {
    if(side >= 1 && side <= 200){
        return true;
    }

    return false;
}

/**
 * Determine if the three side can form triangle (2 sides > 1 side)
 * @param {*} x the first side of the triangle
 * @param {*} y the second side of the triangle
 * @param {*} z the third side of the triangle
 */
function isTriangle(x, y, z){
    if(x + y > z && x + z > y && y + z > x){
        return true;
    }
    return false;
}

function isRight(x, y, z) {
    return (x*x + y*y === z*z) || (x*x + z*z === y*y) || (y*y + z*z === x*x)
}

function getMatches(x, y, z) {
    let match = 0;
    if(x === y && y === z && x === z) {
        match = 3;
    } else if(x === y || y === z || x === z) {
        match = 2;
    }

    return match;
}

/**
 * Determine the triange type (Equilateral, Isosceles, Scalene, Right, or NotATriangle)
 * @param {*} x the first side of the triangle
 * @param {*} y the second side of the triangle
 * @param {*} z the third side of the triangle
 */
function solve(x, y, z) {
    if(!checkRange(x)) {
        console.log(`Value of ${x} is not in the range of permitted values`);
        return;
    }

    if(!checkRange(y)) {
        console.log(`Value of ${y} is not in the range of permitted values`);
        return;
    }

    if(!checkRange(z)) {
        console.log(`Value of ${z} is not in the range of permitted values`);
        return;
    }

    if(!isTriangle(x, y, z)) {
        return 'NotATriangle';
    }

   if(isTriangle(x, y, z) && getMatches(x, y, z) === 3) {
    return 'Equilateral';
   }

   if(isTriangle(x, y, z) && getMatches(x, y, z) === 2) {
    return 'Isosceles';
   }

   if(isTriangle(x, y, z) && isRight(x, y, z) ) {
    return 'Right';
   }

   if(isTriangle(x, y, z) && getMatches(x, y, z) === 0) {
    return 'Scalene';
   }

   return 'NotATriangle';
}


const sides = [3, 4, 9]; // [3, 4, 5]; // [3, 4, -1]; //[3, 0, 4]; // [0, 3, 4]; // [3, 3, 3]; //    
const result = solve(sides[0], sides[1], sides[2]);
console.log(result);

/*
// checkRange
// const sideArray = [0, 1, 2, 199, 200,201];
// sideArray.forEach(side=>console.log(checkRange(side)));

// isTriangle
// const sides = [3, 4, 9];
// const result = isTriangle(sides[0], sides[1], sides[2]);
// // console.log(sides[0]);
// console.log(result);

// getMatches
// const sides = [3, 3, 4]; // [3, 4, 5]; // [3, 3, 3]; // 
// const result = getMatches(sides[0], sides[1], sides[2]);
// console.log(result);
*/

/*
    const side = 0;
    const result = checkRange(side);
    console.log(result);
*/
