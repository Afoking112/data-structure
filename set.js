const allstudents = ['Sola','sola','Sola']
// console.log(allstudents):
const set1 = new Set ()
set1.add('Afolabi')
set1.add( 'Femi')
set1.add({age: 34})
set1.add (null)
// set1. clear()
// setl. delete(null)
console.log(set1.size);
// console. log(set1);
// console. log (typeof (Il)) ;
// new Array ()
for(const item of set1) {
console.log(item);
}