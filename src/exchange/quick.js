/**
 * Copyright (C) 2018 baidu.com
 * quick.js
 *
 * changelog
 * 2018-02-26[20:56:18]:revised
 *
 * @author yinyong02@baidu.com
 * @version 1.0.0
 * @since 1.0.0
 */

/* eslint-disable no-param-reassign */
module.exports = function quicksort(data, left, right) {
  if (arguments.length === 1) {
    left = 0;
    right = data.length - 1;
  }

  if (left >= right) {
    return data;
  }

  const temp = data[left];
  let p = left;
  let i = left;
  let j = right;

  while (i <= j) {
    while (data[j] >= temp && j >= p) { j -= 1; }
    if (j >= p) {
      data[p] = data[j];
      p = j;
    }

    while (data[i] <= temp && i <= p) { i += 1; }
    if (i <= p) {
      data[p] = data[i];
      p = i;
    }
  }
  data[p] = temp;
  if (p - left > 1) {
    quicksort(data, left, p - 1);
  }
  if (right - p > 1) {
    quicksort(data, p + 1, right);
  }

  return data;
};
