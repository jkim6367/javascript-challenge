// from data.js
var tableData = data.map(function (info) {
    return {
        "datetime": info.datetime,
        "city": info.city,
        "state": info.state.toUpperCase(),
        "country":info.country.toUpperCase(),
        "shape":info.shape,
        "durationMinutes":info.durationMinutes,
        "comments":info.comments
    }
});
console.log(tableData)

var countryUniqueList = [""];
var countryList = tableData.map(function(info) {
    return info.country
});

countryUnique = countryList.filter(UniqueFilter);
console.log(countryUnique);

countryUniqueList = countryUniqueList.concat(countryUnique.sort());
console.log(countryUniqueList)

var stateUniqueList = [{"country":"","state":""}];

