//1. DONE
    // Declare a variable named submissions that is initialized to an array with the following:

const submissions = [
    {
        name: "Jane",
        score: 95,
        date: "2020-01-24",
        passed: true,    
    },
    {
        name: "Joe",
        score: 77,
        date: "2018-05-14",
        passed: true,
    },
    {
        name: "Jack",
        score: 59,
        date: "2019-07-05",
        passed: false,
    },
    {
        name: "Jill",
        score: 88,
        date: "2020-04-22",
        passed: true,
    }
]
//2. DONE
    // Declare a function named addSubmission
    // ○ Parameter(s): array, newName, newScore, newDate
    //      Functionality: construct an object and push it into the array. The object must
    //      have the same properties as the objects already in the array. Use conditional
    //      statements to set the value for the passed property to true if the score is
    //      greater than or equal to 60 and false otherwise.

function addSubmission(array, newName, newScore, newDate) { 
    let newPassed;
    if (newScore >= 60) {
        newPassed = true;
    } else {
        newPassed = false;
    } 
    let newSubmission = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: newPassed,
    }
    array.push(newSubmission);
}

addSubmission (submissions, "Japril", 91, "2020-11-11");
console.log(submissions);



//3. DONE
    // Declare a function named deleteSubmissionByIndex
    // ○ Parameter(s): array, index
    // ○ Functionality: remove the object from the array at the specified index using the
    // splice method.

function deleteSubmissionByIndex (array, index) {
    array.splice (index, 1);
    console.log(array);
}
deleteSubmissionByIndex (submissions, 2);




//4. DONE
    // 4.Declare a function named deleteSubmissionByName
    // ○ Parameter(s): array, name
    // // ○ Functionality: remove the object from the array that has the provided name.
    // // Incorporate the findIndex method and the splice method.

function deleteSubmissionByName (array, name) {
    let index = array.findIndex((array) => array.name === name);
    array.splice (index, 1)
    console.log(array);
}
deleteSubmissionByName (submissions, 'Jill');



//5. DONE 
    // Declare a function named editSubmission
    // ○ Parameter(s): array, index, score
    // ○ Functionality: update an object’s score in the array at the specified index. Use
    // conditional statements to set the value for the passed property to true if the
    // score is greater than or equal to 60 and false otherwise.
    // hint: use splice

function editSubmission (array, index, score) {
    let newPassed;
    if (score >= 60) {
    newPassed = true;
    } else {
    newPassed = false;
    }
    array[index].score = score;
    array[index].passed = newPassed;

    console.log(array);
}
editSubmission(submissions, 1, 59);



//6.  DONE
    // Declare a function named findSubmissionByName
    // ○ Parameter(s): array, name
    // ○ Functionality: return the object in the array that has the provided name. Use the
    // find method

function findSubmissionByName (array, name) {
    const findByName = array.find((studentName) => studentName.name === name);
    console.log(findByName);
    return findByName;
}
findSubmissionByName (submissions, "Joe");




//7.  DONE
    // Declare a function named findLowestScore
    // ○ Parameter(s): array
    // ○ Functionality: return the object in the array that has the lowest score. Use the
    // forEach method to loop through the whole array.
    // Hint: Keep track of current lowest

function findLowestScore(array) {
    let lowest = null;
    array.forEach(function(object) {
        let Score = object.score;
        if(lowest === null || (lowest.score > object.score)) {
            lowest = object;
        };
    });
    console.log(lowest);
    return lowest;
}
findLowestScore(submissions);




//8. DONE
    // Declare a function named findAverageScore
    // ○ Parameter(s): array
    // ○ Functionality: return the average quiz score. Use a for...of loop

function findAverageScore (array) {
    let totalScore = 0;
    for (const student of array) {
        totalScore += student.score; //(same as totalScore = totalScore + student.score)
    }
    let averageScore = (totalScore / array.length);
    console.log(averageScore);
    return averageScore;
}
findAverageScore(submissions);



//9. DONE
    // Declare a function named filterPassing
    // ○ Parameter(s): array
    // ○ Functionality: return a new array using the filter method. The filter method
    // should find objects in the array that have passing scores.

function filterPassing (array) {
    const filterPassing = array.filter ((array) => array.passed === true);
    console.log(filterPassing);
    return filterPassing;
}
filterPassing(submissions);



//10. DONE  
    // Declare a function named filter90AndAbove
    // ○ Parameter(s): array
    // ○ Functionality: return a new array using the filter method. The filter method
    // should find objects in the array that have scores greater than or equal to 90.

function filter90AndAbove (array) {
    const filter90AndAbove = array.filter ((array) => array.score >= 90);
    console.log(filter90AndAbove);
    return filter90AndAbove;
 }
filter90AndAbove(submissions);

