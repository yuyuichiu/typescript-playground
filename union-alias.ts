type CustomType = number | string

function combine(
  input1: CustomType,
  input2: CustomType,
  resultType = 'as-string'  // The default value also implies string type
  // resultType = 'as-string' | 'as-number'  << Literal Type >>
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  // 
  return resultType === 'as-string' ? result.toString() : +result;
}

console.log(combine("5", 22));
console.log(combine("5", 22, 'as-number'));
