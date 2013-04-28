/*
 * bbmetup-grunt: application bootstrap.
 * https://github.com/grancalavera/bbmetup-grunt
 *
 * Copyright (c) 2013 Leon Coto
 * Licensed under the MIT license.
 */
;(function () {
  'use strict';

  requirejs.config({
    urlArgs:'bust=' + new Date().getTime(),
    baseUrl: 'js/lib',
    paths: {
      app: '../app'
    },
    // http://requirejs.org/docs/api.html#config-shim
    shim: {
    }
  });

  requirejs(['app/bbmetup-grunt']);
})();
