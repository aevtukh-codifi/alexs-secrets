(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./assets/js/theme/product.js":
/*!************************************!*\
  !*** ./assets/js/theme/product.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Product; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _product_reviews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product/reviews */ "./assets/js/theme/product/reviews.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _product_video_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/video-gallery */ "./assets/js/theme/product/video-gallery.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 Import all product specific js
 */








var Product = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Product, _PageManager);

  function Product(context) {
    var _this;

    _this = _PageManager.call(this, context) || this;
    _this.url = window.location.href;
    _this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
    _this.$bulkPricingLink = $('[data-reveal-id="modal-bulk-pricing"]');
    _this.reviewModal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_6__["default"])('#modal-review-form')[0];
    return _this;
  }

  var _proto = Product.prototype;

  _proto.onReady = function onReady() {
    var _this2 = this;

    // Listen for foundation modal close events to sanitize URL after review.
    $(document).on('close.fndtn.reveal', function () {
      if (_this2.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
        window.history.replaceState(null, document.title, window.location.pathname);
      }
    });
    var validator; // Init collapsible

    Object(_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["default"])();
    this.productDetails = new _common_product_details__WEBPACK_IMPORTED_MODULE_3__["default"]($('.productView'), this.context, window.BCData.product_attributes);
    this.productDetails.setProductVariant();
    Object(_product_video_gallery__WEBPACK_IMPORTED_MODULE_4__["default"])();
    this.bulkPricingHandler();
    var $reviewForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["classifyForm"])('.writeReview-form');
    if ($reviewForm.length === 0) return;
    var review = new _product_reviews__WEBPACK_IMPORTED_MODULE_1__["default"]({
      $reviewForm: $reviewForm
    });
    $('body').on('click', '[data-reveal-id="modal-review-form"]', function () {
      validator = review.registerValidation(_this2.context);

      _this2.ariaDescribeReviewInputs($reviewForm);
    });
    $reviewForm.on('submit', function () {
      if (validator) {
        validator.performCheck();
        return validator.areAll('valid');
      }

      return false;
    });
    this.productReviewHandler();
    this.createBrandInfo();
  };

  _proto.createBrandInfo = function createBrandInfo() {
    var productBrand = this.context.productBrand;
    var token = this.context.token;
    var serverData = '';
    fetch('/graphql', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + token
      },
      body: JSON.stringify({
        query: "\n                query MyFirstQuery {\n                site {\n                        brands {\n                            edges {\n                                node {\n                                    name,\n                                    defaultImage {\n                                        urlOriginal,\n                                        altText\n                                    }\n                                    seo {\n                                        metaDescription \n                                    }\n                                }\n                            }\n                        }\n                    }\n                }\n                "
      })
    }).then(function (res) {
      return res.json();
    }).then(function (json) {
      var _json$data, _json$data$site, _json$data$site$brand, _brandInfo$, _brandInfo$$node, _brandInfo$$node$defa, _brandInfo$2, _brandInfo$2$node, _brandInfo$2$node$def, _brandInfo$3, _brandInfo$3$node, _brandInfo$3$node$seo;

      serverData = json == null ? void 0 : (_json$data = json.data) == null ? void 0 : (_json$data$site = _json$data.site) == null ? void 0 : (_json$data$site$brand = _json$data$site.brands) == null ? void 0 : _json$data$site$brand.edges;
      var brandInfo = serverData.filter(function (item) {
        var _item$node;

        return (item == null ? void 0 : (_item$node = item.node) == null ? void 0 : _item$node.name) == productBrand;
      });
      var brandImg = document.createElement('img');
      brandImg.setAttribute('src', "" + ((_brandInfo$ = brandInfo[0]) == null ? void 0 : (_brandInfo$$node = _brandInfo$.node) == null ? void 0 : (_brandInfo$$node$defa = _brandInfo$$node.defaultImage) == null ? void 0 : _brandInfo$$node$defa.urlOriginal));
      brandImg.setAttribute('alt', "" + ((_brandInfo$2 = brandInfo[0]) == null ? void 0 : (_brandInfo$2$node = _brandInfo$2.node) == null ? void 0 : (_brandInfo$2$node$def = _brandInfo$2$node.defaultImage) == null ? void 0 : _brandInfo$2$node$def.altText));
      var imgContainer = document.getElementById('brand-img');
      imgContainer.append(brandImg);
      var brandDescription = document.createElement('p');
      brandDescription.innerHTML = "" + ((_brandInfo$3 = brandInfo[0]) == null ? void 0 : (_brandInfo$3$node = _brandInfo$3.node) == null ? void 0 : (_brandInfo$3$node$seo = _brandInfo$3$node.seo) == null ? void 0 : _brandInfo$3$node$seo.metaDescription);
      var brandContainer = document.getElementById('brand-description');
      brandContainer.append(brandDescription);
    });
  };

  _proto.ariaDescribeReviewInputs = function ariaDescribeReviewInputs($form) {
    $form.find('[data-input]').each(function (_, input) {
      var $input = $(input);
      var msgSpanId = $input.attr('name') + "-msg";
      $input.siblings('span').attr('id', msgSpanId);
      $input.attr('aria-describedby', msgSpanId);
    });
  };

  _proto.productReviewHandler = function productReviewHandler() {
    if (this.url.indexOf('#write_review') !== -1) {
      this.$reviewLink.trigger('click');
    }
  };

  _proto.bulkPricingHandler = function bulkPricingHandler() {
    if (this.url.indexOf('#bulk_pricing') !== -1) {
      this.$bulkPricingLink.trigger('click');
    }
  };

  return Product;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/product/video-gallery.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/product/video-gallery.js ***!
  \**************************************************/
