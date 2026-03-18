let str = "abcabcbb";
const map = new Map();
let res = 0;
let rres = 0;

for (let i = 0; i < str.length; i++) {
  let j = i;

  while (j < str.length) {
    if (!map.has(str[j])) {
      map.set(str[j], j);
      res++;
      j++;
    } else {
      break;
    }
  }

  if (rres < res) {
    rres = res;
  }

  map.clear();
  res = 0;
}

console.log(rres);
