const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 },
  ],
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 },
  ],
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 },
  ],
};

const config4 = {
  fault: false,
  phases: [],
};

function runSequence(config, cycles) {
  let count = 0;
  if (config.fault === true) {
    return console.log("Faulted phase!");
  }

  while (count < cycles) {
    if (Array.isArray(config.phases) && config.phases.length === 0) {
      console.log("No phases found");
      break;
    } else {
      for (let check of config.phases) {
        if (check.duration <= 0) {
          console.log("Invalid phase detected");
        } else {
          console.log(`Switching to ${check.color} for ${check.duration} s`);
        }
      }
      count++;
    }
  }
}

function generateTimeline(config, cycles) {
  let count = 0;
  let arry = [];
  let total = 0;
  while (count < cycles) {
    for (let save of config.phases) {
      total += save.duration;
      arry.push(total);
    }
    count++;
  }
  return arry;
}


console.log(runSequence(config1, 1));
console.log(runSequence(config3, 2));
console.log(runSequence(config2, 1));
console.log(runSequence(config4, 5));
console.log(runSequence(config4, 5));
console.log(generateTimeline(config1, 1));
