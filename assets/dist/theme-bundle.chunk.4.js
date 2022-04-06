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
      var brandImgSrc = ((_brandInfo$ = brandInfo[0]) == null ? void 0 : (_brandInfo$$node = _brandInfo$.node) == null ? void 0 : (_brandInfo$$node$defa = _brandInfo$$node.defaultImage) == null ? void 0 : _brandInfo$$node$defa.urlOriginal) || 'https://via.placeholder.com/150';
      brandImg.setAttribute('src', brandImgSrc);
      brandImg.setAttribute('alt', "" + ((_brandInfo$2 = brandInfo[0]) == null ? void 0 : (_brandInfo$2$node = _brandInfo$2.node) == null ? void 0 : (_brandInfo$2$node$def = _brandInfo$2$node.defaultImage) == null ? void 0 : _brandInfo$2$node$def.altText));
      var imgContainer = document.getElementById('brand-img');
      imgContainer.append(brandImg);
      var brandDescription = document.createElement('p');
      brandDescription.innerHTML = "" + ((_brandInfo$3 = brandInfo[0]) == null ? void 0 : (_brandInfo$3$node = _brandInfo$3.node) == null ? void 0 : (_brandInfo$3$node$seo = _brandInfo$3$node.seo) == null ? void 0 : _brandInfo$3$node$seo.metaDescription) || 'There is no description';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC92aWRlby1nYWxsZXJ5LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3QiLCJjb250ZXh0IiwidXJsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiJHJldmlld0xpbmsiLCIkIiwiJGJ1bGtQcmljaW5nTGluayIsInJldmlld01vZGFsIiwibW9kYWxGYWN0b3J5Iiwib25SZWFkeSIsImRvY3VtZW50Iiwib24iLCJpbmRleE9mIiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsInRpdGxlIiwicGF0aG5hbWUiLCJ2YWxpZGF0b3IiLCJjb2xsYXBzaWJsZUZhY3RvcnkiLCJwcm9kdWN0RGV0YWlscyIsIlByb2R1Y3REZXRhaWxzIiwiQkNEYXRhIiwicHJvZHVjdF9hdHRyaWJ1dGVzIiwic2V0UHJvZHVjdFZhcmlhbnQiLCJ2aWRlb0dhbGxlcnkiLCJidWxrUHJpY2luZ0hhbmRsZXIiLCIkcmV2aWV3Rm9ybSIsImNsYXNzaWZ5Rm9ybSIsImxlbmd0aCIsInJldmlldyIsIlJldmlldyIsInJlZ2lzdGVyVmFsaWRhdGlvbiIsImFyaWFEZXNjcmliZVJldmlld0lucHV0cyIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsInByb2R1Y3RSZXZpZXdIYW5kbGVyIiwiY3JlYXRlQnJhbmRJbmZvIiwicHJvZHVjdEJyYW5kIiwidG9rZW4iLCJzZXJ2ZXJEYXRhIiwiZmV0Y2giLCJtZXRob2QiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInF1ZXJ5IiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwic2l0ZSIsImJyYW5kcyIsImVkZ2VzIiwiYnJhbmRJbmZvIiwiZmlsdGVyIiwiaXRlbSIsIm5vZGUiLCJuYW1lIiwiYnJhbmRJbWciLCJjcmVhdGVFbGVtZW50IiwiYnJhbmRJbWdTcmMiLCJkZWZhdWx0SW1hZ2UiLCJ1cmxPcmlnaW5hbCIsInNldEF0dHJpYnV0ZSIsImFsdFRleHQiLCJpbWdDb250YWluZXIiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZCIsImJyYW5kRGVzY3JpcHRpb24iLCJpbm5lckhUTUwiLCJzZW8iLCJtZXRhRGVzY3JpcHRpb24iLCJicmFuZENvbnRhaW5lciIsIiRmb3JtIiwiZmluZCIsImVhY2giLCJfIiwiaW5wdXQiLCIkaW5wdXQiLCJtc2dTcGFuSWQiLCJhdHRyIiwic2libGluZ3MiLCJ0cmlnZ2VyIiwiUGFnZU1hbmFnZXIiLCJWaWRlb0dhbGxlcnkiLCIkZWxlbWVudCIsIiRwbGF5ZXIiLCIkdmlkZW9zIiwiY3VycmVudFZpZGVvIiwiYmluZEV2ZW50cyIsInNlbGVjdE5ld1ZpZGVvIiwiZSIsInByZXZlbnREZWZhdWx0IiwiJHRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJpZCIsIiRzZWxlY3RlZFRodW1iIiwic2V0TWFpblZpZGVvIiwic2V0QWN0aXZlVGh1bWIiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiYmluZCIsInBsdWdpbktleSIsIiR2aWRlb0dhbGxlcnkiLCJpbmRleCIsImVsZW1lbnQiLCIkZWwiLCJpc0luaXRpYWxpemVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsTzs7O0FBQ2pCLG1CQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQ2pCLG9DQUFNQSxPQUFOO0FBQ0EsVUFBS0MsR0FBTCxHQUFXQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQTNCO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQkMsQ0FBQyxDQUFDLHNDQUFELENBQXBCO0FBQ0EsVUFBS0MsZ0JBQUwsR0FBd0JELENBQUMsQ0FBQyx1Q0FBRCxDQUF6QjtBQUNBLFVBQUtFLFdBQUwsR0FBbUJDLDZEQUFZLENBQUMsb0JBQUQsQ0FBWixDQUFtQyxDQUFuQyxD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O0FBQ0gsR0FURDtBQVVILEMiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuIEltcG9ydCBhbGwgcHJvZHVjdCBzcGVjaWZpYyBqc1xuICovXG5pbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IFJldmlldyBmcm9tICcuL3Byb2R1Y3QvcmV2aWV3cyc7XG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gJy4vY29tbW9uL2NvbGxhcHNpYmxlJztcbmltcG9ydCBQcm9kdWN0RGV0YWlscyBmcm9tICcuL2NvbW1vbi9wcm9kdWN0LWRldGFpbHMnO1xuaW1wb3J0IHZpZGVvR2FsbGVyeSBmcm9tICcuL3Byb2R1Y3QvdmlkZW8tZ2FsbGVyeSc7XG5pbXBvcnQgeyBjbGFzc2lmeUZvcm0gfSBmcm9tICcuL2NvbW1vbi91dGlscy9mb3JtLXV0aWxzJztcbmltcG9ydCBtb2RhbEZhY3RvcnkgZnJvbSAnLi9nbG9iYWwvbW9kYWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0IGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMudXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgIHRoaXMuJHJldmlld0xpbmsgPSAkKCdbZGF0YS1yZXZlYWwtaWQ9XCJtb2RhbC1yZXZpZXctZm9ybVwiXScpO1xuICAgICAgICB0aGlzLiRidWxrUHJpY2luZ0xpbmsgPSAkKCdbZGF0YS1yZXZlYWwtaWQ9XCJtb2RhbC1idWxrLXByaWNpbmdcIl0nKTtcbiAgICAgICAgdGhpcy5yZXZpZXdNb2RhbCA9IG1vZGFsRmFjdG9yeSgnI21vZGFsLXJldmlldy1mb3JtJylbMF07XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgLy8gTGlzdGVuIGZvciBmb3VuZGF0aW9uIG1vZGFsIGNsb3NlIGV2ZW50cyB0byBzYW5pdGl6ZSBVUkwgYWZ0ZXIgcmV2aWV3LlxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xvc2UuZm5kdG4ucmV2ZWFsJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMudXJsLmluZGV4T2YoJyN3cml0ZV9yZXZpZXcnKSAhPT0gLTEgJiYgdHlwZW9mIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBkb2N1bWVudC50aXRsZSwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHZhbGlkYXRvcjtcblxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG4gICAgICAgIHRoaXMucHJvZHVjdERldGFpbHMgPSBuZXcgUHJvZHVjdERldGFpbHMoJCgnLnByb2R1Y3RWaWV3JyksIHRoaXMuY29udGV4dCwgd2luZG93LkJDRGF0YS5wcm9kdWN0X2F0dHJpYnV0ZXMpO1xuICAgICAgICB0aGlzLnByb2R1Y3REZXRhaWxzLnNldFByb2R1Y3RWYXJpYW50KCk7XG5cbiAgICAgICAgdmlkZW9HYWxsZXJ5KCk7XG5cbiAgICAgICAgdGhpcy5idWxrUHJpY2luZ0hhbmRsZXIoKTtcblxuICAgICAgICBjb25zdCAkcmV2aWV3Rm9ybSA9IGNsYXNzaWZ5Rm9ybSgnLndyaXRlUmV2aWV3LWZvcm0nKTtcblxuICAgICAgICBpZiAoJHJldmlld0Zvcm0ubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgcmV2aWV3ID0gbmV3IFJldmlldyh7ICRyZXZpZXdGb3JtIH0pO1xuXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtcmV2ZWFsLWlkPVwibW9kYWwtcmV2aWV3LWZvcm1cIl0nLCAoKSA9PiB7XG4gICAgICAgICAgICB2YWxpZGF0b3IgPSByZXZpZXcucmVnaXN0ZXJWYWxpZGF0aW9uKHRoaXMuY29udGV4dCk7XG4gICAgICAgICAgICB0aGlzLmFyaWFEZXNjcmliZVJldmlld0lucHV0cygkcmV2aWV3Rm9ybSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRyZXZpZXdGb3JtLm9uKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsaWRhdG9yKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHJvZHVjdFJldmlld0hhbmRsZXIoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVCcmFuZEluZm8gKCk7XG4gICAgfVxuICAgIFxuICAgIGNyZWF0ZUJyYW5kSW5mbyAoKSB7XG4gICAgICAgIHZhciBwcm9kdWN0QnJhbmQgPSB0aGlzLmNvbnRleHQucHJvZHVjdEJyYW5kXG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY29udGV4dC50b2tlbjtcbiAgICAgICAgdmFyIHNlcnZlckRhdGEgPSAnJ1xuXG4gICAgICAgIGZldGNoKCcvZ3JhcGhxbCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiBgXG4gICAgICAgICAgICAgICAgcXVlcnkgTXlGaXJzdFF1ZXJ5IHtcbiAgICAgICAgICAgICAgICBzaXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyYW5kcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0SW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybE9yaWdpbmFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YURlc2NyaXB0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9KVxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4oanNvbiA9PiB7IFxuICAgICAgICAgICAgc2VydmVyRGF0YSA9IGpzb24/LmRhdGE/LnNpdGU/LmJyYW5kcz8uZWRnZXM7XG4gICAgICAgICAgICBjb25zdCBicmFuZEluZm8gPSBzZXJ2ZXJEYXRhLmZpbHRlcihpdGVtID0+IGl0ZW0/Lm5vZGU/Lm5hbWUgPT0gcHJvZHVjdEJyYW5kKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGJyYW5kSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICB2YXIgYnJhbmRJbWdTcmMgPSBicmFuZEluZm9bMF0/Lm5vZGU/LmRlZmF1bHRJbWFnZT8udXJsT3JpZ2luYWwgfHwgJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTAnO1xuICAgICAgICAgICAgYnJhbmRJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBicmFuZEltZ1NyYyk7XG4gICAgICAgICAgICBicmFuZEltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsYCR7YnJhbmRJbmZvWzBdPy5ub2RlPy5kZWZhdWx0SW1hZ2U/LmFsdFRleHR9YCk7XG4gICAgICAgICAgICB2YXIgaW1nQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JyYW5kLWltZycpO1xuICAgICAgICAgICAgaW1nQ29udGFpbmVyLmFwcGVuZChicmFuZEltZyk7XG5cbiAgICAgICAgICAgIHZhciBicmFuZERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgYnJhbmREZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBgJHticmFuZEluZm9bMF0/Lm5vZGU/LnNlbz8ubWV0YURlc2NyaXB0aW9ufWAgfHwgJ1RoZXJlIGlzIG5vIGRlc2NyaXB0aW9uJztcbiAgICAgICAgICAgIHZhciBicmFuZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdicmFuZC1kZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgYnJhbmRDb250YWluZXIuYXBwZW5kKGJyYW5kRGVzY3JpcHRpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhcmlhRGVzY3JpYmVSZXZpZXdJbnB1dHMoJGZvcm0pIHtcbiAgICAgICAgJGZvcm0uZmluZCgnW2RhdGEtaW5wdXRdJykuZWFjaCgoXywgaW5wdXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRpbnB1dCA9ICQoaW5wdXQpO1xuICAgICAgICAgICAgY29uc3QgbXNnU3BhbklkID0gYCR7JGlucHV0LmF0dHIoJ25hbWUnKX0tbXNnYDtcblxuICAgICAgICAgICAgJGlucHV0LnNpYmxpbmdzKCdzcGFuJykuYXR0cignaWQnLCBtc2dTcGFuSWQpO1xuICAgICAgICAgICAgJGlucHV0LmF0dHIoJ2FyaWEtZGVzY3JpYmVkYnknLCBtc2dTcGFuSWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm9kdWN0UmV2aWV3SGFuZGxlcigpIHtcbiAgICAgICAgaWYgKHRoaXMudXJsLmluZGV4T2YoJyN3cml0ZV9yZXZpZXcnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuJHJldmlld0xpbmsudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJ1bGtQcmljaW5nSGFuZGxlcigpIHtcbiAgICAgICAgaWYgKHRoaXMudXJsLmluZGV4T2YoJyNidWxrX3ByaWNpbmcnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuJGJ1bGtQcmljaW5nTGluay50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFZpZGVvR2FsbGVyeSB7XG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy4kcGxheWVyID0gJGVsZW1lbnQuZmluZCgnW2RhdGEtdmlkZW8tcGxheWVyXScpO1xuICAgICAgICB0aGlzLiR2aWRlb3MgPSAkZWxlbWVudC5maW5kKCdbZGF0YS12aWRlby1pdGVtXScpO1xuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlbyA9IHt9O1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBzZWxlY3ROZXdWaWRlbyhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgIHRoaXMuY3VycmVudFZpZGVvID0ge1xuICAgICAgICAgICAgaWQ6ICR0YXJnZXQuZGF0YSgndmlkZW9JZCcpLFxuICAgICAgICAgICAgJHNlbGVjdGVkVGh1bWI6ICR0YXJnZXQsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zZXRNYWluVmlkZW8oKTtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVUaHVtYigpO1xuICAgIH1cblxuICAgIHNldE1haW5WaWRlbygpIHtcbiAgICAgICAgdGhpcy4kcGxheWVyLmF0dHIoJ3NyYycsIGAvL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3RoaXMuY3VycmVudFZpZGVvLmlkfWApO1xuICAgIH1cblxuICAgIHNldEFjdGl2ZVRodW1iKCkge1xuICAgICAgICB0aGlzLiR2aWRlb3MucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlby4kc2VsZWN0ZWRUaHVtYi5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kdmlkZW9zLm9uKCdjbGljaycsIHRoaXMuc2VsZWN0TmV3VmlkZW8uYmluZCh0aGlzKSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2aWRlb0dhbGxlcnkoKSB7XG4gICAgY29uc3QgcGx1Z2luS2V5ID0gJ3ZpZGVvLWdhbGxlcnknO1xuICAgIGNvbnN0ICR2aWRlb0dhbGxlcnkgPSAkKGBbZGF0YS0ke3BsdWdpbktleX1dYCk7XG5cbiAgICAkdmlkZW9HYWxsZXJ5LmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0ICRlbCA9ICQoZWxlbWVudCk7XG4gICAgICAgIGNvbnN0IGlzSW5pdGlhbGl6ZWQgPSAkZWwuZGF0YShwbHVnaW5LZXkpIGluc3RhbmNlb2YgVmlkZW9HYWxsZXJ5O1xuXG4gICAgICAgIGlmIChpc0luaXRpYWxpemVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAkZWwuZGF0YShwbHVnaW5LZXksIG5ldyBWaWRlb0dhbGxlcnkoJGVsKSk7XG4gICAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9