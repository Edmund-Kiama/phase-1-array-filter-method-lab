// Code your solution here
const findMatching = (drivers, string) => {

    let match =drivers.filter((driver) => 
        driver.toLowerCase() === string.toLowerCase()
      );
      return match;
};

const fuzzyMatch = ( drivers , string) => {
    let match = drivers.filter((driver) => 
        driver.toLowerCase().indexOf(string.toLowerCase()) === 0
    )
    return match;
}

const matchName = ( drivers, string) => {
    let match = drivers.filter((driver) => driver.name === string);
    return match;
}