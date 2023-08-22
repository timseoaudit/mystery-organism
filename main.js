// Returns a random DNA base
const returnRandBase = () => { // create a function that returns a random DNA base
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)]; // use Math.random to select a random base from dnaBases
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => { // create a function that returns a random single strand of DNA containing 15 bases
  const newStrand = []; // create an empty array to hold the bases
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase()); // use returnRandBase to generate array of 15 bases 
  }
  return newStrand;
};

//creating factory to easily create multiple strings
const pAequorFactory = (num) => { // create a factory function that returns an object
  let specimenNum = num; // create a specimen number
  let DNA = []; // create an empty array to hold the bases
  for (let i = 0; i < 15; i++) {
    DNA.push(returnRandBase()); // use returnRandBase to generate array of 15 bases
  }
  const mutate = () => { // create a method mutate that randomly selects a base in the object's DNA strand and changes the current base to a different base
    let i = Math.floor(Math.random() * DNA.length); // select a random base
    let newBase = returnRandBase(); // select a new random base
    while (newBase === DNA[i]) { // if the new base is the same as the old base, select a new random base
      newBase = returnRandBase(); // select a new random base
    }
    DNA[i] = newBase; // change the current base to the new base
  };
  const compareDNA = pAequor => { // create a method compareDNA that compares the current pAequor's DNA with another pAequor's DNA
    let count = 0; // create a count variable to hold the number of bases that are the same
    for (let i = 0; i < 15; i++) { // loop through the DNA arrays
      if (DNA[i] === pAequor.DNA[i]) { // if the bases are the same, increment the count variable
        count++; // increment the count variable
      } else {
        continue;
      }
    }
    console.log(`specimen #1 and specimen #2 have ${count/15*100}% DNA in common`); // print the percentage of bases that are the same
  };
  const willLikelySurvive = () => { // create a method willLikelySurvive that returns true if the object's DNA contains at least 60% 'C' or 'G' bases
    let count = 0;
    for (let i = 0; i < 15; i++) { // loop through the DNA arrays
      if (DNA[i] === 'C' || DNA[i] === 'G') { // if the bases are 'C' or 'G', increment the count variable
        count++;
      } else { // if the bases are not 'C' or 'G', continue
        continue;
      }
    }
    if (count / 15 >= 0.6) { // if the percentage of 'C' or 'G' bases is greater than or equal to 60%, return true
      return true;
    } else {
      return false;
    }
  }
  return { // return an object with the following properties and methods
    specimenNum,
    DNA,
    mutate,
    compareDNA,
    willLikelySurvive
  };
};

//creating 30 instances of pAequor that can survive
let survivingInstances = []; // create an empty array to hold the instances that can survive
let i = 0; // create a variable to hold the specimen number
while (survivingInstances.length < 30) { // create a while loop that creates instances of pAequor until there are 30 instances that can survive
  let instance = pAequorFactory(i); // create an instance of pAequor
  if (instance.willLikelySurvive()) { // if the instance can survive, push it to the array
    survivingInstances.push(instance); // push the instance to the array
  }
  i++;
};

console.log(survivingInstances);
// upload to GitHub 

