/* !
* bindings/inputmask.binding.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2019 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 4.0.9
*/

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery', '../inputmask', '../global/window'], factory)
  } else if (typeof exports === 'object') {
    module.exports = factory(require('jquery'), require('../inputmask'), require('../global/window'))
  } else {
    factory(jQuery, window.Inputmask, window)
  }
}(($, Inputmask, window) => {
  $(window.document).ajaxComplete((event, xmlHttpRequest, ajaxOptions) => {
    if ($.inArray('html', ajaxOptions.dataTypes) !== -1) {
      $('.inputmask, [data-inputmask], [data-inputmask-mask], [data-inputmask-alias]').each((ndx, lmnt) => {
        if (lmnt.inputmask === undefined) {
          Inputmask().mask(lmnt)
        }
      })
    }
  }).ready(() => {
    $('.inputmask, [data-inputmask], [data-inputmask-mask], [data-inputmask-alias]').each((ndx, lmnt) => {
      if (lmnt.inputmask === undefined) {
        Inputmask().mask(lmnt)
      }
    })
  })
}))
