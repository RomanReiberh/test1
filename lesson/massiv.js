const solo =[1,3,5,6,17]
  for(x =0; x <=17; x++
  ){
   console.log(solo[x])
  }






  var num = [4, 2, 8, 6, 12, 5, 21, 24, 20, 22, 8, 7, 6, 9];
  num.map(function(a){
         if(a < 21 && a > 7){
            var arr = [a];
        console.log(arr)
         }
  })


  





  var number= [13,56,12,215,2521,2552,332,12,82,65,93,46,334];
  const min = (values) => values.reduce((x, y) => Math.min(x, y));
console.log(min(number));
 






var words =['Cherry', 'Apple', 'Potato', 'Pillow']
words[3] = 'Banana'
console.log(words)









let carModels = ['Audi', 'Porcshe', 'BMW', 'Mersedec-Benz', 'Lada', 'Volks-Wagen', 'Skoda'];
function LongestWord(words) {
    return words.reduce((longest, currentWord) => {
        return currentWord.length > longest.length ? currentWord : longest;
    }, "");
}
const longestWord = LongestWord(carModels);
console.log(`Самое длинное слово: ${longestWord}`);