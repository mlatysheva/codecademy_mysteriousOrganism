// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  // Create multiple objects of Pila aequor
  const pAequorFactory = (num, array) => {
    return {
      specimenNum: num,
      dna: array,
  
      // Randomly select a base and change it, return the new dna
      mutate(array) {
        let indexRandom = Math.floor(Math.random()* array.length);
        let baseRandom = array[indexRandom];
        switch(baseRandom) {
          case 'A': 
            baseRandom = ['T', 'C', 'G'][Math.floor(Math.random() * 3)];
            break;
          case 'T':
            baseRandom = ['A', 'C', 'G'][Math.floor(Math.random() * 3)];
            break;
          case 'C': 
            baseRandom = ['A', 'T', 'G'][Math.floor(Math.random() * 3)];
            break;
          case 'G':
            baseRandom = ['A', 'C', 'T'][Math.floor(Math.random() * 3)];
            break;
          default:
            console.log('The selected base is invalid');
            break;
        }
        array[indexRandom] = baseRandom;
        return array;
      },
  
      // Compare two dna and return the percentage of similarities
      compareDNA(pAequorToCompare) {
        let lengthToCompare = this.dna.length;
        let counter = 0;
        if (lengthToCompare !== this.dna.length) {
          return 'The lengths do not match';
        }
        this['dna'].forEach((base, index) => {
          if (base === pAequorToCompare[index]) {
            counter +=1;
            return counter;
          }
        })
        let percentage = (counter * 100 / lengthToCompare);
        return percentage;
      },
      // Calculate the chances of survival
      willLikelySurvive() {
        let counter = 0;
        this.dna.forEach(base => {
          if (base === 'C' || base === 'G') {
            counter +=1;
          };
          return counter;
        })
        let percentage = (counter * 100 / this.dna.length).toFixed(0);
        if (percentage >= 60){
          return true;
        } else return false;
      },
  
      // Return a complementary DNA strand. A matches T and C matches G and vice versa
      complementStrand(strand) {
        let compStrand = [];
        strand.forEach(base => {
          switch(base) {
            case 'A': 
              base = 'T';
              compStrand.push(base);
              break;
            case 'T': 
              base = 'A';
              compStrand.push(base);
              break;
            case 'C': 
              base = 'G';
              compStrand.push(base);
              break;
            case 'G': 
              base = 'C';
              compStrand.push(base);
              break;
          }
          return compStrand;
        })
        return compStrand;
      }
    }
  }
  
  const newSpecie = pAequorFactory(34656, ['A', 'C', 'G', 'T', 'C', 'A', 'T', 'A', 'G', 'T', 'C', 'G', 'A', 'C', 'G']);
  console.log(newSpecie);
  console.log(newSpecie.mutate(newSpecie.dna));
  
  const newSpecie2 = pAequorFactory(34658, ['G', 'C', 'G', 'T', 'A', 'A', 'T', 'A', 'A', 'T', 'C', 'G', 'A', 'T', 'G']);
  
  console.log(`The similiarities are ${newSpecie.compareDNA(newSpecie2.dna)}%.`);
  console.log(`The similiarities are ${newSpecie.compareDNA(newSpecie.dna)}%.`);
  
  console.log(newSpecie.willLikelySurvive());
  
// Create 30 instancees of pAequor that can survive

function create30() {
    let pAequorArray = [];
    while (pAequorArray.length < 31) {
        const specie = pAequorFactory((Math.floor(Math.random() * 300)), mockUpStrand());
        if (specie.willLikelySurvive() === true) {
        pAequorArray.push(specie);
        }
    } return pAequorArray;
}
let pAequorArray1 = create30();
  
// Test complementStrand()
console.log(`The original strand is ${newSpecie2['dna']} and the complement strand is ${newSpecie2.complementStrand(newSpecie2['dna'])}`);
  
// Find the two most related instances of pAequor
function mostRelatedSpecies(pAequorArray) { 
    let maxCorrelation = 0;
    let currentCorrelation;
    let currentBase;
    let nextBase;
    let oneBase;
    let otherBase;
    for (let i = 0; i < pAequorArray.length-1; i++) {
        currentBase = pAequorArray[i].dna;
        nextBase = pAequorArray[i+1].dna;
        currentCorrelation = pAequorArray[i].compareDNA(pAequorArray[i+1].dna);
        if (currentCorrelation > maxCorrelation) {
            maxCorrelation = currentCorrelation;
            oneBase = pAequorArray[i].dna;
            otherBase = pAequorArray[i+1].dna;
        }
    }
    return [maxCorrelation, oneBase, otherBase];
}
// Test maxCorrelation
let [maxCorrelation, oneBase, otherBase] = mostRelatedSpecies(pAequorArray1);
console.log(`The maximum correlation is ${maxCorrelation.toFixed(0)}, between the following species: ${oneBase} and ${otherBase}`);