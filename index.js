const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function findMatching(drivers, string){
  let answer = drivers.filter(element => element.toLowerCase() === string.toLowerCase())
 
 return answer;
  }

findMatching( drivers, 'Sammy')
findMatching( drivers, 'Bobby');

function fuzzyMatch(drivers, string) {
  const lengthOfString = string.length;
  return drivers.filter( drivers => drivers.slice(0, lengthOfString) === string)
} 

fuzzyMatch(drivers, 'Sa')

const drivers1 = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];

function matchName(array, value) {
  const answer = array.filter(array => array.name === value)
  return answer;
}

matchName(drivers1, 'Bobby');
