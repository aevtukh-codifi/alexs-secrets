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
    this.brandsContainer.innerHTML = "<p style='font-size: 20px; text-align: center'>Loading...</p>";
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

        for (var el = 0; el < filterServerData.length; el++) {
          var _filterServerData$el, _filterServerData$el$, _filterServerData$el2, _filterServerData$el3, _filterServerData$el4, _filterServerData$el5, _filterServerData$el6, _filterServerData$el7, _filterServerData$el8, _filterServerData$el9, _filterServerData$el10, _filterServerData$el11, _filterServerData$el12, _filterServerData$el13;

          var li = document.createElement('li');
          li.setAttribute('class', 'filtered-brand__item');
          li.setAttribute('style', 'padding: 20px;');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYnJhbmRzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jYXRhbG9nLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzLmpzIl0sIm5hbWVzIjpbIkJyYW5kcyIsImNvbnRleHQiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeSIsImNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSIsImN1cnJlbnRVcmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJicmFuZHNDb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib25SZWFkeSIsImNoZWNrVVJMIiwiaW5jbHVkZXMiLCJjbGVhckJyYW5kc0NvbnRhaW5lciIsImlubmVySFRNTCIsImdldEJyYW5kc0luZm8iLCJ0b2tlbiIsInNlcnZlckRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJzaXRlIiwiYnJhbmRzIiwiZWRnZXMiLCJmaWx0ZXJQYXJhbWV0ciIsInNwbGl0Iiwic2xpY2UiLCJqb2luIiwiZmlsdGVyU2VydmVyRGF0YSIsImZpbHRlciIsImVsIiwibm9kZSIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImxlbmd0aCIsImxpIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImRlZmF1bHRJbWFnZSIsInVybE9yaWdpbmFsIiwic2VvIiwibWV0YURlc2NyaXB0aW9uIiwiYXBwZW5kIiwiQ2F0YWxvZ1BhZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwiYWN0aXZlRWxlbWVudCIsImlkIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImFycmFuZ2VGb2N1c09uU29ydEJ5IiwiJHNvcnRCeVNlbGVjdG9yIiwiJCIsImdldEl0ZW0iLCJmb2N1cyIsInJlbW92ZUl0ZW0iLCJvblNvcnRCeVN1Ym1pdCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsInVybCIsIlVybCIsInBhcnNlIiwicXVlcnlQYXJhbXMiLCJzZXJpYWxpemUiLCJwYWdlIiwicHJldmVudERlZmF1bHQiLCJmb3JtYXQiLCJwYXRobmFtZSIsInNlYXJjaCIsInVybFV0aWxzIiwiYnVpbGRRdWVyeVN0cmluZyIsIlBhZ2VNYW5hZ2VyIiwiVFJBTlNMQVRJT05TIiwiaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSIsImRpY3Rpb25hcnkiLCJPYmplY3QiLCJrZXlzIiwiY2hvb3NlQWN0aXZlRGljdGlvbmFyeSIsImkiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04iLCJ2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04iLCJhY3RpdmVEaWN0aW9uYXJ5IiwibG9jYWxpemF0aW9ucyIsInZhbHVlcyIsInRyYW5zbGF0aW9uS2V5cyIsIm1hcCIsImtleSIsInBvcCIsInJlZHVjZSIsImFjYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFcUJBLE07OztBQUNqQixrQkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUNqQixvQ0FBTUEsT0FBTjtBQUNBLFVBQUtDLG9CQUFMLEdBQTRCQywwR0FBMkIsQ0FBQ0YsT0FBRCxDQUF2RDtBQUNBLFVBQUtHLFVBQUwsR0FBa0JDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBbEM7QUFDQSxVQUFLQyxlQUFMLEdBQXVCQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBdkI7QUFKaUI7QUFLcEI7Ozs7U0FFREMsTyxHQUFBLG1CQUFVO0FBQ04sU0FBS0MsUUFBTDtBQUNILEc7O1NBRURBLFEsR0FBQSxvQkFBVztBQUNQLFNBQUtSLFVBQUwsQ0FBZ0JTLFFBQWhCLENBQXlCLGtCQUF6QixJQUErQyxL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QUFRdUYsd0JBQVI7QUFBQSxNQUFrQ0MsZ0NBQWxDLEdBQXdHeEYsT0FBeEcsQ0FBa0N3RixnQ0FBbEM7QUFBQSxNQUFvRUMsK0JBQXBFLEdBQXdHekYsT0FBeEcsQ0FBb0V5RiwrQkFBcEU7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBR0wsc0JBQXNCLENBQUNFLHdCQUFELEVBQTJCQyxnQ0FBM0IsRUFBNkRDLCtCQUE3RCxDQUEvQztBQUNBLE1BQU1FLGFBQWEsR0FBR1IsTUFBTSxDQUFDUyxNQUFQLENBQWNGLGdCQUFnQixDQUFDVixZQUFELENBQTlCLENBQXRCO0FBQ0EsTUFBTWEsZUFBZSxHQUFHVixNQUFNLENBQUNDLElBQVAsQ0FBWU0sZ0JBQWdCLENBQUNWLFlBQUQsQ0FBNUIsRUFBNENjLEdBQTVDLENBQWdELFVBQUFDLEdBQUc7QUFBQSxXQUFJQSxHQUFHLENBQUM3RCxLQUFKLENBQVUsR0FBVixFQUFlOEQsR0FBZixFQUFKO0FBQUEsR0FBbkQsQ0FBeEI7QUFFQSxTQUFPSCxlQUFlLENBQUNJLE1BQWhCLENBQXVCLFVBQUNDLEdBQUQsRUFBTUgsR0FBTixFQUFXVCxDQUFYLEVBQWlCO0FBQzNDWSxPQUFHLENBQUNILEdBQUQsQ0FBSCxHQUFXSixhQUFhLENBQUNMLENBQUQsQ0FBeEI7QUFDQSxXQUFPWSxHQUFQO0FBQ0gsR0FITSxFQUdKLEVBSEksQ0FBUDtBQUlILENBVk0sQyIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2F0YWxvZ1BhZ2UgZnJvbSAnLi9jYXRhbG9nJztcbmltcG9ydCB7IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSB9IGZyb20gJy4uL3RoZW1lL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmFuZHMgZXh0ZW5kcyBDYXRhbG9nUGFnZSB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeSA9IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeShjb250ZXh0KTtcbiAgICAgICAgdGhpcy5jdXJyZW50VXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgIHRoaXMuYnJhbmRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JyYW5kcy1maWx0ZXInKVxuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIHRoaXMuY2hlY2tVUkwoKVxuICAgIH1cblxuICAgIGNoZWNrVVJMKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRVcmwuaW5jbHVkZXMoJ2JyYW5kcy8/c3RhcnRpbmcnKSA/IHRoaXMuY2xlYXJCcmFuZHNDb250YWluZXIoKSA6IG51bGw7XG4gICAgfVxuXG4gICAgY2xlYXJCcmFuZHNDb250YWluZXIgKCkge1xuICAgICAgICB0aGlzLmJyYW5kc0NvbnRhaW5lci5pbm5lckhUTUwgPSBgPHAgc3R5bGU9J2ZvbnQtc2l6ZTogMjBweDsgdGV4dC1hbGlnbjogY2VudGVyJz5Mb2FkaW5nLi4uPC9wPmA7XG4gICAgICAgIHRoaXMuZ2V0QnJhbmRzSW5mbygpXG4gICAgfVxuXG4gICAgZ2V0QnJhbmRzSW5mbyAoKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY29udGV4dC50b2tlbjtcbiAgICAgICAgdmFyIHNlcnZlckRhdGEgPSAnJ1xuXG4gICAgICAgIGZldGNoKCcvZ3JhcGhxbCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiBgXG4gICAgICAgICAgICAgICAgcXVlcnkgTXlGaXJzdFF1ZXJ5IHtcbiAgICAgICAgICAgICAgICBzaXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyYW5kcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0SW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybE9yaWdpbmFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YURlc2NyaXB0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9KVxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICBzZXJ2ZXJEYXRhID0ganNvbj8uZGF0YT8uc2l0ZT8uYnJhbmRzPy5lZGdlcztcbiAgICAgICAgICAgIHZhciBmaWx0ZXJQYXJhbWV0ciA9IHRoaXMuY3VycmVudFVybC5zcGxpdCgnJykuc2xpY2UoLTEpLmpvaW4oJycpO1xuICAgICAgICAgICAgY29uc3QgZmlsdGVyU2VydmVyRGF0YSA9IHNlcnZlckRhdGEuZmlsdGVyKChlbCkgPT4gZWwubm9kZS5uYW1lWzBdLnRvTG93ZXJDYXNlKCkgPT0gZmlsdGVyUGFyYW1ldHIpO1xuICAgICAgICAgICAgaWYgKGZpbHRlclNlcnZlckRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5icmFuZHNDb250YWluZXIuaW5uZXJIVE1MID0nJ1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGVsID0gMDsgZWwgPCBmaWx0ZXJTZXJ2ZXJEYXRhLmxlbmd0aDsgZWwrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZpbHRlcmVkLWJyYW5kX19pdGVtJylcbiAgICAgICAgICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKCdzdHlsZScsICdwYWRkaW5nOiAyMHB4OycpXG4gICAgICAgICAgICAgICAgICAgIGxpLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPSdicmFuZC1pbWdfX2NvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nLyR7ZmlsdGVyU2VydmVyRGF0YVtlbF0/Lm5vZGU/Lm5hbWV9Jz48aW1nIHNyYz0nJHtmaWx0ZXJTZXJ2ZXJEYXRhW2VsXT8ubm9kZT8uZGVmYXVsdEltYWdlPy51cmxPcmlnaW5hbH0nIGFsdD0nJHtmaWx0ZXJTZXJ2ZXJEYXRhW2VsXT8ubm9kZT8ubmFtZX0nLz48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJicmFuZC1pbmZvX19jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJicmFuZC1uYW1lXCI+PGEgaHJlZj0nLyR7ZmlsdGVyU2VydmVyRGF0YVtlbF0/Lm5vZGU/Lm5hbWV9Jz4ke2ZpbHRlclNlcnZlckRhdGFbZWxdPy5ub2RlPy5uYW1lfTwvYT48L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYnJhbmQtZGVzY3JpcHRpb25cIiBzdHlsZT0nZm9udC1zaXplOjIwcHgnPiR7ZmlsdGVyU2VydmVyRGF0YVtlbF0/Lm5vZGU/LnNlbz8ubWV0YURlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnJhbmRzQ29udGFpbmVyLmFwcGVuZChsaSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYnJhbmRzQ29udGFpbmVyLmlubmVySFRNTCA9IGA8cCBzdHlsZT0nZm9udC1zaXplOiAyMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXInPlRoZXJlIGFyZSBubyBCcmFuZHMgc3RhcnRpbmcgZnJvbSAke2ZpbHRlclBhcmFtZXRyfTwvcD5gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi9jb21tb24vdXRpbHMvdXJsLXV0aWxzJztcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0YWxvZ1BhZ2UgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuaWQgPT09ICdzb3J0Jykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc29ydEJ5U3RhdHVzJywgJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFycmFuZ2VGb2N1c09uU29ydEJ5KCkge1xuICAgICAgICBjb25zdCAkc29ydEJ5U2VsZWN0b3IgPSAkKCdbZGF0YS1zb3J0LWJ5PVwicHJvZHVjdFwiXSAjc29ydCcpO1xuXG4gICAgICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvcnRCeVN0YXR1cycpKSB7XG4gICAgICAgICAgICAkc29ydEJ5U2VsZWN0b3IuZm9jdXMoKTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc29ydEJ5U3RhdHVzJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNvcnRCeVN1Ym1pdChldmVudCwgY3VycmVudFRhcmdldCkge1xuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9ICQoY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkuc3BsaXQoJz0nKTtcblxuICAgICAgICB1cmwucXVlcnlbcXVlcnlQYXJhbXNbMF1dID0gcXVlcnlQYXJhbXNbMV07XG4gICAgICAgIGRlbGV0ZSB1cmwucXVlcnkucGFnZTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybC5xdWVyeSkgfSk7XG4gICAgfVxufVxuIiwiY29uc3QgVFJBTlNMQVRJT05TID0gJ3RyYW5zbGF0aW9ucyc7XG5jb25zdCBpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5ID0gKGRpY3Rpb25hcnkpID0+ICEhT2JqZWN0LmtleXMoZGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKS5sZW5ndGg7XG5jb25zdCBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5ID0gKC4uLmRpY3Rpb25hcnlKc29uTGlzdCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGljdGlvbmFyeUpzb25MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRpY3Rpb25hcnkgPSBKU09OLnBhcnNlKGRpY3Rpb25hcnlKc29uTGlzdFtpXSk7XG4gICAgICAgIGlmIChpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5KGRpY3Rpb25hcnkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZGljdGlvbmFyeTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogZGVmaW5lcyBUcmFuc2xhdGlvbiBEaWN0aW9uYXJ5IHRvIHVzZVxuICogQHBhcmFtIGNvbnRleHQgcHJvdmlkZXMgYWNjZXNzIHRvIDMgdmFsaWRhdGlvbiBKU09OcyBmcm9tIGVuLmpzb246XG4gKiB2YWxpZGF0aW9uX21lc3NhZ2VzLCB2YWxpZGF0aW9uX2ZhbGxiYWNrX21lc3NhZ2VzIGFuZCBkZWZhdWx0X21lc3NhZ2VzXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5ID0gKGNvbnRleHQpID0+IHtcbiAgICBjb25zdCB7IHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04gfSA9IGNvbnRleHQ7XG4gICAgY29uc3QgYWN0aXZlRGljdGlvbmFyeSA9IGNob29zZUFjdGl2ZURpY3Rpb25hcnkodmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTik7XG4gICAgY29uc3QgbG9jYWxpemF0aW9ucyA9IE9iamVjdC52YWx1ZXMoYWN0aXZlRGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKTtcbiAgICBjb25zdCB0cmFuc2xhdGlvbktleXMgPSBPYmplY3Qua2V5cyhhY3RpdmVEaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pLm1hcChrZXkgPT4ga2V5LnNwbGl0KCcuJykucG9wKCkpO1xuXG4gICAgcmV0dXJuIHRyYW5zbGF0aW9uS2V5cy5yZWR1Y2UoKGFjYywga2V5LCBpKSA9PiB7XG4gICAgICAgIGFjY1trZXldID0gbG9jYWxpemF0aW9uc1tpXTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==