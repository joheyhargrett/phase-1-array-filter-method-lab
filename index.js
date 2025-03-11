// Code your solution here

const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

function findMatching(drivers, names = "Johey") {
  return drivers.filter(
    (driver) => driver.toLowerCase() === names.toLowerCase()
  );
}

console.log(findMatching(drivers, "Bobby"));



function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

fuzzyMatch(drivers, "Sa");




function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}

