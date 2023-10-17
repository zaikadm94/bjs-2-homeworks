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
    const ages = userFilter.map(users => users.age);
    const totalAges = ages.reduce((sum, age) => sum + age, 0);
    const averageAge = totalAges / userFilter.length;
    return averageAge;


}