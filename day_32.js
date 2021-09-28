// invert Hash
// Associative arrays are also called hashes (we'll learn why later).
// Build invertHash (assocArr) to convert hash keys to values, and values to keys.
// Ex: Given {"name": "Zaphod", "charm": "high", "morals": "dicey"}
// Return object {"Zaphod": "name", "high": "charm", "dicey": morals}.

function invertHash (assocArr) {
  for (key in assocArr) {
    var temp = key;
    key = assocArr[key];
    assocArr[key] = temp;
    delete assocArr[temp];
  }

  return assocArr
}

// console.log(invertHash({"name": "Zaphod", "charm": "high", "morals": "dicey"}));
