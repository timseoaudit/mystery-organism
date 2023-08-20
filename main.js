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
const pAequorFactory = (num, arr) => {
  let specimenNum = num;
  let DNA = arr;
  //console.log(DNA)
  const mutate = () => { //create muation methode
    let i = Math.floor(Math.random() * 15); //create an index number by selecting a random number between 0 and 15
    let newBase = returnRandBase(); // create a new base to store the valuse of the new DNA 
    while (newBase === DNA[i]) { // compare if DNA at the selected index (i) equals the new base, if so
      newBase = returnRandBase(); // try again
    }
    DNA[i] = newBase; // if not replace DNA[i] with the new value 
  };

  return { // return the values 
    specimenNum,
    DNA,
    mutate
  };
};

