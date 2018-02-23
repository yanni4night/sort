/**
 * Copyright (C) 2018 yanni4night.github.io
 * radix.js
 *
 * changelog
 * 2018-02-23[20:45:24]:revised
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 1.0.0
 * @see http://www.cs.usfca.edu/~galles/visualization/RadixSort.html
 */

/**
 * Sort an array.
 *
 * @param  {Array} data  Origin array
 * @param  {Number} RADIX radix
 * @return {Array} Origin array
 */
module.exports = function radixsort(data, RADIX = 10) {
  // data: [9, 6, 7, 2, 1, 6, 4, 5, 3]

  const tmp = new Array(data.length);
  const count = new Array(RADIX);

  let maxbit = 1;
  // 9
  let maxData = Math.max(...data);

  // e.g.
  // 0x7ab => 3
  // 1963 => 4
  // maxbit:1
  while (maxData >= RADIX) {
    maxData /= RADIX;
    maxbit += 1;
  }

  for (let i = 1, radix = 1; i <= maxbit; i += 1, radix *= RADIX) {
    // count: [0,0,0,0,0,0,0,0,0,0]
    for (let j = 1; j < RADIX; j += 1) {
      count[j] = 0;
    }

    // count numbers on that bit
    // count: [1,1,1,1,1,1,1,1,1,1]
    for (let j = 0; j < data.length; j += 1) {
      const k = Math.floor((data[j] / radix) % RADIX);
      count[k] += 1;
    }

    // calculate the exact position of each number
    // count: [1,2,3,4,5,6,7,8,9,10]
    for (let j = 1; j < RADIX; j += 1) {
      count[j] += count[j - 1];
    }

    // put each number to the exact position
    // j:9, data[j]:3, tmp: [0,0,0,3,0,0,0,0,0,0]
    // j:8, data[j]:1, tmp: [0,1,0,3,0,0,0,0,0,0]
    // j:7, data[j]:5, tmp: [0,1,0,3,0,5,0,0,0,0]
    // j:6, data[j]:4, tmp: [0,1,0,3,4,5,0,0,0,0]
    // j:5, data[j]:8, tmp: [0,1,0,3,4,5,0,0,8,0]
    // j:4, data[j]:0, tmp: [0,1,0,3,4,5,0,0,8,0]
    // j:3, data[j]:2, tmp: [0,1,2,3,4,5,0,0,8,0]
    // j:2, data[j]:7, tmp: [0,1,2,3,4,5,0,7,8,0]
    // j:1, data[j]:6, tmp: [0,1,2,3,4,5,6,7,8,0]
    // j:0, data[j]:9, tmp: [0,1,2,3,4,5,6,7,8,9]
    for (let j = data.length - 1; j >= 0; j -= 1) {
      const k = Math.floor((data[j] / radix) % RADIX);
      tmp[count[k] - 1] = data[j];
      count[k] -= 1;
    }

    // copy back to origin
    data.splice(0, data.length, ...tmp);
  }

  return data;
};
