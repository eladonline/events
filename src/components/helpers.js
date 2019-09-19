/**
 * @function distanceMeasure
 * @param {Object} el
 * @param {String, Array} side top/right/bottom/left
 * @return {Object, Number} the distance of the element from the side
 */
export const distanceMeasure = (el, sides = "top") => {
  if (el === null) throw Error("the element is null");

  const viewportOffset = el.getBoundingClientRect();
  if (typeof sides === "string") {
    return viewportOffset[sides];
  } else if (Array.isArray(sides)) {
    const oSidesDistance = {};
    sides.forEach(side => {
      oSidesDistance[side] = viewportOffset[side];
    });
    return oSidesDistance;
  } else {
    throw Error("sides propery have to be: string/array");
  }
};

/**
 * @function strLengthSlicer
 * @argument {string} str the text
 * @argument {number} maxLength number of max chars
 * @argument {string, boolean} dots true = 3 dots || string of how many dots you want at the end of the line || false none
 * @summary cut the string by specified length and add dots at the end
 */
export const strLengthSlicer = (str, maxLength, dots = true) => {
  const strToLong = str.length > maxLength;
  if (strToLong) {
    str = str.slice(0, maxLength);
  }
  if (typeof dots === "string" && strToLong) {
    str = `${str}${dots}`;
  }
  if (dots === true && strToLong) {
    str = `${str}...`;
  }
  return str;
};

export const priceFormatter = number =>
  new Intl.NumberFormat("heb-isr", { style: "currency", currency: "ILS" }).format(
    number
  );
