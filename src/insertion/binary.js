/**
 * Copyright (C) 2018 yanni4night.github.io
 * binary.js
 *
 * changelog
 * 2018-02-24[17:06:55]:revised
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 1.0.0
 */

/* eslint-disable no-param-reassign */
module.exports = function binary(data) {
  for (let i = 1; i < data.length; i += 1) {
    const tmp = data[i];

    let start = 0;
    let end = i - 1;
    let middle;

    // 3/4/6/7  5

    while (end > start) {
      middle = Math.floor((end + start) / 2);
      if (middle === start) {
        break;
      }
      if (tmp > data[middle]) {
        start = middle;
      } else {
        end = middle;
      }
    }

    for (let j = i; j > start; j -= 1) {
      data[j] = data[j - 1];
    }
    data[start] = tmp;
  }

  return data;
};
