// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase()); // use returnRandBase to generate array of 15 bases 
  }
  return newStrand;
};

//creating factory to easily create multiple strings
const pAequorFactory = (num) => {
  let specimenNum = num;
  let DNA = [];
  for (let i = 0; i < 15; i++) {
    DNA.push(returnRandBase());
  }
  const mutate = () => {
    let i = Math.floor(Math.random() * DNA.length);
    let newBase = returnRandBase();
    while (newBase === DNA[i]) {
      newBase = returnRandBase();
    }
    DNA[i] = newBase;
  };
  const compareDNA = pAequor => {
    let count = 0;
    for (let i = 0; i < 15; i++) {
      if (DNA[i] === pAequor.DNA[i]) {
        count++;
      } else {
        continue;
      }
    }
    console.log(`specimen #1 and specimen #2 have ${count/15*100}% DNA in common`);
  };
  const willLikelySurvive = () => {
    let count = 0;
    for (let i = 0; i < 15; i++) {
      if (DNA[i] === 'C' || DNA[i] === 'G') {
        count++;
      } else {
        continue;
      }
    }
    if (count / 15 >= 0.6) {
      return true;
    } else {
      return false;
    }
  }
  return {
    specimenNum,
    DNA,
    mutate,
    compareDNA,
    willLikelySurvive
  };
};

//creating 30 instances of pAequor that can survive
let survivingInstances = [];
let i = 0;
while (survivingInstances.length < 30) {
  let instance = pAequorFactory(i);
  if (instance.willLikelySurvive()) {
    survivingInstances.push(instance);
  }
  i++;
};

console.log(survivingInstances);


