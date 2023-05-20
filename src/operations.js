const encodeMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
};

function encoder(str) {
  for (let key of Object.keys(encodeMap)) {
    str = str.replaceAll(key, encodeMap[key]);
  }
  return str;
}

export function autoSpace(strArray) {
  let firstIndex = strArray.findIndex((x) => /\S/.test(x));
  let lastIndex = strArray.findLastIndex((x) => /\S/.test(x));

  let conArray = strArray.slice(firstIndex, lastIndex + 1);
  let spaceIndex = conArray[0].search(/\S/);
  if (spaceIndex > 0) {
    return conArray.map((x) => {
      let lineSpaceIndex = x.search(/\S/);
      return x.slice(Math.min(lineSpaceIndex, spaceIndex));
    });
  }
  return conArray;
}

export function encodeArray(strArray) {
  return strArray.map((x) => encoder(x));
}
