/**
 * Copyright (C) 2018 yanni4night.github.io
 * bubble.js
 *
 * changelog
 * 2018-02-24[15:42:59]:revised
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 1.0.0
 */

/* eslint-disable no-param-reassign */
module.exports = function bubblesort(data) {
  for (let i = data.length - 1; i >= 0; i -= 1) {
    for (let j = 0; j < i; j += 1) {
      if (data[j + 1] < data[j]) {
        const tmp = data[j + 1];
        data[j + 1] = data[j];
        data[j] = tmp;
      }
    }
  }

  return data;
};
