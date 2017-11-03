/*
 * Modify the contents of the function below, such that:
 *
 * If we're not hungry, we want to tell ourselves to get back to work.
 * Otherwise, we want to pick something up and eat it in the lab when
 * we've got less than 20 minutes or to try a place nearby if we've
 * got between 20 and 30 minutes. If we have any more time than that,
 * we want to remind ourselves that we're in a bootcamp and that we
 * should reconsider how much time we actually have to spare.
 *
 * hungry is a Boolean, representing if you're hungry or not.
 * availableTime is a Number representing the time you have for lunch,
 * in minutes.
 */


function whatToDoForLunch(hungry, availableTime) {
  if (hungry === false && availableTime < 20) {
    return "Time for a Snack";
  } else if (hungry === false && 20 < availableTime < 30) {
    return "I ll go find a place";
  } else if (hungry) {
    return "keep working";
  }
}
console.log(whatToDoForLunch(false,25));

// ===================================
// This is what I did after bootcamp // It works better than function above
// ====================================

  if (hungry === true && availableTime > 30) {
    console.log("That's a lot of time!");
  } else if (hungry === true && availableTime <= 20) {
    console.log("I'll pick up something to eat in the lab");
  } else if (hungry === true && 21 < availableTime < 30) {
    console.log("I'll try a place nearby");
  } else {
    console.log("Keep working");
  }
}

/*
 * This is some test runner code that's simply calling our whatToDoForLunch function
 * defined above to verify we're making the right decisions. Do not modify it!
 */

console.log("I'm hungry and I have 20 minutes for lunch.");
whatToDoForLunch(true, 20);
console.log("---");

console.log("I'm hungry and I have 50 minutes for lunch.");
whatToDoForLunch(true, 50);
console.log("---");

console.log("I'm not hungry and I have 30 minutes for lunch.");
whatToDoForLunch(false, 30);
console.log("---");

console.log("I'm hungry and I have 15 minutes for lunch.");
whatToDoForLunch(true, 15);