/*! exports provided: VideoGallery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoGallery", function() { return VideoGallery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return videoGallery; });
var VideoGallery = /*#__PURE__*/function () {
  function VideoGallery($element) {
    this.$player = $element.find('[data-video-player]');
    this.$videos = $element.find('[data-video-item]');
    this.currentVideo = {};
    this.bindEvents();
  }

  var _proto = VideoGallery.prototype;

  _proto.selectNewVideo = function selectNewVideo(e) {
    e.preventDefault();
    var $target = $(e.currentTarget);
    this.currentVideo = {
      id: $target.data('videoId'),
      $selectedThumb: $target
    };
    this.setMainVideo();
    this.setActiveThumb();
  };

  _proto.setMainVideo = function setMainVideo() {
    this.$player.attr('src', "//www.youtube.com/embed/" + this.currentVideo.id);
  };

  _proto.setActiveThumb = function setActiveThumb() {
    this.$videos.removeClass('is-active');
    this.currentVideo.$selectedThumb.addClass('is-active');
  };

  _proto.bindEvents = function bindEvents() {
    this.$videos.on('click', this.selectNewVideo.bind(this));
  };

  return VideoGallery;
}();
function videoGallery() {
  var pluginKey = 'video-gallery';
  var $videoGallery = $("[data-" + pluginKey + "]");
  $videoGallery.each(function (index, element) {
    var $el = $(element);
    var isInitialized = $el.data(pluginKey) instanceof VideoGallery;

    if (isInitialized) {
      return;
    }

    $el.data(pluginKey, new VideoGallery($el));
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC92aWRlby1nYWxsZXJ5LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3QiLCJjb250ZXh0IiwidXJsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiJHJldmlld0xpbmsiLCIkIiwiJGJ1bGtQcmljaW5nTGluayIsInJldmlld01vZGFsIiwibW9kYWxGYWN0b3J5Iiwib25SZWFkeSIsImRvY3VtZW50Iiwib24iLCJpbmRleE9mIiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsInRpdGxlIiwicGF0aG5hbWUiLCJ2YWxpZGF0b3IiLCJjb2xsYXBzaWJsZUZhY3RvcnkiLCJwcm9kdWN0RGV0YWlscyIsIlByb2R1Y3REZXRhaWxzIiwiQkNEYXRhIiwicHJvZHVjdF9hdHRyaWJ1dGVzIiwic2V0UHJvZHVjdFZhcmlhbnQiLCJ2aWRlb0dhbGxlcnkiLCJidWxrUHJpY2luZ0hhbmRsZXIiLCIkcmV2aWV3Rm9ybSIsImNsYXNzaWZ5Rm9ybSIsImxlbmd0aCIsInJldmlldyIsIlJldmlldyIsInJlZ2lzdGVyVmFsaWRhdGlvbiIsImFyaWFEZXNjcmliZVJldmlld0lucHV0cyIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsInByb2R1Y3RSZXZpZXdIYW5kbGVyIiwiY3JlYXRlQnJhbmRJbmZvIiwicHJvZHVjdEJyYW5kIiwidG9rZW4iLCJzZXJ2ZXJEYXRhIiwiZmV0Y2giLCJtZXRob2QiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInF1ZXJ5IiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwic2l0ZSIsImJyYW5kcyIsImVkZ2VzIiwiYnJhbmRJbmZvIiwiZmlsdGVyIiwiaXRlbSIsIm5vZGUiLCJuYW1lIiwiYnJhbmRJbWciLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiZGVmYXVsdEltYWdlIiwidXJsT3JpZ2luYWwiLCJhbHRUZXh0IiwiaW1nQ29udGFpbmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmQiLCJicmFuZERlc2NyaXB0aW9uIiwiaW5uZXJIVE1MIiwic2VvIiwibWV0YURlc2NyaXB0aW9uIiwiYnJhbmRDb250YWluZXIiLCIkZm9ybSIsImZpbmQiLCJlYWNoIiwiXyIsImlucHV0IiwiJGlucHV0IiwibXNnU3BhbklkIiwiYXR0ciIsInNpYmxpbmdzIiwidHJpZ2dlciIsIlBhZ2VNYW5hZ2VyIiwiVmlkZW9HYWxsZXJ5IiwiJGVsZW1lbnQiLCIkcGxheWVyIiwiJHZpZGVvcyIsImN1cnJlbnRWaWRlbyIsImJpbmRFdmVudHMiLCJzZWxlY3ROZXdWaWRlbyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIiR0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCIkc2VsZWN0ZWRUaHVtYiIsInNldE1haW5WaWRlbyIsInNldEFjdGl2ZVRodW1iIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImJpbmQiLCJwbHVnaW5LZXkiLCIkdmlkZW9HYWxsZXJ5IiwiaW5kZXgiLCJlbGVtZW50IiwiJGVsIiwiaXNJbml0aWFsaXplZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJBLE87OztBQUNqQixtQkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUNqQixvQ0FBTUEsT0FBTjtBQUNBLFVBQUtDLEdBQUwsR0FBV0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUEzQjtBQUNBLFVBQUtDLFdBQUwsR0FBbUJDLENBQUMsQ0FBQyxzQ0FBRCxDQUFwQjtBQUNBLFVBQUtDLGdCQUFMLEdBQXdCRCxDQUFDLENBQUMsdUNBQUQsQ0FBekI7QUFDQSxVQUFLRSxXQUFMLEdBQW1CQyw2REFBWSxDQUFDLG9CQUFELENBQVosQ0FBbUMsQ0FBbkMsQ0FBbkI7QUFMaUI7QUFN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c291cmNlc0NvbnRlbnQiOlsiLypcbiBJbXBvcnQgYWxsIHByb2R1Y3Qgc3BlY2lmaWMganNcbiAqL1xuaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCBSZXZpZXcgZnJvbSAnLi9wcm9kdWN0L3Jldmlld3MnO1xuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSBmcm9tICcuL2NvbW1vbi9jb2xsYXBzaWJsZSc7XG5pbXBvcnQgUHJvZHVjdERldGFpbHMgZnJvbSAnLi9jb21tb24vcHJvZHVjdC1kZXRhaWxzJztcbmltcG9ydCB2aWRlb0dhbGxlcnkgZnJvbSAnLi9wcm9kdWN0L3ZpZGVvLWdhbGxlcnknO1xuaW1wb3J0IHsgY2xhc3NpZnlGb3JtIH0gZnJvbSAnLi9jb21tb24vdXRpbHMvZm9ybS11dGlscyc7XG5pbXBvcnQgbW9kYWxGYWN0b3J5IGZyb20gJy4vZ2xvYmFsL21vZGFsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLnVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICB0aGlzLiRyZXZpZXdMaW5rID0gJCgnW2RhdGEtcmV2ZWFsLWlkPVwibW9kYWwtcmV2aWV3LWZvcm1cIl0nKTtcbiAgICAgICAgdGhpcy4kYnVsa1ByaWNpbmdMaW5rID0gJCgnW2RhdGEtcmV2ZWFsLWlkPVwibW9kYWwtYnVsay1wcmljaW5nXCJdJyk7XG4gICAgICAgIHRoaXMucmV2aWV3TW9kYWwgPSBtb2RhbEZhY3RvcnkoJyNtb2RhbC1yZXZpZXctZm9ybScpWzBdO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIC8vIExpc3RlbiBmb3IgZm91bmRhdGlvbiBtb2RhbCBjbG9zZSBldmVudHMgdG8gc2FuaXRpemUgVVJMIGFmdGVyIHJldmlldy5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2Nsb3NlLmZuZHRuLnJldmVhbCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnVybC5pbmRleE9mKCcjd3JpdGVfcmV2aWV3JykgIT09IC0xICYmIHR5cGVvZiB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgZG9jdW1lbnQudGl0bGUsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCB2YWxpZGF0b3I7XG5cbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZVxuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcblxuICAgICAgICB0aGlzLnByb2R1Y3REZXRhaWxzID0gbmV3IFByb2R1Y3REZXRhaWxzKCQoJy5wcm9kdWN0VmlldycpLCB0aGlzLmNvbnRleHQsIHdpbmRvdy5CQ0RhdGEucHJvZHVjdF9hdHRyaWJ1dGVzKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0RGV0YWlscy5zZXRQcm9kdWN0VmFyaWFudCgpO1xuXG4gICAgICAgIHZpZGVvR2FsbGVyeSgpO1xuXG4gICAgICAgIHRoaXMuYnVsa1ByaWNpbmdIYW5kbGVyKCk7XG5cbiAgICAgICAgY29uc3QgJHJldmlld0Zvcm0gPSBjbGFzc2lmeUZvcm0oJy53cml0ZVJldmlldy1mb3JtJyk7XG5cbiAgICAgICAgaWYgKCRyZXZpZXdGb3JtLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHJldmlldyA9IG5ldyBSZXZpZXcoeyAkcmV2aWV3Rm9ybSB9KTtcblxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLXJldmVhbC1pZD1cIm1vZGFsLXJldmlldy1mb3JtXCJdJywgKCkgPT4ge1xuICAgICAgICAgICAgdmFsaWRhdG9yID0gcmV2aWV3LnJlZ2lzdGVyVmFsaWRhdGlvbih0aGlzLmNvbnRleHQpO1xuICAgICAgICAgICAgdGhpcy5hcmlhRGVzY3JpYmVSZXZpZXdJbnB1dHMoJHJldmlld0Zvcm0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAkcmV2aWV3Rm9ybS5vbignc3VibWl0JywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbGlkYXRvcikge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnByb2R1Y3RSZXZpZXdIYW5kbGVyKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlQnJhbmRJbmZvICgpO1xuICAgIH1cbiAgICBcbiAgICBjcmVhdGVCcmFuZEluZm8gKCkge1xuICAgICAgICB2YXIgcHJvZHVjdEJyYW5kID0gdGhpcy5jb250ZXh0LnByb2R1Y3RCcmFuZFxuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmNvbnRleHQudG9rZW47XG4gICAgICAgIHZhciBzZXJ2ZXJEYXRhID0gJydcblxuICAgICAgICBmZXRjaCgnL2dyYXBocWwnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBxdWVyeTogYFxuICAgICAgICAgICAgICAgIHF1ZXJ5IE15Rmlyc3RRdWVyeSB7XG4gICAgICAgICAgICAgICAgc2l0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmFuZHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmxPcmlnaW5hbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHRUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFEZXNjcmlwdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKGpzb24gPT4geyBcbiAgICAgICAgICAgIHNlcnZlckRhdGEgPSBqc29uPy5kYXRhPy5zaXRlPy5icmFuZHM/LmVkZ2VzO1xuICAgICAgICAgICAgY29uc3QgYnJhbmRJbmZvID0gc2VydmVyRGF0YS5maWx0ZXIoaXRlbSA9PiBpdGVtPy5ub2RlPy5uYW1lID09IHByb2R1Y3RCcmFuZCk7XG4gICAgICAgICAgICB2YXIgYnJhbmRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGJyYW5kSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgYCR7YnJhbmRJbmZvWzBdPy5ub2RlPy5kZWZhdWx0SW1hZ2U/LnVybE9yaWdpbmFsfWApO1xuICAgICAgICAgICAgYnJhbmRJbWcuc2V0QXR0cmlidXRlKCdhbHQnLGAke2JyYW5kSW5mb1swXT8ubm9kZT8uZGVmYXVsdEltYWdlPy5hbHRUZXh0fWApO1xuICAgICAgICAgICAgdmFyIGltZ0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdicmFuZC1pbWcnKTtcbiAgICAgICAgICAgIGltZ0NvbnRhaW5lci5hcHBlbmQoYnJhbmRJbWcpO1xuICAgICAgICAgICAgdmFyIGJyYW5kRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBicmFuZERlc2NyaXB0aW9uLmlubmVySFRNTCA9IGAke2JyYW5kSW5mb1swXT8ubm9kZT8uc2VvPy5tZXRhRGVzY3JpcHRpb259YDtcbiAgICAgICAgICAgIHZhciBicmFuZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdicmFuZC1kZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgYnJhbmRDb250YWluZXIuYXBwZW5kKGJyYW5kRGVzY3JpcHRpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhcmlhRGVzY3JpYmVSZXZpZXdJbnB1dHMoJGZvcm0pIHtcbiAgICAgICAgJGZvcm0uZmluZCgnW2RhdGEtaW5wdXRdJykuZWFjaCgoXywgaW5wdXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRpbnB1dCA9ICQoaW5wdXQpO1xuICAgICAgICAgICAgY29uc3QgbXNnU3BhbklkID0gYCR7JGlucHV0LmF0dHIoJ25hbWUnKX0tbXNnYDtcblxuICAgICAgICAgICAgJGlucHV0LnNpYmxpbmdzKCdzcGFuJykuYXR0cignaWQnLCBtc2dTcGFuSWQpO1xuICAgICAgICAgICAgJGlucHV0LmF0dHIoJ2FyaWEtZGVzY3JpYmVkYnknLCBtc2dTcGFuSWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm9kdWN0UmV2aWV3SGFuZGxlcigpIHtcbiAgICAgICAgaWYgKHRoaXMudXJsLmluZGV4T2YoJyN3cml0ZV9yZXZpZXcnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuJHJldmlld0xpbmsudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJ1bGtQcmljaW5nSGFuZGxlcigpIHtcbiAgICAgICAgaWYgKHRoaXMudXJsLmluZGV4T2YoJyNidWxrX3ByaWNpbmcnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuJGJ1bGtQcmljaW5nTGluay50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFZpZGVvR2FsbGVyeSB7XG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy4kcGxheWVyID0gJGVsZW1lbnQuZmluZCgnW2RhdGEtdmlkZW8tcGxheWVyXScpO1xuICAgICAgICB0aGlzLiR2aWRlb3MgPSAkZWxlbWVudC5maW5kKCdbZGF0YS12aWRlby1pdGVtXScpO1xuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlbyA9IHt9O1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBzZWxlY3ROZXdWaWRlbyhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgIHRoaXMuY3VycmVudFZpZGVvID0ge1xuICAgICAgICAgICAgaWQ6ICR0YXJnZXQuZGF0YSgndmlkZW9JZCcpLFxuICAgICAgICAgICAgJHNlbGVjdGVkVGh1bWI6ICR0YXJnZXQsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zZXRNYWluVmlkZW8oKTtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVUaHVtYigpO1xuICAgIH1cblxuICAgIHNldE1haW5WaWRlbygpIHtcbiAgICAgICAgdGhpcy4kcGxheWVyLmF0dHIoJ3NyYycsIGAvL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3RoaXMuY3VycmVudFZpZGVvLmlkfWApO1xuICAgIH1cblxuICAgIHNldEFjdGl2ZVRodW1iKCkge1xuICAgICAgICB0aGlzLiR2aWRlb3MucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlby4kc2VsZWN0ZWRUaHVtYi5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kdmlkZW9zLm9uKCdjbGljaycsIHRoaXMuc2VsZWN0TmV3VmlkZW8uYmluZCh0aGlzKSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2aWRlb0dhbGxlcnkoKSB7XG4gICAgY29uc3QgcGx1Z2luS2V5ID0gJ3ZpZGVvLWdhbGxlcnknO1xuICAgIGNvbnN0ICR2aWRlb0dhbGxlcnkgPSAkKGBbZGF0YS0ke3BsdWdpbktleX1dYCk7XG5cbiAgICAkdmlkZW9HYWxsZXJ5LmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0ICRlbCA9ICQoZWxlbWVudCk7XG4gICAgICAgIGNvbnN0IGlzSW5pdGlhbGl6ZWQgPSAkZWwuZGF0YShwbHVnaW5LZXkpIGluc3RhbmNlb2YgVmlkZW9HYWxsZXJ5O1xuXG4gICAgICAgIGlmIChpc0luaXRpYWxpemVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAkZWwuZGF0YShwbHVnaW5LZXksIG5ldyBWaWRlb0dhbGxlcnkoJGVsKSk7XG4gICAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9