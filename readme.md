## This is a project from codecademy.com Full-Stack Engineer path.

### Credits are given to [codecademy.com](https://codecademy.com).

#### Mysterious Organism

Context: We are part of a research team that has found a new mysterious organism at the bottom of the ocean near hydrothermal vents. We named the organism, Pila aequor (P. aequor), and find that it is only comprised of 15 DNA bases. Our job is to create objects that simulate the DNA of P. aequor for our research team to study.

DNA is comprised of four bases (Adenine, Thymine, Cytosine, and Guanine). 
1. The helper `returnRandBase()` function randomly selects a base and returns the base ('A','T','C', or 'G').

2. `mockUpStrand()` generates an array containing 15 bases to represent a single DNA strand with 15 bases.

3. `pAequorFactory()` is a factory function that takes in an identificaton number (no two organisms should have the same number) and an array of 15 DNA bases and returns an object that contains the properties specimenNum and dna that correspond to the parameters provided.

4. The method `.mutate()` randomly selects a base in the object’s dna property and changes the current base to a different base and returns the object’s dna.

To test the method, I created an instance of pAequor and checked that its .dna changes after calling .mutate() on itself.

5. The method `.compareDNA()` takes in one parameter, another pAequor object.
It compares the current pAequor‘s .dna with the passed in pAequor‘s .dna and computes how many bases are identical and in the same locations and returns the percentage of DNA the two objects have in common.

6. The method `.willLikelySurvive()` returns true if the object’s .dna array contains at least 60% 'C' or 'G' bases. Otherwise, .willLikelySurvive() returns false.

7. The function `create30()` creates 30 instances of pAequor that can survive in their natural environment and returns an array for our team to study later.

8. The method `.complementStrand()` returns the complementary DNA strand. The rules are that 'A's match with 'T's and vice versa. Also, 'C's match with 'G's and vice versa. 

9. The function `function mostRelatedSpecies()` takes in the array of objects and returns the two most related instances of pAequor and the correlation coeffficient.