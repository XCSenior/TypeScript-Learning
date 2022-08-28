var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var wukong = {
    name: 'wukong',
    gender: 0
};
console.log(wukong.gender === Gender.Male); //true
