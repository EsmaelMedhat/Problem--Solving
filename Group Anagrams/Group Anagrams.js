let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
function groupAnagrams(strs) {
  const map = new Map();
  for (let str of strs) {
    let sstr = str.split("").sort().join("");
    if (!map.has(sstr)) {
      map.set(sstr, [str]);
    } else {
      map.get(sstr).push(str);
    }
  }
  return Array.from(map.values());
}

console.log(groupAnagrams(strs));
