(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./assets/js/theme/brands.js":
/*!***********************************!*\
  !*** ./assets/js/theme/brands.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Brands; });
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
    this.currentUrl.includes('brands/?starting') ? this.clearBrandsContainer() : null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYnJhbmRzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jYXRhbG9nLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzLmpzIl0sIm5hbWVzIjpbIkJyYW5kcyIsImNvbnRleHQiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeSIsImNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSIsImN1cnJlbnRVcmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJicmFuZHNDb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib25SZWFkeSIsImNoZWNrVVJMIiwiaW5jbHVkZXMiLCJjbGVhckJyYW5kc0NvbnRhaW5lciIsImlubmVySFRNTCIsImdldEJyYW5kc0luZm8iLCJ0b2tlbiIsInNlcnZlckRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJzaXRlIiwiYnJhbmRzIiwiZWRnZXMiLCJmaWx0ZXJQYXJhbWV0ciIsInNwbGl0Iiwic2xpY2UiLCJqb2luIiwiZmlsdGVyU2VydmVyRGF0YSIsImZpbHRlciIsImVsIiwibm9kZSIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImxlbmd0aCIsImNsYXNzTGlzdCIsImFkZCIsImxpIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImRlZmF1bHRJbWFnZSIsInVybE9yaWdpbmFsIiwic2VvIiwibWV0YURlc2NyaXB0aW9uIiwiYXBwZW5kIiwiQ2F0YWxvZ1BhZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwiYWN0aXZlRWxlbWVudCIsImlkIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImFycmFuZ2VGb2N1c09uU29ydEJ5IiwiJHNvcnRCeVNlbGVjdG9yIiwiJCIsImdldEl0ZW0iLCJmb2N1cyIsInJlbW92ZUl0ZW0iLCJvblNvcnRCeVN1Ym1pdCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsInVybCIsIlVybCIsInBhcnNlIiwicXVlcnlQYXJhbXMiLCJzZXJpYWxpemUiLCJwYWdlIiwicHJldmVudERlZmF1bHQiLCJmb3JtYXQiLCJwYXRobmFtZSIsInNlYXJjaCIsInVybFV0aWxzIiwiYnVpbGRRdWVyeVN0cmluZyIsIlBhZ2VNYW5hZ2VyIiwiVFJBTlNMQVRJT05TIiwiaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSIsImRpY3Rpb25hcnkiLCJPYmplY3QiLCJrZXlzIiwiY2hvb3NlQWN0aXZlRGljdGlvbmFyeSIsImkiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04iLCJ2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04iLCJhY3RpdmVEaWN0aW9uYXJ5IiwibG9jYWxpemF0aW9ucyIsInZhbHVlcyIsInRyYW5zbGF0aW9uS2V5cyIsIm1hcCIsImtleSIsInBvcCIsInJlZHVjZSIsImFjYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFcUJBLE07OztBQUNqQixrQkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUNqQixvQ0FBTUEsT0FBTjtBQUNBLFVBQUtDLG9CQUFMLEdBQTRCQywwR0FBMkIsQ0FBQ0YsT0FBRCxDQUF2RDtBQUNBLFVBQUtHLFVBQUwsR0FBa0JDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBbEM7QUFDQSxVQUFLQyxlQUFMLEdBQXVCQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBdkI7QUFKaUI7QUFLcEI7Ozs7U0FFREMsTyxHQUFBLG1CQUFVO0FBQ04sU0FBS0MsUUFBTDtBQUNILEc7O1NBRURBLFEsR0FBQSxvQkFBVztBQUNQLFNBQUtSLFVBQUwsQ0FBZ0JTLFFBQWhCLENB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QUNwRCxNQUFReUYsd0JBQVIsR0FBd0d6RixPQUF4RyxDQUFReUYsd0JBQVI7QUFBQSxNQUFrQ0MsZ0NBQWxDLEdBQXdHMUYsT0FBeEcsQ0FBa0MwRixnQ0FBbEM7QUFBQSxNQUFvRUMsK0JBQXBFLEdBQXdHM0YsT0FBeEcsQ0FBb0UyRiwrQkFBcEU7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBR0wsc0JBQXNCLENBQUNFLHdCQUFELEVBQTJCQyxnQ0FBM0IsRUFBNkRDLCtCQUE3RCxDQUEvQztBQUNBLE1BQU1FLGFBQWEsR0FBR1IsTUFBTSxDQUFDUyxNQUFQLENBQWNGLGdCQUFnQixDQUFDVixZQUFELENBQTlCLENBQXRCO0FBQ0EsTUFBTWEsZUFBZSxHQUFHVixNQUFNLENBQUNDLElBQVAsQ0FBWU0sZ0JBQWdCLENBQUNWLFlBQUQsQ0FBNUIsRUFBNENjLEdBQTVDLENBQWdELFVBQUFDLEdBQUc7QUFBQSxXQUFJQSxHQUFHLENBQUMvRCxLQUFKLENBQVUsR0FBVixFQUFlZ0UsR0FBZixFQUFKO0FBQUEsR0FBbkQsQ0FBeEI7QUFFQSxTQUFPSCxlQUFlLENBQUNJLE1BQWhCLENBQXVCLFVBQUNDLEdBQUQsRUFBTUgsR0FBTixFQUFXVCxDQUFYLEVBQWlCO0FBQzNDWSxPQUFHLENBQUNILEdBQUQsQ0FBSCxHQUFXSixhQUFhLENBQUNMLENBQUQsQ0FBeEI7QUFDQSxXQUFPWSxHQUFQO0FBQ0gsR0FITSxFQUdKLEVBSEksQ0FBUDtBQUlILENBVk0sQyIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2F0YWxvZ1BhZ2UgZnJvbSAnLi9jYXRhbG9nJztcbmltcG9ydCB7IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSB9IGZyb20gJy4uL3RoZW1lL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmFuZHMgZXh0ZW5kcyBDYXRhbG9nUGFnZSB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeSA9IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeShjb250ZXh0KTtcbiAgICAgICAgdGhpcy5jdXJyZW50VXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgIHRoaXMuYnJhbmRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JyYW5kcy1maWx0ZXInKVxuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIHRoaXMuY2hlY2tVUkwoKVxuICAgIH1cblxuICAgIGNoZWNrVVJMKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRVcmwuaW5jbHVkZXMoJ2JyYW5kcy8/c3RhcnRpbmcnKSA/IHRoaXMuY2xlYXJCcmFuZHNDb250YWluZXIoKSA6IG51bGw7XG4gICAgfVxuXG4gICAgY2xlYXJCcmFuZHNDb250YWluZXIgKCkge1xuICAgICAgICB0aGlzLmJyYW5kc0NvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz0nbXktbG9hZGVyJyBzdHlsZT1cImRpc3BsYXk6ZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGFsaWdoLWl0ZW1zOiBjZW50ZXI7XCI+PGltZyBzcmM9XCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL2IvYjEvTG9hZGluZ19pY29uLmdpZj8yMDE1MTAyNDAzNDkyMVwiPjwvZGl2PmA7ICAgICAgICB0aGlzLmdldEJyYW5kc0luZm8oKVxuICAgIH1cblxuICAgIGdldEJyYW5kc0luZm8gKCkge1xuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmNvbnRleHQudG9rZW47XG4gICAgICAgIHZhciBzZXJ2ZXJEYXRhID0gJydcblxuICAgICAgICBmZXRjaCgnL2dyYXBocWwnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBxdWVyeTogYFxuICAgICAgICAgICAgICAgIHF1ZXJ5IE15Rmlyc3RRdWVyeSB7XG4gICAgICAgICAgICAgICAgc2l0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmFuZHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmxPcmlnaW5hbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHRUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFEZXNjcmlwdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgc2VydmVyRGF0YSA9IGpzb24/LmRhdGE/LnNpdGU/LmJyYW5kcz8uZWRnZXM7XG4gICAgICAgICAgICB2YXIgZmlsdGVyUGFyYW1ldHIgPSB0aGlzLmN1cnJlbnRVcmwuc3BsaXQoJycpLnNsaWNlKC0xKS5qb2luKCcnKTtcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlclNlcnZlckRhdGEgPSBzZXJ2ZXJEYXRhLmZpbHRlcigoZWwpID0+IGVsLm5vZGUubmFtZVswXS50b0xvd2VyQ2FzZSgpID09IGZpbHRlclBhcmFtZXRyKTtcbiAgICAgICAgICAgIGlmIChmaWx0ZXJTZXJ2ZXJEYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYnJhbmRzQ29udGFpbmVyLmlubmVySFRNTCA9Jyc7XG4gICAgICAgICAgICAgICAgdGhpcy5icmFuZHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmxleCcpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGVsID0gMDsgZWwgPCBmaWx0ZXJTZXJ2ZXJEYXRhLmxlbmd0aDsgZWwrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZpbHRlcmVkLWJyYW5kX19pdGVtJylcbiAgICAgICAgICAgICAgICAgICAgbGkuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9J2JyYW5kLWltZ19fY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPScvJHtmaWx0ZXJTZXJ2ZXJEYXRhW2VsXT8ubm9kZT8ubmFtZX0nPjxpbWcgc3JjPScke2ZpbHRlclNlcnZlckRhdGFbZWxdPy5ub2RlPy5kZWZhdWx0SW1hZ2U/LnVybE9yaWdpbmFsfScgYWx0PScke2ZpbHRlclNlcnZlckRhdGFbZWxdPy5ub2RlPy5uYW1lfScvPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJyYW5kLWluZm9fX2NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImJyYW5kLW5hbWVcIj48YSBocmVmPScvJHtmaWx0ZXJTZXJ2ZXJEYXRhW2VsXT8ubm9kZT8ubmFtZX0nPiR7ZmlsdGVyU2VydmVyRGF0YVtlbF0/Lm5vZGU/Lm5hbWV9PC9hPjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJicmFuZC1kZXNjcmlwdGlvblwiIHN0eWxlPSdmb250LXNpemU6MjBweCc+JHtmaWx0ZXJTZXJ2ZXJEYXRhW2VsXT8ubm9kZT8uc2VvPy5tZXRhRGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5icmFuZHNDb250YWluZXIuYXBwZW5kKGxpKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5icmFuZHNDb250YWluZXIuaW5uZXJIVE1MID0gYDxwIHN0eWxlPSdmb250LXNpemU6IDIwcHg7IHRleHQtYWxpZ246IGNlbnRlcic+VGhlcmUgYXJlIG5vIEJyYW5kcyBzdGFydGluZyBmcm9tICR7ZmlsdGVyUGFyYW1ldHJ9PC9wPmBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCB1cmxVdGlscyBmcm9tICcuL2NvbW1vbi91dGlscy91cmwtdXRpbHMnO1xuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRhbG9nUGFnZSBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5pZCA9PT0gJ3NvcnQnKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzb3J0QnlTdGF0dXMnLCAnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXJyYW5nZUZvY3VzT25Tb3J0QnkoKSB7XG4gICAgICAgIGNvbnN0ICRzb3J0QnlTZWxlY3RvciA9ICQoJ1tkYXRhLXNvcnQtYnk9XCJwcm9kdWN0XCJdICNzb3J0Jyk7XG5cbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29ydEJ5U3RhdHVzJykpIHtcbiAgICAgICAgICAgICRzb3J0QnlTZWxlY3Rvci5mb2N1cygpO1xuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdzb3J0QnlTdGF0dXMnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU29ydEJ5U3VibWl0KGV2ZW50LCBjdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gJChjdXJyZW50VGFyZ2V0KS5zZXJpYWxpemUoKS5zcGxpdCgnPScpO1xuXG4gICAgICAgIHVybC5xdWVyeVtxdWVyeVBhcmFtc1swXV0gPSBxdWVyeVBhcmFtc1sxXTtcbiAgICAgICAgZGVsZXRlIHVybC5xdWVyeS5wYWdlO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsLnF1ZXJ5KSB9KTtcbiAgICB9XG59XG4iLCJjb25zdCBUUkFOU0xBVElPTlMgPSAndHJhbnNsYXRpb25zJztcbmNvbnN0IGlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkgPSAoZGljdGlvbmFyeSkgPT4gISFPYmplY3Qua2V5cyhkaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pLmxlbmd0aDtcbmNvbnN0IGNob29zZUFjdGl2ZURpY3Rpb25hcnkgPSAoLi4uZGljdGlvbmFyeUpzb25MaXN0KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWN0aW9uYXJ5SnNvbkxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGljdGlvbmFyeSA9IEpTT04ucGFyc2UoZGljdGlvbmFyeUpzb25MaXN0W2ldKTtcbiAgICAgICAgaWYgKGlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkoZGljdGlvbmFyeSkpIHtcbiAgICAgICAgICAgIHJldHVybiBkaWN0aW9uYXJ5O1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBkZWZpbmVzIFRyYW5zbGF0aW9uIERpY3Rpb25hcnkgdG8gdXNlXG4gKiBAcGFyYW0gY29udGV4dCBwcm92aWRlcyBhY2Nlc3MgdG8gMyB2YWxpZGF0aW9uIEpTT05zIGZyb20gZW4uanNvbjpcbiAqIHZhbGlkYXRpb25fbWVzc2FnZXMsIHZhbGlkYXRpb25fZmFsbGJhY2tfbWVzc2FnZXMgYW5kIGRlZmF1bHRfbWVzc2FnZXNcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgPSAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiB9ID0gY29udGV4dDtcbiAgICBjb25zdCBhY3RpdmVEaWN0aW9uYXJ5ID0gY2hvb3NlQWN0aXZlRGljdGlvbmFyeSh2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OKTtcbiAgICBjb25zdCBsb2NhbGl6YXRpb25zID0gT2JqZWN0LnZhbHVlcyhhY3RpdmVEaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pO1xuICAgIGNvbnN0IHRyYW5zbGF0aW9uS2V5cyA9IE9iamVjdC5rZXlzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubWFwKGtleSA9PiBrZXkuc3BsaXQoJy4nKS5wb3AoKSk7XG5cbiAgICByZXR1cm4gdHJhbnNsYXRpb25LZXlzLnJlZHVjZSgoYWNjLCBrZXksIGkpID0+IHtcbiAgICAgICAgYWNjW2tleV0gPSBsb2NhbGl6YXRpb25zW2ldO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9