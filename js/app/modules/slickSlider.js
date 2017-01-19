"use strict";
appMakeBeCool.gateway.addClass('SlickSlider', function(properties, $, $window, $document) {
  //PRIVATE VARIABLES
  var _slick = this,
    // default
    _d = {
      // elements
      slider: $('#brandsSlider')
      // prop
      // data
      // classes ans styles
    },
    // properties
    _p = $.extend(_d, properties),
    // global
    _g = {
      // elements

      // prop
      preloaded: false
    },

    _init = function() {
      appMakeBeCool.gateway.base.Class.apply(_slick, [_p]);
      if(!_g.preloaded) {
        return _slick.init();
      }
      _slick.globals.customCreate = function() {
        _config();
        _setup();
        _setBinds();
        _setCustomMethods();
      };
      _slick.create();
    },

    _config = function() {},

    _setup = function() {
      _d.slider.slick({
        slidesToShow: 6,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

    },

    _setBinds = function() {},

    _binds = function() {
      return {};
    },

    _triggers = function(){
      return {};
    },

    _setCustomMethods = function() {
      _slick.globals.customResurrect = function() {};
      _slick.globals.customDestroy = function() {};
    };

  _slick.addMethod('init', function() {
    _slick.bind($window, _slick.globals.classType+'_Init', function(e, data, el) {
      _g.preloaded = true;
      _init();
    });
  });

  _init();
});
