const htmlSadrzaj = [
  {
    naziv: "SUCCESS",
    deskripcija: 'Успјело је',
    jezik: "C",
    kod: `#include <stdio.h>;
int main(){
  printf("123");
  return 0;
}`,
  },
  // ... other elements
];

// Convert the array to JSON format
const jsonHtmlSadrzaj = JSON.stringify(htmlSadrzaj);

// Export the JSON string
export default jsonHtmlSadrzaj;
