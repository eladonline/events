/**
 * @function distanceMeasure
 * @param {Object} el
 * @param {String, Array} side top/right/bottom/left
 * @return {Object, Number} the distance of the element from the side
 */
export const distanceMeasure = (el, sides = 'top') => {
  if (el === null) throw Error('the element is null');

  const viewportOffset = el.getBoundingClientRect();
  if (typeof sides === 'string') {
    return viewportOffset[sides];
  } else if (Array.isArray(sides)) {
    const oSidesDistance = {};
    sides.forEach(side => {
      oSidesDistance[side] = viewportOffset[side];
    });
    return oSidesDistance;
  } else {
    throw Error('sides propery have to be: string/array');
  }
};
