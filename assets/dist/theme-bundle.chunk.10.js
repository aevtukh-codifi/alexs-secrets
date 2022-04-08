(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./assets/js/theme/brands.js":
/*!***********************************!*\
  !*** ./assets/js/theme/brands.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Brands; });
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme/common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Brands = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Brands, _CatalogPage);

  function Brands(context) {
    var _this;

    _this = _CatalogPage.call(this, context) || this;
    _this.validationDictionary = Object(_theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_1__["createTranslationDictionary"])(context);
    _this.currentUrl = window.location.href;
    _this.brandsContainer = document.getElementById('brands-filter');
    return _this;
  }

  var _proto = Brands.prototype;

  _proto.onReady = function onReady() {
    this.checkURL();
  };

  _proto.checkURL = function checkURL() {
    this.currentUrl.includes('brands/?starting') ? this.clearBrandsContainer() : $('.brand').toggleClass('hidden');
  };

  _proto.clearBrandsContainer = function clearBrandsContainer() {
    this.brandsContainer.innerHTML = "<div class='my-loader' style=\"display:flex; justify-content: center; aligh-items: center;\"><img src=\"https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921\"></div>";
    this.getBrandsInfo();
  };

  _proto.getBrandsInfo = function getBrandsInfo() {
    var _this2 = this;

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
      var _json$data, _json$data$site, _json$data$site$brand;

      serverData = json == null ? void 0 : (_json$data = json.data) == null ? void 0 : (_json$data$site = _json$data.site) == null ? void 0 : (_json$data$site$brand = _json$data$site.brands) == null ? void 0 : _json$data$site$brand.edges;

      var filterParametr = _this2.currentUrl.split('').slice(-1).join('');

      var filterServerData = serverData.filter(function (el) {
        return el.node.name[0].toLowerCase() == filterParametr;
      });

      if (filterServerData.length) {
        _this2.brandsContainer.innerHTML = '';

        _this2.brandsContainer.classList.add('flex');

        for (var el = 0; el < filterServerData.length; el++) {
          var _filterServerData$el, _filterServerData$el$, _filterServerData$el2, _filterServerData$el3, _filterServerData$el4, _filterServerData$el5, _filterServerData$el6, _filterServerData$el7, _filterServerData$el8, _filterServerData$el9, _filterServerData$el10, _filterServerData$el11, _filterServerData$el12, _filterServerData$el13;

          var li = document.createElement('li');
          li.setAttribute('class', 'filtered-brand__item');
          li.innerHTML = "<div class='brand-img__container'>\n                                        <a href='/" + ((_filterServerData$el = filterServerData[el]) == null ? void 0 : (_filterServerData$el$ = _filterServerData$el.node) == null ? void 0 : _filterServerData$el$.name) + "'><img src='" + ((_filterServerData$el2 = filterServerData[el]) == null ? void 0 : (_filterServerData$el3 = _filterServerData$el2.node) == null ? void 0 : (_filterServerData$el4 = _filterServerData$el3.defaultImage) == null ? void 0 : _filterServerData$el4.urlOriginal) + "' alt='" + ((_filterServerData$el5 = filterServerData[el]) == null ? void 0 : (_filterServerData$el6 = _filterServerData$el5.node) == null ? void 0 : _filterServerData$el6.name) + "'/></a>\n                                    </div>\n                                    <div class=\"brand-info__container\">\n                                        <h3 class=\"brand-name\"><a href='/" + ((_filterServerData$el7 = filterServerData[el]) == null ? void 0 : (_filterServerData$el8 = _filterServerData$el7.node) == null ? void 0 : _filterServerData$el8.name) + "'>" + ((_filterServerData$el9 = filterServerData[el]) == null ? void 0 : (_filterServerData$el10 = _filterServerData$el9.node) == null ? void 0 : _filterServerData$el10.name) + "</a></h3>\n                                        <p class=\"brand-description\" style='font-size:20px'>" + ((_filterServerData$el11 = filterServerData[el]) == null ? void 0 : (_filterServerData$el12 = _filterServerData$el11.node) == null ? void 0 : (_filterServerData$el13 = _filterServerData$el12.seo) == null ? void 0 : _filterServerData$el13.metaDescription) + "</p>\n                                    </div>";

          _this2.brandsContainer.append(li);
        }
      } else {
        _this2.brandsContainer.innerHTML = "<p style='font-size: 20px; text-align: center'>There are no Brands starting from " + filterParametr + "</p>";
      }
    });
  };

  return Brands;
}(_catalog__WEBPACK_IMPORTED_MODULE_0__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/catalog.js":
/*!************************************!*\
  !*** ./assets/js/theme/catalog.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CatalogPage; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_2__);
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var CatalogPage = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(CatalogPage, _PageManager);

  function CatalogPage(context) {
    var _this;

    _this = _PageManager.call(this, context) || this;
    window.addEventListener('beforeunload', function () {
      if (document.activeElement.id === 'sort') {
        window.localStorage.setItem('sortByStatus', 'selected');
      }
    });
    return _this;
  }

  var _proto = CatalogPage.prototype;

  _proto.arrangeFocusOnSortBy = function arrangeFocusOnSortBy() {
    var $sortBySelector = $('[data-sort-by="product"] #sort');

    if (window.localStorage.getItem('sortByStatus')) {
      $sortBySelector.focus();
      window.localStorage.removeItem('sortByStatus');
    }
  };

  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_2___default.a.parse(window.location.href, true);
    var queryParams = $(currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;
    event.preventDefault();
    window.location = url__WEBPACK_IMPORTED_MODULE_2___default.a.format({
      pathname: url.pathname,
      search: _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString(url.query)
    });
  };

  return CatalogPage;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/utils/translations-utils.js":
/*!************************************************************!*\
  !*** ./assets/js/theme/common/utils/translations-utils.js ***!
  \************************************************************/
/*! exports provided: createTranslationDictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslationDictionary", function() { return createTranslationDictionary; });
var TRANSLATIONS = 'translations';

var isTranslationDictionaryNotEmpty = function isTranslationDictionaryNotEmpty(dictionary) {
  return !!Object.keys(dictionary[TRANSLATIONS]).length;
};

var chooseActiveDictionary = function chooseActiveDictionary() {
  for (var i = 0; i < arguments.length; i++) {
    var dictionary = JSON.parse(i < 0 || arguments.length <= i ? undefined : arguments[i]);

    if (isTranslationDictionaryNotEmpty(dictionary)) {
      return dictionary;
    }
  }
};
/**
 * defines Translation Dictionary to use
 * @param context provides access to 3 validation JSONs from en.json:
 * validation_messages, validation_fallback_messages and default_messages
 * @returns {Object}
 */


var createTranslationDictionary = function createTranslationDictionary(context) {
  var validationDictionaryJSON = context.validationDictionaryJSON,
      validationFallbackDictionaryJSON = context.validationFallbackDictionaryJSON,
      validationDefaultDictionaryJSON = context.validationDefaultDictionaryJSON;
  var activeDictionary = chooseActiveDictionary(validationDictionaryJSON, validationFallbackDictionaryJSON, validationDefaultDictionaryJSON);
  var localizations = Object.values(activeDictionary[TRANSLATIONS]);
  var translationKeys = Object.keys(activeDictionary[TRANSLATIONS]).map(function (key) {
    return key.split('.').pop();
  });
  return translationKeys.reduce(function (acc, key, i) {
    acc[key] = localizations[i];
    return acc;
  }, {});
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYnJhbmRzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jYXRhbG9nLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzLmpzIl0sIm5hbWVzIjpbIkJyYW5kcyIsImNvbnRleHQiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeSIsImNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSIsImN1cnJlbnRVcmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJicmFuZHNDb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib25SZWFkeSIsImNoZWNrVVJMIiwiaW5jbHVkZXMiLCJjbGVhckJyYW5kc0NvbnRhaW5lciIsIiQiLCJ0b2dnbGVDbGFzcyIsImlubmVySFRNTCIsImdldEJyYW5kc0luZm8iLCJ0b2tlbiIsInNlcnZlckRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJzaXRlIiwiYnJhbmRzIiwiZWRnZXMiLCJmaWx0ZXJQYXJhbWV0ciIsInNwbGl0Iiwic2xpY2UiLCJqb2luIiwiZmlsdGVyU2VydmVyRGF0YSIsImZpbHRlciIsImVsIiwibm9kZSIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImxlbmd0aCIsImNsYXNzTGlzdCIsImFkZCIsImxpIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImRlZmF1bHRJbWFnZSIsInVybE9yaWdpbmFsIiwic2VvIiwibWV0YURlc2NyaXB0aW9uIiwiYXBwZW5kIiwiQ2F0YWxvZ1BhZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwiYWN0aXZlRWxlbWVudCIsImlkIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImFycmFuZ2VGb2N1c09uU29ydEJ5IiwiJHNvcnRCeVNlbGVjdG9yIiwiZ2V0SXRlbSIsImZvY3VzIiwicmVtb3ZlSXRlbSIsIm9uU29ydEJ5U3VibWl0IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwidXJsIiwiVXJsIiwicGFyc2UiLCJxdWVyeVBhcmFtcyIsInNlcmlhbGl6ZSIsInBhZ2UiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1hdCIsInBhdGhuYW1lIiwic2VhcmNoIiwidXJsVXRpbHMiLCJidWlsZFF1ZXJ5U3RyaW5nIiwiUGFnZU1hbmFnZXIiLCJUUkFOU0xBVElPTlMiLCJpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5IiwiZGljdGlvbmFyeSIsIk9iamVjdCIsImtleXMiLCJjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5IiwiaSIsInZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiIsImFjdGl2ZURpY3Rpb25hcnkiLCJsb2NhbGl6YXRpb25zIiwidmFsdWVzIiwidHJhbnNsYXRpb25LZXlzIiwibWFwIiwia2V5IiwicG9wIiwicmVkdWNlIiwiYWNjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVxQkEsTTs7O0FBQ2pCLGtCQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQ2pCLG9DQUFNQSxPQUFOO0FBQ0EsVUFBS0Msb0JBQUwsR0FBNEJDLDBHQUEyQixDQUFDRixPQUFELENBQXZEO0FBQ0EsVUFBS0csVUFBTCxHQUFrQkMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFsQztBQUNBLFVBQUtDLGVBQUwsR0FBdUJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixDQUF2QjtBQUppQjtBQUtwQjs7OztTQUVEQyxPLEdBQUEsbUJBQVU7QUFDTixTQUFLQyxRQUFMO0FBQ0gsRzs7U0FFREEsUSxHQUFBLG9CQUFXO0FBQ1AsU0FBS1IsVUFBTCxD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QTs7O0FBQ08sSUFBTW5GLDJCQUEyQixHQUFHLFNBQTlCQSwyQkFBOEIsQ0FBQ0YsT0FBRCxFQUFhO0FBQ3BELE1BQVEwRix3QkFBUixHQUF3RzFGLE9BQXhHLENBQVEwRix3QkFBUjtBQUFBLE1BQWtDQyxnQ0FBbEMsR0FBd0czRixPQUF4RyxDQUFrQzJGLGdDQUFsQztBQUFBLE1BQW9FQywrQkFBcEUsR0FBd0c1RixPQUF4RyxDQUFvRTRGLCtCQUFwRTtBQUNBLE1BQU1DLGdCQUFnQixHQUFHTCxzQkFBc0IsQ0FBQ0Usd0JBQUQsRUFBMkJDLGdDQUEzQixFQUE2REMsK0JBQTdELENBQS9DO0FBQ0EsTUFBTUUsYUFBYSxHQUFHUixNQUFNLENBQUNTLE1BQVAsQ0FBY0YsZ0JBQWdCLENBQUNWLFlBQUQsQ0FBOUIsQ0FBdEI7QUFDQSxNQUFNYSxlQUFlLEdBQUdWLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTSxnQkFBZ0IsQ0FBQ1YsWUFBRCxDQUE1QixFQUE0Q2MsR0FBNUMsQ0FBZ0QsVUFBQUMsR0FBRztBQUFBLFdBQUlBLEdBQUcsQ0FBQzlELEtBQUosQ0FBVSxHQUFWLEVBQWUrRCxHQUFmLEVBQUo7QUFBQSxHQUFuRCxDQUF4QjtBQUVBLFNBQU9ILGVBQWUsQ0FBQ0ksTUFBaEIsQ0FBdUIsVUFBQ0MsR0FBRCxFQUFNSCxHQUFOLEVBQVdULENBQVgsRUFBaUI7QUFDM0NZLE9BQUcsQ0FBQ0gsR0FBRCxDQUFILEdBQVdKLGFBQWEsQ0FBQ0wsQ0FBRCxDQUF4QjtBQUNBLFdBQU9ZLEdBQVA7QUFDSCxHQUhNLEVBR0osRUFISSxDQUFQO0FBSUgsQ0FWTSxDIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXRhbG9nUGFnZSBmcm9tICcuL2NhdGFsb2cnO1xuaW1wb3J0IHsgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IH0gZnJvbSAnLi4vdGhlbWUvY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyYW5kcyBleHRlbmRzIENhdGFsb2dQYWdlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5ID0gY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5KGNvbnRleHQpO1xuICAgICAgICB0aGlzLmN1cnJlbnRVcmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgdGhpcy5icmFuZHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnJhbmRzLWZpbHRlcicpXG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgdGhpcy5jaGVja1VSTCgpXG4gICAgfVxuXG4gICAgY2hlY2tVUkwoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFVybC5pbmNsdWRlcygnYnJhbmRzLz9zdGFydGluZycpID8gdGhpcy5jbGVhckJyYW5kc0NvbnRhaW5lcigpIDogJCgnLmJyYW5kJykudG9nZ2xlQ2xhc3MoJ2hpZGRlbicpXG4gICAgfVxuXG4gICAgY2xlYXJCcmFuZHNDb250YWluZXIgKCkge1xuICAgICAgICB0aGlzLmJyYW5kc0NvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz0nbXktbG9hZGVyJyBzdHlsZT1cImRpc3BsYXk6ZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGFsaWdoLWl0ZW1zOiBjZW50ZXI7XCI+PGltZyBzcmM9XCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL2IvYjEvTG9hZGluZ19pY29uLmdpZj8yMDE1MTAyNDAzNDkyMVwiPjwvZGl2PmA7XG4gICAgICAgIHRoaXMuZ2V0QnJhbmRzSW5mbygpXG4gICAgfVxuXG4gICAgZ2V0QnJhbmRzSW5mbyAoKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY29udGV4dC50b2tlbjtcbiAgICAgICAgdmFyIHNlcnZlckRhdGEgPSAnJ1xuXG4gICAgICAgIGZldGNoKCcvZ3JhcGhxbCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiBgXG4gICAgICAgICAgICAgICAgcXVlcnkgTXlGaXJzdFF1ZXJ5IHtcbiAgICAgICAgICAgICAgICBzaXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyYW5kcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0SW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybE9yaWdpbmFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YURlc2NyaXB0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9KVxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICBzZXJ2ZXJEYXRhID0ganNvbj8uZGF0YT8uc2l0ZT8uYnJhbmRzPy5lZGdlcztcbiAgICAgICAgICAgIHZhciBmaWx0ZXJQYXJhbWV0ciA9IHRoaXMuY3VycmVudFVybC5zcGxpdCgnJykuc2xpY2UoLTEpLmpvaW4oJycpO1xuICAgICAgICAgICAgY29uc3QgZmlsdGVyU2VydmVyRGF0YSA9IHNlcnZlckRhdGEuZmlsdGVyKChlbCkgPT4gZWwubm9kZS5uYW1lWzBdLnRvTG93ZXJDYXNlKCkgPT0gZmlsdGVyUGFyYW1ldHIpO1xuICAgICAgICAgICAgaWYgKGZpbHRlclNlcnZlckRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5icmFuZHNDb250YWluZXIuaW5uZXJIVE1MID0nJ1xuICAgICAgICAgICAgICAgIHRoaXMuYnJhbmRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZsZXgnKVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGVsID0gMDsgZWwgPCBmaWx0ZXJTZXJ2ZXJEYXRhLmxlbmd0aDsgZWwrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZpbHRlcmVkLWJyYW5kX19pdGVtJylcbiAgICAgICAgICAgICAgICAgICAgbGkuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9J2JyYW5kLWltZ19fY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPScvJHtmaWx0ZXJTZXJ2ZXJEYXRhW2VsXT8ubm9kZT8ubmFtZX0nPjxpbWcgc3JjPScke2ZpbHRlclNlcnZlckRhdGFbZWxdPy5ub2RlPy5kZWZhdWx0SW1hZ2U/LnVybE9yaWdpbmFsfScgYWx0PScke2ZpbHRlclNlcnZlckRhdGFbZWxdPy5ub2RlPy5uYW1lfScvPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJyYW5kLWluZm9fX2NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImJyYW5kLW5hbWVcIj48YSBocmVmPScvJHtmaWx0ZXJTZXJ2ZXJEYXRhW2VsXT8ubm9kZT8ubmFtZX0nPiR7ZmlsdGVyU2VydmVyRGF0YVtlbF0/Lm5vZGU/Lm5hbWV9PC9hPjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJicmFuZC1kZXNjcmlwdGlvblwiIHN0eWxlPSdmb250LXNpemU6MjBweCc+JHtmaWx0ZXJTZXJ2ZXJEYXRhW2VsXT8ubm9kZT8uc2VvPy5tZXRhRGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5icmFuZHNDb250YWluZXIuYXBwZW5kKGxpKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5icmFuZHNDb250YWluZXIuaW5uZXJIVE1MID0gYDxwIHN0eWxlPSdmb250LXNpemU6IDIwcHg7IHRleHQtYWxpZ246IGNlbnRlcic+VGhlcmUgYXJlIG5vIEJyYW5kcyBzdGFydGluZyBmcm9tICR7ZmlsdGVyUGFyYW1ldHJ9PC9wPmBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCB1cmxVdGlscyBmcm9tICcuL2NvbW1vbi91dGlscy91cmwtdXRpbHMnO1xuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRhbG9nUGFnZSBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5pZCA9PT0gJ3NvcnQnKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzb3J0QnlTdGF0dXMnLCAnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXJyYW5nZUZvY3VzT25Tb3J0QnkoKSB7XG4gICAgICAgIGNvbnN0ICRzb3J0QnlTZWxlY3RvciA9ICQoJ1tkYXRhLXNvcnQtYnk9XCJwcm9kdWN0XCJdICNzb3J0Jyk7XG5cbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29ydEJ5U3RhdHVzJykpIHtcbiAgICAgICAgICAgICRzb3J0QnlTZWxlY3Rvci5mb2N1cygpO1xuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdzb3J0QnlTdGF0dXMnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU29ydEJ5U3VibWl0KGV2ZW50LCBjdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gJChjdXJyZW50VGFyZ2V0KS5zZXJpYWxpemUoKS5zcGxpdCgnPScpO1xuXG4gICAgICAgIHVybC5xdWVyeVtxdWVyeVBhcmFtc1swXV0gPSBxdWVyeVBhcmFtc1sxXTtcbiAgICAgICAgZGVsZXRlIHVybC5xdWVyeS5wYWdlO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsLnF1ZXJ5KSB9KTtcbiAgICB9XG59XG4iLCJjb25zdCBUUkFOU0xBVElPTlMgPSAndHJhbnNsYXRpb25zJztcbmNvbnN0IGlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkgPSAoZGljdGlvbmFyeSkgPT4gISFPYmplY3Qua2V5cyhkaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pLmxlbmd0aDtcbmNvbnN0IGNob29zZUFjdGl2ZURpY3Rpb25hcnkgPSAoLi4uZGljdGlvbmFyeUpzb25MaXN0KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWN0aW9uYXJ5SnNvbkxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGljdGlvbmFyeSA9IEpTT04ucGFyc2UoZGljdGlvbmFyeUpzb25MaXN0W2ldKTtcbiAgICAgICAgaWYgKGlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkoZGljdGlvbmFyeSkpIHtcbiAgICAgICAgICAgIHJldHVybiBkaWN0aW9uYXJ5O1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBkZWZpbmVzIFRyYW5zbGF0aW9uIERpY3Rpb25hcnkgdG8gdXNlXG4gKiBAcGFyYW0gY29udGV4dCBwcm92aWRlcyBhY2Nlc3MgdG8gMyB2YWxpZGF0aW9uIEpTT05zIGZyb20gZW4uanNvbjpcbiAqIHZhbGlkYXRpb25fbWVzc2FnZXMsIHZhbGlkYXRpb25fZmFsbGJhY2tfbWVzc2FnZXMgYW5kIGRlZmF1bHRfbWVzc2FnZXNcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgPSAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiB9ID0gY29udGV4dDtcbiAgICBjb25zdCBhY3RpdmVEaWN0aW9uYXJ5ID0gY2hvb3NlQWN0aXZlRGljdGlvbmFyeSh2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OKTtcbiAgICBjb25zdCBsb2NhbGl6YXRpb25zID0gT2JqZWN0LnZhbHVlcyhhY3RpdmVEaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pO1xuICAgIGNvbnN0IHRyYW5zbGF0aW9uS2V5cyA9IE9iamVjdC5rZXlzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubWFwKGtleSA9PiBrZXkuc3BsaXQoJy4nKS5wb3AoKSk7XG5cbiAgICByZXR1cm4gdHJhbnNsYXRpb25LZXlzLnJlZHVjZSgoYWNjLCBrZXksIGkpID0+IHtcbiAgICAgICAgYWNjW2tleV0gPSBsb2NhbGl6YXRpb25zW2ldO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9