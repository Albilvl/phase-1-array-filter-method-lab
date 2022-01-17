// Code your solution here




function findMatching (drivers, driver){
    return drivers.filter((match) => match.toLowerCase ()=== driver.toLowerCase() )
}


function fuzzyMatch(drivers, testString) {
    return drivers.filter(
      (match) =>
        match.toLowerCase().indexOf(testString.toLowerCase()) === 0
    );
  }

  function matchName(drivers, teststring){
      return drivers.filter((match)=>match.name === teststring)
  }