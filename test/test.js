/**
 * Copyright (C) 2018 yanni4night.github.io
 * test.js
 *
 * changelog
 * 2018-02-23[21:02:55]:revised
 * 2018-02-24[15:54:06]:test bubble
 *
 * @author yanni4night@gmail.com
 * @version 1.1.0
 * @since 1.0.0
 */
const assert = require('assert');
const fixtures = require('./fixtures');

const {
  radix, bubble, straight, binary, quick,
} = require('../');

/* global it, describe */
describe('distribution', () => {
  describe('#radix', () => {
    fixtures.forEach((fixture) => {
      const expected = fixture.slice().sort();

      it(`should sort [${fixture}] in decimalism`, () => {
        assert.deepEqual(radix(fixture.slice()), expected);
      });
      it(`should sort [${fixture}] in hexadecimal`, () => {
        assert.deepEqual(radix(fixture.slice(), 16), expected);
      });
    });
  });
});

describe('exchange', () => {
  describe('#bubble', () => {
    fixtures.forEach((fixture) => {
      const expected = fixture.slice().sort();

      it(`should sort [${fixture}]`, () => {
        assert.deepEqual(bubble(fixture.slice()), expected);
      });
    });
  });
  describe('#quick', () => {
    fixtures.forEach((fixture) => {
      const expected = fixture.slice().sort();

      it(`should sort [${fixture}]`, () => {
        assert.deepEqual(quick(fixture.slice()), expected);
      });
    });
  });
});

describe('insertion', () => {
  describe('#straight', () => {
    fixtures.forEach((fixture) => {
      const expected = fixture.slice().sort();

      it(`should sort [${fixture}]`, () => {
        assert.deepEqual(straight(fixture.slice()), expected);
      });
    });
  });
  describe('#binary', () => {
    fixtures.forEach((fixture) => {
      const expected = fixture.slice().sort();

      it(`should sort [${fixture}]`, () => {
        assert.deepEqual(binary(fixture.slice()), expected);
      });
    });
  });
});
