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
  radix, bubble, straight, binary,
} = require('../');

/* global it, describe */
describe('distribution', () => {
  describe('#radix', () => {
    fixtures.forEach((fixture) => {
      it(`should sort [${fixture.join()}] in decimalism`, () => {
        assert.deepEqual(radix(fixture), fixture.sort());
      });
      it(`should sort [${fixture.join()}] in hexadecimal`, () => {
        assert.deepEqual(radix(fixture, 16), fixture.sort());
      });
    });
  });
});

describe('exchange', () => {
  describe('#bubble', () => {
    fixtures.forEach((fixture) => {
      it(`should sort [${fixture.join()}]`, () => {
        assert.deepEqual(bubble(fixture), fixture.sort());
      });
    });
  });
});

describe('insertion', () => {
  describe('#straight', () => {
    fixtures.forEach((fixture) => {
      it(`should sort [${fixture.join()}]`, () => {
        assert.deepEqual(straight(fixture), fixture.sort());
      });
    });
  });
  describe('#binary', () => {
    fixtures.forEach((fixture) => {
      it(`should sort [${fixture.join()}]`, () => {
        assert.deepEqual(binary(fixture), fixture.sort());
      });
    });
  });
});
