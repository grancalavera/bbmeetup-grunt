 /*jshint devel:true */
define(function (require) {
  'use strict';
  /*
    ======== A Handy Little QUnit Reference ========
    http://docs.jquery.com/QUnit

    Test methods:
      expect(numAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      raises(block, [expected], [message])
  */
  var $ = require('jquery'),
      main =  require('app/bbmetup-grunt'),
      doc = $(document);

  module('Backbone Meetup: grunt', {
    setup: function () {
      this.title = main.title;
      this.doc = doc;
    }
  });

  test('Backbone Meetup: grunt title', function () {
    equal(this.title, 'Backbone Meetup: grunt', 'main.title should be Backbone Meetup: grunt');
  });

});
