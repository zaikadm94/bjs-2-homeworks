function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    return arr1.every((element, index) => element === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
    const userFilter = users.filter(user => user.gender === gender);
    if (userFilter.length === 0) {
        return 0;
    }

    const totalAges = userFilter.reduce((acc, curr) => acc + curr.age, 0);
    return totalAges / userFilter.length;


}