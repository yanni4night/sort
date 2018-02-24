/**
 * Copyright (C) 2018 yanni4night.github.io
 * straight.js
 *
 * changelog
 * 2018-02-24[16:09:12]:revised
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 1.0.0
 */

/* eslint-disable no-param-reassign */
module.exports = function straight(data) {
  for (let i = 1; i < data.length; i += 1) {
    const tmp = data[i];
    for (let j = i; j > 0 && data[j - 1] > tmp; j -= 1) {
      data[j] = data[j - 1];
    }
    data[i] = tmp;
  }

  return data;
};
