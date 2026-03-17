function ValidParentheses(params) {
  params.split(",");
  let arr = [];
  for (let i = 0; i < params.length; i++) {
    if (params[i] === "(" || params[i] === "{" || params[i] === "[") {
      arr.push(params[i]);
    } else if (params[i] === ")" || params[i] === "}" || params[i] === "]")
      if (arr[arr.length - 1] === "(" && params[i] === ")") {
        arr.pop();
      } else if (arr[arr.length - 1] === "{" && params[i] === "}") {
        arr.pop();
      } else if (arr[arr.length - 1] === "[" && params[i] === "]") {
        arr.pop();
      } else {
        return false;
      }
  }
  return arr.length === 0;
}
console.log(ValidParentheses("))))}}}}}}"));
