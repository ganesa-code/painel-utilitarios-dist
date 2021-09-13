webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/react-sticky-mouse-tooltip/dist/MouseTooltip.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-sticky-mouse-tooltip/dist/MouseTooltip.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // eslint-disable-line import/no-extraneous-dependencies

class MouseTooltip extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      xPosition: 0,
      yPosition: 0,
      mouseMoved: false,
      listenerActive: false
    });

    _defineProperty(this, "getTooltipPosition", ({
      clientX: xPosition,
      clientY: yPosition
    }) => {
      this.setState({
        xPosition,
        yPosition,
        mouseMoved: true
      });
    });

    _defineProperty(this, "addListener", () => {
      window.addEventListener('mousemove', this.getTooltipPosition);
      this.setState({
        listenerActive: true
      });
    });

    _defineProperty(this, "removeListener", () => {
      window.removeEventListener('mousemove', this.getTooltipPosition);
      this.setState({
        listenerActive: false
      });
    });

    _defineProperty(this, "updateListener", () => {
      if (!this.state.listenerActive && this.props.visible) {
        this.addListener();
      }

      if (this.state.listenerActive && !this.props.visible) {
        this.removeListener();
      }
    });
  }

  componentDidMount() {
    this.addListener();
  }

  componentDidUpdate() {
    this.updateListener();
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: this.props.className,
      style: _objectSpread({
        display: this.props.visible && this.state.mouseMoved ? 'block' : 'none',
        position: 'fixed',
        top: this.state.yPosition + this.props.offsetY,
        left: this.state.xPosition + this.props.offsetX
      }, this.props.style)
    }, this.props.children);
  }

}

_defineProperty(MouseTooltip, "defaultProps", {
  visible: true,
  offsetX: 0,
  offsetY: 0
});

MouseTooltip.propTypes = {
  visible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  offsetX: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  offsetY: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object // eslint-disable-line react/forbid-prop-types

};
/* harmony default export */ __webpack_exports__["default"] = (MouseTooltip);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Nb3VzZVRvb2x0aXAuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiTW91c2VUb29sdGlwIiwiUHVyZUNvbXBvbmVudCIsInhQb3NpdGlvbiIsInlQb3NpdGlvbiIsIm1vdXNlTW92ZWQiLCJsaXN0ZW5lckFjdGl2ZSIsImNsaWVudFgiLCJjbGllbnRZIiwic2V0U3RhdGUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0VG9vbHRpcFBvc2l0aW9uIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0YXRlIiwicHJvcHMiLCJ2aXNpYmxlIiwiYWRkTGlzdGVuZXIiLCJyZW1vdmVMaXN0ZW5lciIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50RGlkVXBkYXRlIiwidXBkYXRlTGlzdGVuZXIiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbmRlciIsImNsYXNzTmFtZSIsImRpc3BsYXkiLCJwb3NpdGlvbiIsInRvcCIsIm9mZnNldFkiLCJsZWZ0Iiwib2Zmc2V0WCIsInN0eWxlIiwiY2hpbGRyZW4iLCJwcm9wVHlwZXMiLCJib29sIiwibm9kZSIsImlzUmVxdWlyZWQiLCJudW1iZXIiLCJzdHJpbmciLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QixDLENBQW9DOztBQUVwQyxNQUFNQyxZQUFOLFNBQTJCRixLQUFLLENBQUNHLGFBQWpDLENBQStDO0FBQUE7QUFBQTs7QUFBQSxtQ0FPckM7QUFDTkMsTUFBQUEsU0FBUyxFQUFFLENBREw7QUFFTkMsTUFBQUEsU0FBUyxFQUFFLENBRkw7QUFHTkMsTUFBQUEsVUFBVSxFQUFFLEtBSE47QUFJTkMsTUFBQUEsY0FBYyxFQUFFO0FBSlYsS0FQcUM7O0FBQUEsZ0RBMEJ4QixDQUFDO0FBQUVDLE1BQUFBLE9BQU8sRUFBRUosU0FBWDtBQUFzQkssTUFBQUEsT0FBTyxFQUFFSjtBQUEvQixLQUFELEtBQWdEO0FBQ25FLFdBQUtLLFFBQUwsQ0FBYztBQUNaTixRQUFBQSxTQURZO0FBRVpDLFFBQUFBLFNBRlk7QUFHWkMsUUFBQUEsVUFBVSxFQUFFO0FBSEEsT0FBZDtBQUtELEtBaEM0Qzs7QUFBQSx5Q0FrQy9CLE1BQU07QUFDbEJLLE1BQUFBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUMsS0FBS0Msa0JBQTFDO0FBQ0EsV0FBS0gsUUFBTCxDQUFjO0FBQUVILFFBQUFBLGNBQWMsRUFBRTtBQUFsQixPQUFkO0FBQ0QsS0FyQzRDOztBQUFBLDRDQXVDNUIsTUFBTTtBQUNyQkksTUFBQUEsTUFBTSxDQUFDRyxtQkFBUCxDQUEyQixXQUEzQixFQUF3QyxLQUFLRCxrQkFBN0M7QUFDQSxXQUFLSCxRQUFMLENBQWM7QUFBRUgsUUFBQUEsY0FBYyxFQUFFO0FBQWxCLE9BQWQ7QUFDRCxLQTFDNEM7O0FBQUEsNENBNEM1QixNQUFNO0FBQ3JCLFVBQUksQ0FBQyxLQUFLUSxLQUFMLENBQVdSLGNBQVosSUFBOEIsS0FBS1MsS0FBTCxDQUFXQyxPQUE3QyxFQUFzRDtBQUNwRCxhQUFLQyxXQUFMO0FBQ0Q7O0FBRUQsVUFBSSxLQUFLSCxLQUFMLENBQVdSLGNBQVgsSUFBNkIsQ0FBQyxLQUFLUyxLQUFMLENBQVdDLE9BQTdDLEVBQXNEO0FBQ3BELGFBQUtFLGNBQUw7QUFDRDtBQUNGLEtBcEQ0QztBQUFBOztBQWM3Q0MsRUFBQUEsaUJBQWlCLEdBQUc7QUFDbEIsU0FBS0YsV0FBTDtBQUNEOztBQUVERyxFQUFBQSxrQkFBa0IsR0FBRztBQUNuQixTQUFLQyxjQUFMO0FBQ0Q7O0FBRURDLEVBQUFBLG9CQUFvQixHQUFHO0FBQ3JCLFNBQUtKLGNBQUw7QUFDRDs7QUE4QkRLLEVBQUFBLE1BQU0sR0FBRztBQUNQLFdBQ0U7QUFDRSxNQUFBLFNBQVMsRUFBRSxLQUFLUixLQUFMLENBQVdTLFNBRHhCO0FBRUUsTUFBQSxLQUFLO0FBQ0hDLFFBQUFBLE9BQU8sRUFBRSxLQUFLVixLQUFMLENBQVdDLE9BQVgsSUFBc0IsS0FBS0YsS0FBTCxDQUFXVCxVQUFqQyxHQUE4QyxPQUE5QyxHQUF3RCxNQUQ5RDtBQUVIcUIsUUFBQUEsUUFBUSxFQUFFLE9BRlA7QUFHSEMsUUFBQUEsR0FBRyxFQUFFLEtBQUtiLEtBQUwsQ0FBV1YsU0FBWCxHQUF1QixLQUFLVyxLQUFMLENBQVdhLE9BSHBDO0FBSUhDLFFBQUFBLElBQUksRUFBRSxLQUFLZixLQUFMLENBQVdYLFNBQVgsR0FBdUIsS0FBS1ksS0FBTCxDQUFXZTtBQUpyQyxTQUtBLEtBQUtmLEtBQUwsQ0FBV2dCLEtBTFg7QUFGUCxPQVVHLEtBQUtoQixLQUFMLENBQVdpQixRQVZkLENBREY7QUFjRDs7QUFyRTRDOztnQkFBekMvQixZLGtCQUNrQjtBQUNwQmUsRUFBQUEsT0FBTyxFQUFFLElBRFc7QUFFcEJjLEVBQUFBLE9BQU8sRUFBRSxDQUZXO0FBR3BCRixFQUFBQSxPQUFPLEVBQUU7QUFIVyxDOztBQXVFeEIzQixZQUFZLENBQUNnQyxTQUFiLEdBQXlCO0FBQ3ZCakIsRUFBQUEsT0FBTyxFQUFFaEIsU0FBUyxDQUFDa0MsSUFESTtBQUV2QkYsRUFBQUEsUUFBUSxFQUFFaEMsU0FBUyxDQUFDbUMsSUFBVixDQUFlQyxVQUZGO0FBR3ZCTixFQUFBQSxPQUFPLEVBQUU5QixTQUFTLENBQUNxQyxNQUhJO0FBSXZCVCxFQUFBQSxPQUFPLEVBQUU1QixTQUFTLENBQUNxQyxNQUpJO0FBS3ZCYixFQUFBQSxTQUFTLEVBQUV4QixTQUFTLENBQUNzQyxNQUxFO0FBTXZCUCxFQUFBQSxLQUFLLEVBQUUvQixTQUFTLENBQUN1QyxNQU5NLENBTUU7O0FBTkYsQ0FBekI7QUFTQSxlQUFldEMsWUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuXG5jbGFzcyBNb3VzZVRvb2x0aXAgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB2aXNpYmxlOiB0cnVlLFxuICAgIG9mZnNldFg6IDAsXG4gICAgb2Zmc2V0WTogMCxcbiAgfTtcblxuICBzdGF0ZSA9IHtcbiAgICB4UG9zaXRpb246IDAsXG4gICAgeVBvc2l0aW9uOiAwLFxuICAgIG1vdXNlTW92ZWQ6IGZhbHNlLFxuICAgIGxpc3RlbmVyQWN0aXZlOiBmYWxzZSxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmFkZExpc3RlbmVyKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy51cGRhdGVMaXN0ZW5lcigpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcigpO1xuICB9XG5cbiAgZ2V0VG9vbHRpcFBvc2l0aW9uID0gKHsgY2xpZW50WDogeFBvc2l0aW9uLCBjbGllbnRZOiB5UG9zaXRpb24gfSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgeFBvc2l0aW9uLFxuICAgICAgeVBvc2l0aW9uLFxuICAgICAgbW91c2VNb3ZlZDogdHJ1ZSxcbiAgICB9KTtcbiAgfTtcblxuICBhZGRMaXN0ZW5lciA9ICgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5nZXRUb29sdGlwUG9zaXRpb24pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBsaXN0ZW5lckFjdGl2ZTogdHJ1ZSB9KTtcbiAgfTtcblxuICByZW1vdmVMaXN0ZW5lciA9ICgpID0+IHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5nZXRUb29sdGlwUG9zaXRpb24pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBsaXN0ZW5lckFjdGl2ZTogZmFsc2UgfSk7XG4gIH07XG5cbiAgdXBkYXRlTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmxpc3RlbmVyQWN0aXZlICYmIHRoaXMucHJvcHMudmlzaWJsZSkge1xuICAgICAgdGhpcy5hZGRMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlLmxpc3RlbmVyQWN0aXZlICYmICF0aGlzLnByb3BzLnZpc2libGUpIHtcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoKTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgZGlzcGxheTogdGhpcy5wcm9wcy52aXNpYmxlICYmIHRoaXMuc3RhdGUubW91c2VNb3ZlZCA/ICdibG9jaycgOiAnbm9uZScsXG4gICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgdG9wOiB0aGlzLnN0YXRlLnlQb3NpdGlvbiArIHRoaXMucHJvcHMub2Zmc2V0WSxcbiAgICAgICAgICBsZWZ0OiB0aGlzLnN0YXRlLnhQb3NpdGlvbiArIHRoaXMucHJvcHMub2Zmc2V0WCxcbiAgICAgICAgICAuLi50aGlzLnByb3BzLnN0eWxlLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuTW91c2VUb29sdGlwLnByb3BUeXBlcyA9IHtcbiAgdmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBvZmZzZXRYOiBQcm9wVHlwZXMubnVtYmVyLFxuICBvZmZzZXRZOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb3VzZVRvb2x0aXA7XG4iXX0=

/***/ }),

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var react_sticky_mouse_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-sticky-mouse-tooltip */ "./node_modules/react-sticky-mouse-tooltip/dist/MouseTooltip.js");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/Header/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _contexts_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../contexts/auth */ "./src/contexts/auth.tsx");




var _jsxFileName = "C:\\Users\\User\\Desktop\\Projetos\\utilitarios-resulth\\cliente-front\\src\\components\\Header\\index.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }















var drawerWidth = 240;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
  var _drawerClose;

  return {
    root: {
      display: "flex"
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: "calc(100% - ".concat(drawerWidth, "px)"),
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      marginRight: 36
    }, "@media (max-width: 600px)", {
      marginRight: "1rem"
    }),
    hide: {
      display: "none"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
      background: "#233548"
    },
    drawerOpen: {
      width: drawerWidth,
      background: "#233548",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      }),
      paddingTop: "1em",
      "&::-webkit-scrollbar": {
        width: 4
      },
      "&::-webkit-scrollbar-track": {
        boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)"
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(221, 154, 66, 0.7)",
        outline: "1px solid slategrey"
      }
    },
    drawerBackground: {
      background: "#233548"
    },
    drawerClose: (_drawerClose = {
      background: "#233548",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1
    }, Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_drawerClose, theme.breakpoints.up("sm"), {
      width: theme.spacing(8) + 1
    }), Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_drawerClose, "paddingTop", "1em"), Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_drawerClose, "&::-webkit-scrollbar", {
      width: 4
    }), Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_drawerClose, "&::-webkit-scrollbar-track", {
      boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)"
    }), Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_drawerClose, "&::-webkit-scrollbar-thumb", {
      backgroundColor: "rgba(221, 154, 66, 0.7)",
      outline: "1px solid slategrey"
    }), _drawerClose),
    toolbar: _objectSpread({
      display: "flex",
      height: "84px",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1)
    }, theme.mixins.toolbar),
    content: {
      flexGrow: 1
    },
    link: Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      margin: "0 0 0 auto"
    }, "@media (max-width: 600px)", {
      visibility: "hidden",
      opacity: 0,
      display: "none"
    }),
    logo: {
      margin: "0 0 0 auto",
      width: "250px",
      height: "auto"
    },
    mobLogo: {
      margin: "0 0 0 auto",
      width: "140px",
      height: "auto"
    },
    shiftTextLeft: {
      marginLeft: "0px"
    },
    shiftTextRight: {
      marginLeft: drawerWidth
    }
  };
});
function Header(_ref) {
  _s();

  var _clsx3, _user$permissions;

  var open = _ref.open,
      handleDrawerOpen = _ref.handleDrawerOpen,
      handleDrawerClose = _ref.handleDrawerClose;
  var classes = useStyles();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["useTheme"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      toggleMouseTooltip = _useState[0],
      setToggleMouseTooltip = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(""),
      titleTooltip = _useState2[0],
      setTitleTooltip = _useState2[1];

  var _useAuth = Object(_contexts_auth__WEBPACK_IMPORTED_MODULE_15__["useAuth"])(),
      logout = _useAuth.logout,
      user = _useAuth.user,
      filialPrincipal = _useAuth.filialPrincipal;

  var windowSize = window.innerWidth;
  var maxMobSize = 700;

  var handleMouseToogleTooltip = function handleMouseToogleTooltip(state, title) {
    if (!open) {
      setTitleTooltip(title);
      setToggleMouseTooltip(state);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["AppBar"], {
      position: "fixed",
      style: {
        background: "#233548",
        padding: "0.6rem 0.6rem"
      },
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])(classes.appBar, Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, classes.appBarShift, open)),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], {
        style: {
          display: "flex",
          justifyContent: "space-between"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
          edge: "start",
          color: "inherit",
          "aria-label": "open drawer",
          onClick: handleDrawerOpen,
          className: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])(classes.menuButton, Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, classes.hide, open)),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiMenu"], {
            color: "#DD9A42",
            size: 30
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 11
        }, this), user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a.headerInfo,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a.headerUserInfo,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a.spanUser,
              children: user.USUARIO
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a.spanFilial,
              children: "".concat(filialPrincipal.CODEMPRESA, " - ").concat(filialPrincipal.NOMERED)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiLogOut"], {
            onClick: logout,
            size: 20,
            color: "#f4f4f4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "/",
          className: classes.link,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: windowSize > maxMobSize ? classes.logo : classes.mobLogo,
            src: "/images/utilitarios-logo.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 7
    }, this), windowSize > maxMobSize ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_9__["default"], {
      variant: "permanent",
      classes: {
        paper: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])((_clsx3 = {}, Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx3, classes.drawerOpen, open), Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx3, classes.drawerClose, !open), _clsx3))
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.toolbar,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
          onClick: handleDrawerClose,
          children: theme.direction === "rtl" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiChevronRight"], {
            color: "#DD9A42"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 17
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiChevronLeft"], {
            color: "#DD9A42"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 252,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: "sideBar-ul",
        children: [(user === null || user === void 0 ? void 0 : user.permissions.consultarProdutos) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/consultar-produto",
            onMouseEnter: function onMouseEnter() {
              return handleMouseToogleTooltip(true, "Consultar Produto");
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiSearch"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 266,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 265,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Consultar Produtos"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 268,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 259,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 15
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.parametrosGerais) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/parametros-gerais",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiTool"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 280,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 279,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Parâmetros Gerais"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 282,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 278,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/gerar-cod-barras",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__["AiOutlineBarcode"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 293,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 292,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Gerar Código de Barras"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 295,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 291,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 13
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.contasAReceber) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/receber",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaRegMoneyBillAlt"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 307,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 306,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Contas a Receber"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 309,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 305,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 15
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.alteraAdmConvenio) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/altera-adm-convenio",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiCreditCard"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 321,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 320,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Alterar Adm. Convênio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 323,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 319,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 318,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 331,
          columnNumber: 13
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.digitacaoInventario) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/digitacao-inventario",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiEdit"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 337,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 336,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Digitação de Inventário"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 339,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 335,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 334,
          columnNumber: 15
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.consultarInventarios) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/consultar-inventarios",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiList"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 351,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 350,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Consultar Inventários"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 353,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 349,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 348,
          columnNumber: 15
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.comprasRequisitar) !== "SEM_ACESSO" && (user === null || user === void 0 ? void 0 : user.permissions.comprasConsultar) !== "SEM_ACESSO" && (user === null || user === void 0 ? void 0 : user.permissions.comprasPainelDoComprador) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/compras",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiDollarSign"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 367,
                columnNumber: 23
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 366,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Compras"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 369,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 365,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 364,
          columnNumber: 17
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.demandarReposicao) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/demandar-reposicao",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiPackage"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 381,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 380,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Demandar Reposição"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 383,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 379,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 378,
          columnNumber: 15
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.visualizarReposicoes) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/consultar-reposicoes",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiGrid"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 395,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 394,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Visualizar Reposições"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 397,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 393,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 392,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 405,
          columnNumber: 13
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.configuracoes) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/configuracoes",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiSettings"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 411,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 410,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Configurações"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 413,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 409,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 408,
          columnNumber: 15
        }, this), (user === null || user === void 0 ? void 0 : (_user$permissions = user.permissions) === null || _user$permissions === void 0 ? void 0 : _user$permissions.permissoes) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/permissoes",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiUser"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 425,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 424,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Permissões"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 427,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 423,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 422,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          style: {
            cursor: "pointer "
          },
          onClick: logout,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiLogOut"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 438,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 437,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Sair"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 440,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 436,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 435,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_sticky_mouse_tooltip__WEBPACK_IMPORTED_MODULE_13__["default"], {
        style: {
          zIndex: 2147483647
        },
        visible: toggleMouseTooltip,
        offsetX: 15,
        offsetY: 10,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "observacao-compra",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: titleTooltip
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 454,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 453,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 447,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_9__["default"], {
      classes: {
        paper: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])(classes.drawerBackground)
      },
      variant: "temporary",
      anchor: "top",
      open: open,
      onClose: handleDrawerClose,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: "sideBar-ul",
        children: [(user === null || user === void 0 ? void 0 : user.permissions.consultarProdutos) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/consultar-produto",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiSearch"], {
                size: 30,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 473,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 472,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              primary: "Consultar Produtos"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 475,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 471,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 470,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 480,
          columnNumber: 13
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.digitacaoInventario) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/digitacao-inventario",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiEdit"], {
                size: 30,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 486,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 485,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              primary: "Digitação de Inventário"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 488,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 484,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 483,
          columnNumber: 15
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.comprasRequisitar) !== "SEM_ACESSO" || (user === null || user === void 0 ? void 0 : user.permissions.comprasConsultar) !== "SEM_ACESSO" || (user === null || user === void 0 ? void 0 : user.permissions.comprasPainelDoComprador) !== "SEM_ACESSO" || /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/compras",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiDollarSign"], {
                size: 30,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 499,
                columnNumber: 23
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 498,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              primary: "Compras"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 501,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 497,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 496,
          columnNumber: 17
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.demandarReposicao) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/demandar-reposicao",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiPackage"], {
                size: 30,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 510,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 509,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              primary: "Demandar Reposição"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 512,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 508,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 507,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 516,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          onClick: logout,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiLogOut"], {
                size: 30,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 521,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 520,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              primary: "Sair"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 523,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 519,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 518,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 468,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 459,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

_s(Header, "K4wk0HhBKy34Yy9o00aUp2lMNZw=", false, function () {
  return [useStyles, _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["useTheme"], _contexts_auth__WEBPACK_IMPORTED_MODULE_15__["useAuth"]];
});

_c = Header;

var _c;

$RefreshReg$(_c, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN0aWNreS1tb3VzZS10b29sdGlwL2Rpc3QvTW91c2VUb29sdGlwLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbImRyYXdlcldpZHRoIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImRpc3BsYXkiLCJhcHBCYXIiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJlYXNpbmciLCJzaGFycCIsImR1cmF0aW9uIiwibGVhdmluZ1NjcmVlbiIsImFwcEJhclNoaWZ0IiwibWFyZ2luTGVmdCIsIndpZHRoIiwiZW50ZXJpbmdTY3JlZW4iLCJtZW51QnV0dG9uIiwibWFyZ2luUmlnaHQiLCJoaWRlIiwiZmxleFNocmluayIsIndoaXRlU3BhY2UiLCJiYWNrZ3JvdW5kIiwiZHJhd2VyT3BlbiIsInBhZGRpbmdUb3AiLCJib3hTaGFkb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJvdXRsaW5lIiwiZHJhd2VyQmFja2dyb3VuZCIsImRyYXdlckNsb3NlIiwib3ZlcmZsb3dYIiwic3BhY2luZyIsImJyZWFrcG9pbnRzIiwidXAiLCJ0b29sYmFyIiwiaGVpZ2h0IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZyIsIm1peGlucyIsImNvbnRlbnQiLCJmbGV4R3JvdyIsImxpbmsiLCJtYXJnaW4iLCJ2aXNpYmlsaXR5Iiwib3BhY2l0eSIsImxvZ28iLCJtb2JMb2dvIiwic2hpZnRUZXh0TGVmdCIsInNoaWZ0VGV4dFJpZ2h0IiwiSGVhZGVyIiwib3BlbiIsImhhbmRsZURyYXdlck9wZW4iLCJoYW5kbGVEcmF3ZXJDbG9zZSIsImNsYXNzZXMiLCJ1c2VUaGVtZSIsInVzZVN0YXRlIiwidG9nZ2xlTW91c2VUb29sdGlwIiwic2V0VG9nZ2xlTW91c2VUb29sdGlwIiwidGl0bGVUb29sdGlwIiwic2V0VGl0bGVUb29sdGlwIiwidXNlQXV0aCIsImxvZ291dCIsInVzZXIiLCJmaWxpYWxQcmluY2lwYWwiLCJ3aW5kb3dTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm1heE1vYlNpemUiLCJoYW5kbGVNb3VzZVRvb2dsZVRvb2x0aXAiLCJzdGF0ZSIsInRpdGxlIiwiY2xzeCIsInN0eWxlcyIsImhlYWRlckluZm8iLCJoZWFkZXJVc2VySW5mbyIsInNwYW5Vc2VyIiwiVVNVQVJJTyIsInNwYW5GaWxpYWwiLCJDT0RFTVBSRVNBIiwiTk9NRVJFRCIsInBhcGVyIiwiZGlyZWN0aW9uIiwicGVybWlzc2lvbnMiLCJjb25zdWx0YXJQcm9kdXRvcyIsInBhcmFtZXRyb3NHZXJhaXMiLCJjb250YXNBUmVjZWJlciIsImFsdGVyYUFkbUNvbnZlbmlvIiwiZGlnaXRhY2FvSW52ZW50YXJpbyIsImNvbnN1bHRhckludmVudGFyaW9zIiwiY29tcHJhc1JlcXVpc2l0YXIiLCJjb21wcmFzQ29uc3VsdGFyIiwiY29tcHJhc1BhaW5lbERvQ29tcHJhZG9yIiwiZGVtYW5kYXJSZXBvc2ljYW8iLCJ2aXN1YWxpemFyUmVwb3NpY29lcyIsImNvbmZpZ3VyYWNvZXMiLCJwZXJtaXNzb2VzIiwiY3Vyc29yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUFnQyxnQkFBZ0Isc0JBQXNCLE9BQU8sdURBQXVELG1DQUFtQywwREFBMEQsc0ZBQXNGLGdFQUFnRSxFQUFFLEdBQUcsRUFBRSxpQ0FBaUMsMkNBQTJDLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRS9kLDJDQUEyQyxrQkFBa0Isa0NBQWtDLHFFQUFxRSxFQUFFLEVBQUUsT0FBTyxrQkFBa0IsRUFBRSxZQUFZOztBQUVyTDtBQUNTOztBQUVuQywyQkFBMkIsNENBQUs7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtB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QUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXZDSixlQWdERSxxRUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhERixlQWtERSxxRUFBQywwREFBRDtBQUFVLGlCQUFPLEVBQUUvQixNQUFuQjtBQUFBLGlDQUNFO0FBQUEsb0NBQ0UscUVBQUMsOERBQUQ7QUFBQSxxQ0FDRSxxRUFBQyx1REFBRDtBQUFVLG9CQUFJLEVBQUUsRUFBaEI7QUFBb0IscUJBQUssRUFBQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUlFLHFFQUFDLDhEQUFEO0FBQWMscUJBQU8sRUFBRTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoUko7QUFBQSxrQkFERjtBQXlWRDs7R0EvV3VCWixNO1VBS05wRCxTLEVBQ0Z5RCxpRSxFQUk0Qk0sdUQ7OztLQVZwQlgsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjdhNzM3MWJhNDAxNWEyMTY2NmZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHsgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTsgfSkpOyB9IG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuXG5jbGFzcyBNb3VzZVRvb2x0aXAgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwic3RhdGVcIiwge1xuICAgICAgeFBvc2l0aW9uOiAwLFxuICAgICAgeVBvc2l0aW9uOiAwLFxuICAgICAgbW91c2VNb3ZlZDogZmFsc2UsXG4gICAgICBsaXN0ZW5lckFjdGl2ZTogZmFsc2VcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImdldFRvb2x0aXBQb3NpdGlvblwiLCAoe1xuICAgICAgY2xpZW50WDogeFBvc2l0aW9uLFxuICAgICAgY2xpZW50WTogeVBvc2l0aW9uXG4gICAgfSkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHhQb3NpdGlvbixcbiAgICAgICAgeVBvc2l0aW9uLFxuICAgICAgICBtb3VzZU1vdmVkOiB0cnVlXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImFkZExpc3RlbmVyXCIsICgpID0+IHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmdldFRvb2x0aXBQb3NpdGlvbik7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbGlzdGVuZXJBY3RpdmU6IHRydWVcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicmVtb3ZlTGlzdGVuZXJcIiwgKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuZ2V0VG9vbHRpcFBvc2l0aW9uKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsaXN0ZW5lckFjdGl2ZTogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwidXBkYXRlTGlzdGVuZXJcIiwgKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnN0YXRlLmxpc3RlbmVyQWN0aXZlICYmIHRoaXMucHJvcHMudmlzaWJsZSkge1xuICAgICAgICB0aGlzLmFkZExpc3RlbmVyKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnN0YXRlLmxpc3RlbmVyQWN0aXZlICYmICF0aGlzLnByb3BzLnZpc2libGUpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5hZGRMaXN0ZW5lcigpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMudXBkYXRlTGlzdGVuZXIoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IHRoaXMucHJvcHMuY2xhc3NOYW1lLFxuICAgICAgc3R5bGU6IF9vYmplY3RTcHJlYWQoe1xuICAgICAgICBkaXNwbGF5OiB0aGlzLnByb3BzLnZpc2libGUgJiYgdGhpcy5zdGF0ZS5tb3VzZU1vdmVkID8gJ2Jsb2NrJyA6ICdub25lJyxcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgIHRvcDogdGhpcy5zdGF0ZS55UG9zaXRpb24gKyB0aGlzLnByb3BzLm9mZnNldFksXG4gICAgICAgIGxlZnQ6IHRoaXMuc3RhdGUueFBvc2l0aW9uICsgdGhpcy5wcm9wcy5vZmZzZXRYXG4gICAgICB9LCB0aGlzLnByb3BzLnN0eWxlKVxuICAgIH0sIHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICB9XG5cbn1cblxuX2RlZmluZVByb3BlcnR5KE1vdXNlVG9vbHRpcCwgXCJkZWZhdWx0UHJvcHNcIiwge1xuICB2aXNpYmxlOiB0cnVlLFxuICBvZmZzZXRYOiAwLFxuICBvZmZzZXRZOiAwXG59KTtcblxuTW91c2VUb29sdGlwLnByb3BUeXBlcyA9IHtcbiAgdmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBvZmZzZXRYOiBQcm9wVHlwZXMubnVtYmVyLFxuICBvZmZzZXRZOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXNcblxufTtcbmV4cG9ydCBkZWZhdWx0IE1vdXNlVG9vbHRpcDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMM055WXk5TmIzVnpaVlJ2YjJ4MGFYQXVhbk40SWwwc0ltNWhiV1Z6SWpwYklsSmxZV04wSWl3aVVISnZjRlI1Y0dWeklpd2lUVzkxYzJWVWIyOXNkR2x3SWl3aVVIVnlaVU52YlhCdmJtVnVkQ0lzSW5oUWIzTnBkR2x2YmlJc0lubFFiM05wZEdsdmJpSXNJbTF2ZFhObFRXOTJaV1FpTENKc2FYTjBaVzVsY2tGamRHbDJaU0lzSW1Oc2FXVnVkRmdpTENKamJHbGxiblJaSWl3aWMyVjBVM1JoZEdVaUxDSjNhVzVrYjNjaUxDSmhaR1JGZG1WdWRFeHBjM1JsYm1WeUlpd2laMlYwVkc5dmJIUnBjRkJ2YzJsMGFXOXVJaXdpY21WdGIzWmxSWFpsYm5STWFYTjBaVzVsY2lJc0luTjBZWFJsSWl3aWNISnZjSE1pTENKMmFYTnBZbXhsSWl3aVlXUmtUR2x6ZEdWdVpYSWlMQ0p5WlcxdmRtVk1hWE4wWlc1bGNpSXNJbU52YlhCdmJtVnVkRVJwWkUxdmRXNTBJaXdpWTI5dGNHOXVaVzUwUkdsa1ZYQmtZWFJsSWl3aWRYQmtZWFJsVEdsemRHVnVaWElpTENKamIyMXdiMjVsYm5SWGFXeHNWVzV0YjNWdWRDSXNJbkpsYm1SbGNpSXNJbU5zWVhOelRtRnRaU0lzSW1ScGMzQnNZWGtpTENKd2IzTnBkR2x2YmlJc0luUnZjQ0lzSW05bVpuTmxkRmtpTENKc1pXWjBJaXdpYjJabWMyVjBXQ0lzSW5OMGVXeGxJaXdpWTJocGJHUnlaVzRpTENKd2NtOXdWSGx3WlhNaUxDSmliMjlzSWl3aWJtOWtaU0lzSW1selVtVnhkV2x5WldRaUxDSnVkVzFpWlhJaUxDSnpkSEpwYm1jaUxDSnZZbXBsWTNRaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRU3hQUVVGUFFTeExRVUZRTEUxQlFXdENMRTlCUVd4Q08wRkJRMEVzVDBGQlQwTXNVMEZCVUN4TlFVRnpRaXhaUVVGMFFpeERMRU5CUVc5RE96dEJRVVZ3UXl4TlFVRk5ReXhaUVVGT0xGTkJRVEpDUml4TFFVRkxMRU5CUVVOSExHRkJRV3BETEVOQlFTdERPMEZCUVVFN1FVRkJRVHM3UVVGQlFTeHRRMEZQY2tNN1FVRkRUa01zVFVGQlFVRXNVMEZCVXl4RlFVRkZMRU5CUkV3N1FVRkZUa01zVFVGQlFVRXNVMEZCVXl4RlFVRkZMRU5CUmt3N1FVRkhUa01zVFVGQlFVRXNWVUZCVlN4RlFVRkZMRXRCU0U0N1FVRkpUa01zVFVGQlFVRXNZMEZCWXl4RlFVRkZPMEZCU2xZc1MwRlFjVU03TzBGQlFVRXNaMFJCTUVKNFFpeERRVUZETzBGQlFVVkRMRTFCUVVGQkxFOUJRVThzUlVGQlJVb3NVMEZCV0R0QlFVRnpRa3NzVFVGQlFVRXNUMEZCVHl4RlFVRkZTanRCUVVFdlFpeExRVUZFTEV0QlFXZEVPMEZCUTI1RkxGZEJRVXRMTEZGQlFVd3NRMEZCWXp0QlFVTmFUaXhSUVVGQlFTeFRRVVJaTzBGQlJWcERMRkZCUVVGQkxGTkJSbGs3UVVGSFdrTXNVVUZCUVVFc1ZVRkJWU3hGUVVGRk8wRkJTRUVzVDBGQlpEdEJRVXRFTEV0QmFFTTBRenM3UVVGQlFTeDVRMEZyUXk5Q0xFMUJRVTA3UVVGRGJFSkxMRTFCUVVGQkxFMUJRVTBzUTBGQlEwTXNaMEpCUVZBc1EwRkJkMElzVjBGQmVFSXNSVUZCY1VNc1MwRkJTME1zYTBKQlFURkRPMEZCUTBFc1YwRkJTMGdzVVVGQlRDeERRVUZqTzBGQlFVVklMRkZCUVVGQkxHTkJRV01zUlVGQlJUdEJRVUZzUWl4UFFVRmtPMEZCUTBRc1MwRnlRelJET3p0QlFVRkJMRFJEUVhWRE5VSXNUVUZCVFR0QlFVTnlRa2tzVFVGQlFVRXNUVUZCVFN4RFFVRkRSeXh0UWtGQlVDeERRVUV5UWl4WFFVRXpRaXhGUVVGM1F5eExRVUZMUkN4clFrRkJOME03UVVGRFFTeFhRVUZMU0N4UlFVRk1MRU5CUVdNN1FVRkJSVWdzVVVGQlFVRXNZMEZCWXl4RlFVRkZPMEZCUVd4Q0xFOUJRV1E3UVVGRFJDeExRVEZETkVNN08wRkJRVUVzTkVOQk5FTTFRaXhOUVVGTk8wRkJRM0pDTEZWQlFVa3NRMEZCUXl4TFFVRkxVU3hMUVVGTUxFTkJRVmRTTEdOQlFWb3NTVUZCT0VJc1MwRkJTMU1zUzBGQlRDeERRVUZYUXl4UFFVRTNReXhGUVVGelJEdEJRVU53UkN4aFFVRkxReXhYUVVGTU8wRkJRMFE3TzBGQlJVUXNWVUZCU1N4TFFVRkxTQ3hMUVVGTUxFTkJRVmRTTEdOQlFWZ3NTVUZCTmtJc1EwRkJReXhMUVVGTFV5eExRVUZNTEVOQlFWZERMRTlCUVRkRExFVkJRWE5FTzBGQlEzQkVMR0ZCUVV0RkxHTkJRVXc3UVVGRFJEdEJRVU5HTEV0QmNFUTBRenRCUVVGQk96dEJRV00zUTBNc1JVRkJRVUVzYVVKQlFXbENMRWRCUVVjN1FVRkRiRUlzVTBGQlMwWXNWMEZCVER0QlFVTkVPenRCUVVWRVJ5eEZRVUZCUVN4clFrRkJhMElzUjBGQlJ6dEJRVU51UWl4VFFVRkxReXhqUVVGTU8wRkJRMFE3TzBGQlJVUkRMRVZCUVVGQkxHOUNRVUZ2UWl4SFFVRkhPMEZCUTNKQ0xGTkJRVXRLTEdOQlFVdzdRVUZEUkRzN1FVRTRRa1JMTEVWQlFVRkJMRTFCUVUwc1IwRkJSenRCUVVOUUxGZEJRMFU3UVVGRFJTeE5RVUZCTEZOQlFWTXNSVUZCUlN4TFFVRkxVaXhMUVVGTUxFTkJRVmRUTEZOQlJIaENPMEZCUlVVc1RVRkJRU3hMUVVGTE8wRkJRMGhETEZGQlFVRkJMRTlCUVU4c1JVRkJSU3hMUVVGTFZpeExRVUZNTEVOQlFWZERMRTlCUVZnc1NVRkJjMElzUzBGQlMwWXNTMEZCVEN4RFFVRlhWQ3hWUVVGcVF5eEhRVUU0UXl4UFFVRTVReXhIUVVGM1JDeE5RVVE1UkR0QlFVVkljVUlzVVVGQlFVRXNVVUZCVVN4RlFVRkZMRTlCUmxBN1FVRkhTRU1zVVVGQlFVRXNSMEZCUnl4RlFVRkZMRXRCUVV0aUxFdEJRVXdzUTBGQlYxWXNVMEZCV0N4SFFVRjFRaXhMUVVGTFZ5eExRVUZNTEVOQlFWZGhMRTlCU0hCRE8wRkJTVWhETEZGQlFVRkJMRWxCUVVrc1JVRkJSU3hMUVVGTFppeExRVUZNTEVOQlFWZFlMRk5CUVZnc1IwRkJkVUlzUzBGQlMxa3NTMEZCVEN4RFFVRlhaVHRCUVVweVF5eFRRVXRCTEV0QlFVdG1MRXRCUVV3c1EwRkJWMmRDTEV0QlRGZzdRVUZHVUN4UFFWVkhMRXRCUVV0b1FpeExRVUZNTEVOQlFWZHBRaXhSUVZaa0xFTkJSRVk3UVVGalJEczdRVUZ5UlRSRE96dG5Ra0ZCZWtNdlFpeFpMR3RDUVVOclFqdEJRVU53UW1Vc1JVRkJRVUVzVDBGQlR5eEZRVUZGTEVsQlJGYzdRVUZGY0VKakxFVkJRVUZCTEU5QlFVOHNSVUZCUlN4RFFVWlhPMEZCUjNCQ1JpeEZRVUZCUVN4UFFVRlBMRVZCUVVVN1FVRklWeXhET3p0QlFYVkZlRUl6UWl4WlFVRlpMRU5CUVVOblF5eFRRVUZpTEVkQlFYbENPMEZCUTNaQ2FrSXNSVUZCUVVFc1QwRkJUeXhGUVVGRmFFSXNVMEZCVXl4RFFVRkRhME1zU1VGRVNUdEJRVVYyUWtZc1JVRkJRVUVzVVVGQlVTeEZRVUZGYUVNc1UwRkJVeXhEUVVGRGJVTXNTVUZCVml4RFFVRmxReXhWUVVaR08wRkJSM1pDVGl4RlFVRkJRU3hQUVVGUExFVkJRVVU1UWl4VFFVRlRMRU5CUVVOeFF5eE5RVWhKTzBGQlNYWkNWQ3hGUVVGQlFTeFBRVUZQTEVWQlFVVTFRaXhUUVVGVExFTkJRVU54UXl4TlFVcEpPMEZCUzNaQ1lpeEZRVUZCUVN4VFFVRlRMRVZCUVVWNFFpeFRRVUZUTEVOQlFVTnpReXhOUVV4Rk8wRkJUWFpDVUN4RlFVRkJRU3hMUVVGTExFVkJRVVV2UWl4VFFVRlRMRU5CUVVOMVF5eE5RVTVOTEVOQlRVVTdPMEZCVGtZc1EwRkJla0k3UVVGVFFTeGxRVUZsZEVNc1dVRkJaaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JTWldGamRDQm1jbTl0SUNkeVpXRmpkQ2M3WEc1cGJYQnZjblFnVUhKdmNGUjVjR1Z6SUdaeWIyMGdKM0J5YjNBdGRIbHdaWE1uT3lBdkx5QmxjMnhwYm5RdFpHbHpZV0pzWlMxc2FXNWxJR2x0Y0c5eWRDOXVieTFsZUhSeVlXNWxiM1Z6TFdSbGNHVnVaR1Z1WTJsbGMxeHVYRzVqYkdGemN5Qk5iM1Z6WlZSdmIyeDBhWEFnWlhoMFpXNWtjeUJTWldGamRDNVFkWEpsUTI5dGNHOXVaVzUwSUh0Y2JpQWdjM1JoZEdsaklHUmxabUYxYkhSUWNtOXdjeUE5SUh0Y2JpQWdJQ0IyYVhOcFlteGxPaUIwY25WbExGeHVJQ0FnSUc5bVpuTmxkRmc2SURBc1hHNGdJQ0FnYjJabWMyVjBXVG9nTUN4Y2JpQWdmVHRjYmx4dUlDQnpkR0YwWlNBOUlIdGNiaUFnSUNCNFVHOXphWFJwYjI0NklEQXNYRzRnSUNBZ2VWQnZjMmwwYVc5dU9pQXdMRnh1SUNBZ0lHMXZkWE5sVFc5MlpXUTZJR1poYkhObExGeHVJQ0FnSUd4cGMzUmxibVZ5UVdOMGFYWmxPaUJtWVd4elpTeGNiaUFnZlR0Y2JseHVJQ0JqYjIxd2IyNWxiblJFYVdSTmIzVnVkQ2dwSUh0Y2JpQWdJQ0IwYUdsekxtRmtaRXhwYzNSbGJtVnlLQ2s3WEc0Z0lIMWNibHh1SUNCamIyMXdiMjVsYm5SRWFXUlZjR1JoZEdVb0tTQjdYRzRnSUNBZ2RHaHBjeTUxY0dSaGRHVk1hWE4wWlc1bGNpZ3BPMXh1SUNCOVhHNWNiaUFnWTI5dGNHOXVaVzUwVjJsc2JGVnViVzkxYm5Rb0tTQjdYRzRnSUNBZ2RHaHBjeTV5WlcxdmRtVk1hWE4wWlc1bGNpZ3BPMXh1SUNCOVhHNWNiaUFnWjJWMFZHOXZiSFJwY0ZCdmMybDBhVzl1SUQwZ0tIc2dZMnhwWlc1MFdEb2dlRkJ2YzJsMGFXOXVMQ0JqYkdsbGJuUlpPaUI1VUc5emFYUnBiMjRnZlNrZ1BUNGdlMXh1SUNBZ0lIUm9hWE11YzJWMFUzUmhkR1VvZTF4dUlDQWdJQ0FnZUZCdmMybDBhVzl1TEZ4dUlDQWdJQ0FnZVZCdmMybDBhVzl1TEZ4dUlDQWdJQ0FnYlc5MWMyVk5iM1psWkRvZ2RISjFaU3hjYmlBZ0lDQjlLVHRjYmlBZ2ZUdGNibHh1SUNCaFpHUk1hWE4wWlc1bGNpQTlJQ2dwSUQwK0lIdGNiaUFnSUNCM2FXNWtiM2N1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduYlc5MWMyVnRiM1psSnl3Z2RHaHBjeTVuWlhSVWIyOXNkR2x3VUc5emFYUnBiMjRwTzF4dUlDQWdJSFJvYVhNdWMyVjBVM1JoZEdVb2V5QnNhWE4wWlc1bGNrRmpkR2wyWlRvZ2RISjFaU0I5S1R0Y2JpQWdmVHRjYmx4dUlDQnlaVzF2ZG1WTWFYTjBaVzVsY2lBOUlDZ3BJRDArSUh0Y2JpQWdJQ0IzYVc1a2IzY3VjbVZ0YjNabFJYWmxiblJNYVhOMFpXNWxjaWduYlc5MWMyVnRiM1psSnl3Z2RHaHBjeTVuWlhSVWIyOXNkR2x3VUc5emFYUnBiMjRwTzF4dUlDQWdJSFJvYVhNdWMyVjBVM1JoZEdVb2V5QnNhWE4wWlc1bGNrRmpkR2wyWlRvZ1ptRnNjMlVnZlNrN1hHNGdJSDA3WEc1Y2JpQWdkWEJrWVhSbFRHbHpkR1Z1WlhJZ1BTQW9LU0E5UGlCN1hHNGdJQ0FnYVdZZ0tDRjBhR2x6TG5OMFlYUmxMbXhwYzNSbGJtVnlRV04wYVhabElDWW1JSFJvYVhNdWNISnZjSE11ZG1semFXSnNaU2tnZTF4dUlDQWdJQ0FnZEdocGN5NWhaR1JNYVhOMFpXNWxjaWdwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNoMGFHbHpMbk4wWVhSbExteHBjM1JsYm1WeVFXTjBhWFpsSUNZbUlDRjBhR2x6TG5CeWIzQnpMblpwYzJsaWJHVXBJSHRjYmlBZ0lDQWdJSFJvYVhNdWNtVnRiM1psVEdsemRHVnVaWElvS1R0Y2JpQWdJQ0I5WEc0Z0lIMDdYRzVjYmlBZ2NtVnVaR1Z5S0NrZ2UxeHVJQ0FnSUhKbGRIVnliaUFvWEc0Z0lDQWdJQ0E4WkdsMlhHNGdJQ0FnSUNBZ0lHTnNZWE56VG1GdFpUMTdkR2hwY3k1d2NtOXdjeTVqYkdGemMwNWhiV1Y5WEc0Z0lDQWdJQ0FnSUhOMGVXeGxQWHQ3WEc0Z0lDQWdJQ0FnSUNBZ1pHbHpjR3hoZVRvZ2RHaHBjeTV3Y205d2N5NTJhWE5wWW14bElDWW1JSFJvYVhNdWMzUmhkR1V1Ylc5MWMyVk5iM1psWkNBL0lDZGliRzlqYXljZ09pQW5ibTl1WlNjc1hHNGdJQ0FnSUNBZ0lDQWdjRzl6YVhScGIyNDZJQ2RtYVhobFpDY3NYRzRnSUNBZ0lDQWdJQ0FnZEc5d09pQjBhR2x6TG5OMFlYUmxMbmxRYjNOcGRHbHZiaUFySUhSb2FYTXVjSEp2Y0hNdWIyWm1jMlYwV1N4Y2JpQWdJQ0FnSUNBZ0lDQnNaV1owT2lCMGFHbHpMbk4wWVhSbExuaFFiM05wZEdsdmJpQXJJSFJvYVhNdWNISnZjSE11YjJabWMyVjBXQ3hjYmlBZ0lDQWdJQ0FnSUNBdUxpNTBhR2x6TG5CeWIzQnpMbk4wZVd4bExGeHVJQ0FnSUNBZ0lDQjlmVnh1SUNBZ0lDQWdQbHh1SUNBZ0lDQWdJQ0I3ZEdocGN5NXdjbTl3Y3k1amFHbHNaSEpsYm4xY2JpQWdJQ0FnSUR3dlpHbDJQbHh1SUNBZ0lDazdYRzRnSUgxY2JuMWNibHh1VFc5MWMyVlViMjlzZEdsd0xuQnliM0JVZVhCbGN5QTlJSHRjYmlBZ2RtbHphV0pzWlRvZ1VISnZjRlI1Y0dWekxtSnZiMndzWEc0Z0lHTm9hV3hrY21WdU9pQlFjbTl3Vkhsd1pYTXVibTlrWlM1cGMxSmxjWFZwY21Wa0xGeHVJQ0J2Wm1aelpYUllPaUJRY205d1ZIbHdaWE11Ym5WdFltVnlMRnh1SUNCdlptWnpaWFJaT2lCUWNtOXdWSGx3WlhNdWJuVnRZbVZ5TEZ4dUlDQmpiR0Z6YzA1aGJXVTZJRkJ5YjNCVWVYQmxjeTV6ZEhKcGJtY3NYRzRnSUhOMGVXeGxPaUJRY205d1ZIbHdaWE11YjJKcVpXTjBMQ0F2THlCbGMyeHBiblF0WkdsellXSnNaUzFzYVc1bElISmxZV04wTDJadmNtSnBaQzF3Y205d0xYUjVjR1Z6WEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQk5iM1Z6WlZSdmIyeDBhWEE3WEc0aVhYMD0iLCJpbXBvcnQge1xyXG4gIEFwcEJhcixcclxuICBJY29uQnV0dG9uLFxyXG4gIExpc3RJdGVtLFxyXG4gIExpc3RJdGVtSWNvbixcclxuICBMaXN0SXRlbVRleHQsXHJcbiAgVG9vbGJhcixcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgRmFSZWdNb25leUJpbGxBbHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuaW1wb3J0IHtcclxuICBGaUNoZXZyb25MZWZ0LFxyXG4gIEZpQ2hldnJvblJpZ2h0LFxyXG4gIEZpRG9sbGFyU2lnbixcclxuICBGaUVkaXQsXHJcbiAgRmlHcmlkLFxyXG4gIEZpTGlzdCxcclxuICBGaUxvZ091dCxcclxuICBGaU1lbnUsXHJcbiAgRmlQYWNrYWdlLFxyXG4gIEZpU2VhcmNoLFxyXG4gIEZpU2V0dGluZ3MsXHJcbiAgRmlUb29sLFxyXG4gIEZpVXNlcixcclxuICBGaUNyZWRpdENhcmQsXHJcbn0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XHJcbmltcG9ydCB7IEFpT3V0bGluZUJhcmNvZGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBEcmF3ZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RyYXdlclwiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCI7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyXCI7XHJcbmltcG9ydCBNb3VzZVRvb2xUaXAgZnJvbSBcInJlYWN0LXN0aWNreS1tb3VzZS10b29sdGlwXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9hdXRoXCI7XHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjQwO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgfSxcclxuICBhcHBCYXI6IHtcclxuICAgIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoW1wid2lkdGhcIiwgXCJtYXJnaW5cIl0sIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSxcclxuICBhcHBCYXJTaGlmdDoge1xyXG4gICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbXCJ3aWR0aFwiLCBcIm1hcmdpblwiXSwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSxcclxuICBtZW51QnV0dG9uOiB7XHJcbiAgICBtYXJnaW5SaWdodDogMzYsXHJcbiAgICBbXCJAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpXCJdOiB7XHJcbiAgICAgIG1hcmdpblJpZ2h0OiBcIjFyZW1cIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBoaWRlOiB7XHJcbiAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICB9LFxyXG4gIGRyYXdlcjoge1xyXG4gICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgZmxleFNocmluazogMCxcclxuICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcIiMyMzM1NDhcIixcclxuICB9LFxyXG4gIGRyYXdlck9wZW46IHtcclxuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgIGJhY2tncm91bmQ6IFwiIzIzMzU0OFwiLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFwid2lkdGhcIiwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgICBwYWRkaW5nVG9wOiBcIjFlbVwiLFxyXG4gICAgXCImOjotd2Via2l0LXNjcm9sbGJhclwiOiB7XHJcbiAgICAgIHdpZHRoOiA0LFxyXG4gICAgfSxcclxuICAgIFwiJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2tcIjoge1xyXG4gICAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKWAsXHJcbiAgICB9LFxyXG4gICAgXCImOjotd2Via2l0LXNjcm9sbGJhci10aHVtYlwiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIyMSwgMTU0LCA2NiwgMC43KVwiLFxyXG4gICAgICBvdXRsaW5lOiBgMXB4IHNvbGlkIHNsYXRlZ3JleWAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZHJhd2VyQmFja2dyb3VuZDoge1xyXG4gICAgYmFja2dyb3VuZDogXCIjMjMzNTQ4XCIsXHJcbiAgfSxcclxuICBkcmF3ZXJDbG9zZToge1xyXG4gICAgYmFja2dyb3VuZDogXCIjMjMzNTQ4XCIsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXCJ3aWR0aFwiLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gICAgb3ZlcmZsb3dYOiBcImhpZGRlblwiLFxyXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoNykgKyAxLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDgpICsgMSxcclxuICAgIH0sXHJcbiAgICBwYWRkaW5nVG9wOiBcIjFlbVwiLFxyXG4gICAgXCImOjotd2Via2l0LXNjcm9sbGJhclwiOiB7XHJcbiAgICAgIHdpZHRoOiA0LFxyXG4gICAgfSxcclxuICAgIFwiJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2tcIjoge1xyXG4gICAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKWAsXHJcbiAgICB9LFxyXG4gICAgXCImOjotd2Via2l0LXNjcm9sbGJhci10aHVtYlwiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIyMSwgMTU0LCA2NiwgMC43KVwiLFxyXG4gICAgICBvdXRsaW5lOiBgMXB4IHNvbGlkIHNsYXRlZ3JleWAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdG9vbGJhcjoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBoZWlnaHQ6IFwiODRweFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDEpLFxyXG4gICAgLy8gbmVjZXNzYXJ5IGZvciBjb250ZW50IHRvIGJlIGJlbG93IGFwcCBiYXJcclxuICAgIC4uLnRoZW1lLm1peGlucy50b29sYmFyLFxyXG4gIH0sXHJcbiAgY29udGVudDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgfSxcclxuICBsaW5rOiB7XHJcbiAgICBtYXJnaW46IFwiMCAwIDAgYXV0b1wiLFxyXG4gICAgW1wiQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KVwiXToge1xyXG4gICAgICB2aXNpYmlsaXR5OiBcImhpZGRlblwiLFxyXG4gICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBsb2dvOiB7XHJcbiAgICBtYXJnaW46IFwiMCAwIDAgYXV0b1wiLFxyXG4gICAgd2lkdGg6IFwiMjUwcHhcIixcclxuICAgIGhlaWdodDogXCJhdXRvXCIsXHJcbiAgfSxcclxuICBtb2JMb2dvOiB7XHJcbiAgICBtYXJnaW46IFwiMCAwIDAgYXV0b1wiLFxyXG4gICAgd2lkdGg6IFwiMTQwcHhcIixcclxuICAgIGhlaWdodDogXCJhdXRvXCIsXHJcbiAgfSxcclxuICBzaGlmdFRleHRMZWZ0OiB7XHJcbiAgICBtYXJnaW5MZWZ0OiBcIjBweFwiLFxyXG4gIH0sXHJcbiAgc2hpZnRUZXh0UmlnaHQ6IHtcclxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmludGVyZmFjZSBIZWFkZXJQcm9wcyB7XHJcbiAgb3BlbjogYm9vbGVhbjtcclxuICBoYW5kbGVEcmF3ZXJPcGVuOiAoKSA9PiB2b2lkO1xyXG4gIGhhbmRsZURyYXdlckNsb3NlOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoe1xyXG4gIG9wZW4sXHJcbiAgaGFuZGxlRHJhd2VyT3BlbixcclxuICBoYW5kbGVEcmF3ZXJDbG9zZSxcclxufTogSGVhZGVyUHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG5cclxuICBjb25zdCBbdG9nZ2xlTW91c2VUb29sdGlwLCBzZXRUb2dnbGVNb3VzZVRvb2x0aXBdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFt0aXRsZVRvb2x0aXAsIHNldFRpdGxlVG9vbHRpcF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG4gIGNvbnN0IHsgbG9nb3V0LCB1c2VyLCBmaWxpYWxQcmluY2lwYWwgfSA9IHVzZUF1dGgoKTtcclxuXHJcbiAgY29uc3Qgd2luZG93U2l6ZSA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gIGNvbnN0IG1heE1vYlNpemUgPSA3MDA7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vdXNlVG9vZ2xlVG9vbHRpcCA9IChzdGF0ZTogYm9vbGVhbiwgdGl0bGU6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKCFvcGVuKSB7XHJcbiAgICAgIHNldFRpdGxlVG9vbHRpcCh0aXRsZSk7XHJcbiAgICAgIHNldFRvZ2dsZU1vdXNlVG9vbHRpcChzdGF0ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICA8QXBwQmFyXHJcbiAgICAgICAgcG9zaXRpb249XCJmaXhlZFwiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGJhY2tncm91bmQ6IFwiIzIzMzU0OFwiLFxyXG4gICAgICAgICAgcGFkZGluZzogXCIwLjZyZW0gMC42cmVtXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5hcHBCYXIsIHtcclxuICAgICAgICAgIFtjbGFzc2VzLmFwcEJhclNoaWZ0XTogb3BlbixcclxuICAgICAgICB9KX1cclxuICAgICAgPlxyXG4gICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEcmF3ZXJPcGVufVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5tZW51QnV0dG9uLCB7XHJcbiAgICAgICAgICAgICAgW2NsYXNzZXMuaGlkZV06IG9wZW4sXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8RmlNZW51IGNvbG9yPVwiI0REOUE0MlwiIHNpemU9ezMwfSAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAge3VzZXIgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckluZm99PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyVXNlckluZm99PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc3BhblVzZXJ9Pnt1c2VyLlVTVUFSSU99PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc3BhbkZpbGlhbH0+XHJcbiAgICAgICAgICAgICAgICAgIHtgJHtmaWxpYWxQcmluY2lwYWwuQ09ERU1QUkVTQX0gLSAke2ZpbGlhbFByaW5jaXBhbC5OT01FUkVEfWB9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPEZpTG9nT3V0IG9uQ2xpY2s9e2xvZ291dH0gc2l6ZT17MjB9IGNvbG9yPVwiI2Y0ZjRmNFwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIHdpbmRvd1NpemUgPiBtYXhNb2JTaXplID8gY2xhc3Nlcy5sb2dvIDogY2xhc3Nlcy5tb2JMb2dvXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvdXRpbGl0YXJpb3MtbG9nby5wbmdcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgPC9BcHBCYXI+XHJcbiAgICAgIHt3aW5kb3dTaXplID4gbWF4TW9iU2l6ZSA/IChcclxuICAgICAgICA8RHJhd2VyXHJcbiAgICAgICAgICB2YXJpYW50PVwicGVybWFuZW50XCJcclxuICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgcGFwZXI6IGNsc3goe1xyXG4gICAgICAgICAgICAgIFtjbGFzc2VzLmRyYXdlck9wZW5dOiBvcGVuLFxyXG4gICAgICAgICAgICAgIFtjbGFzc2VzLmRyYXdlckNsb3NlXTogIW9wZW4sXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyfT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlRHJhd2VyQ2xvc2V9PlxyXG4gICAgICAgICAgICAgIHt0aGVtZS5kaXJlY3Rpb24gPT09IFwicnRsXCIgPyAoXHJcbiAgICAgICAgICAgICAgICA8RmlDaGV2cm9uUmlnaHQgY29sb3I9XCIjREQ5QTQyXCIgLz5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPEZpQ2hldnJvbkxlZnQgY29sb3I9XCIjREQ5QTQyXCIgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxMaXN0IGNsYXNzTmFtZT1cInNpZGVCYXItdWxcIj5cclxuICAgICAgICAgICAge3VzZXI/LnBlcm1pc3Npb25zLmNvbnN1bHRhclByb2R1dG9zICE9PSBcIlNFTV9BQ0VTU09cIiAmJiAoXHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9jb25zdWx0YXItcHJvZHV0b1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVNb3VzZVRvb2dsZVRvb2x0aXAodHJ1ZSwgXCJDb25zdWx0YXIgUHJvZHV0b1wiKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpU2VhcmNoIHNpemU9ezI4fSBjb2xvcj1cIiNERDlBNDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdoaXRlU3BhY2U6IFwibm93cmFwXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtcIkNvbnN1bHRhciBQcm9kdXRvc1wifVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7dXNlcj8ucGVybWlzc2lvbnMucGFyYW1ldHJvc0dlcmFpcyAhPT0gXCJTRU1fQUNFU1NPXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvcGFyYW1ldHJvcy1nZXJhaXNcIj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8RmlUb29sIHNpemU9ezI4fSBjb2xvcj1cIiNERDlBNDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdoaXRlU3BhY2U6IFwibm93cmFwXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtcIlBhcsOibWV0cm9zIEdlcmFpc1wifVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIi9nZXJhci1jb2QtYmFycmFzXCI+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8QWlPdXRsaW5lQmFyY29kZSBzaXplPXsyOH0gY29sb3I9XCIjREQ5QTQyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiIH19XHJcbiAgICAgICAgICAgICAgICAgIHByaW1hcnk9e1wiR2VyYXIgQ8OzZGlnbyBkZSBCYXJyYXNcIn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8RGl2aWRlciAvPlxyXG5cclxuICAgICAgICAgICAge3VzZXI/LnBlcm1pc3Npb25zLmNvbnRhc0FSZWNlYmVyICE9PSBcIlNFTV9BQ0VTU09cIiAmJiAoXHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9yZWNlYmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZhUmVnTW9uZXlCaWxsQWx0IHNpemU9ezI4fSBjb2xvcj1cIiNERDlBNDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdoaXRlU3BhY2U6IFwibm93cmFwXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtcIkNvbnRhcyBhIFJlY2ViZXJcIn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge3VzZXI/LnBlcm1pc3Npb25zLmFsdGVyYUFkbUNvbnZlbmlvICE9PSBcIlNFTV9BQ0VTU09cIiAmJiAoXHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9hbHRlcmEtYWRtLWNvbnZlbmlvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpQ3JlZGl0Q2FyZCBzaXplPXsyOH0gY29sb3I9XCIjREQ5QTQyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT17XCJBbHRlcmFyIEFkbS4gQ29udsOqbmlvXCJ9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcblxyXG4gICAgICAgICAgICB7dXNlcj8ucGVybWlzc2lvbnMuZGlnaXRhY2FvSW52ZW50YXJpbyAhPT0gXCJTRU1fQUNFU1NPXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvZGlnaXRhY2FvLWludmVudGFyaW9cIj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8RmlFZGl0IHNpemU9ezI4fSBjb2xvcj1cIiNERDlBNDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdoaXRlU3BhY2U6IFwibm93cmFwXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtcIkRpZ2l0YcOnw6NvIGRlIEludmVudMOhcmlvXCJ9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHt1c2VyPy5wZXJtaXNzaW9ucy5jb25zdWx0YXJJbnZlbnRhcmlvcyAhPT0gXCJTRU1fQUNFU1NPXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvY29uc3VsdGFyLWludmVudGFyaW9zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpTGlzdCBzaXplPXsyOH0gY29sb3I9XCIjREQ5QTQyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT17XCJDb25zdWx0YXIgSW52ZW50w6FyaW9zXCJ9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHt1c2VyPy5wZXJtaXNzaW9ucy5jb21wcmFzUmVxdWlzaXRhciAhPT0gXCJTRU1fQUNFU1NPXCIgJiZcclxuICAgICAgICAgICAgICB1c2VyPy5wZXJtaXNzaW9ucy5jb21wcmFzQ29uc3VsdGFyICE9PSBcIlNFTV9BQ0VTU09cIiAmJlxyXG4gICAgICAgICAgICAgIHVzZXI/LnBlcm1pc3Npb25zLmNvbXByYXNQYWluZWxEb0NvbXByYWRvciAhPT0gXCJTRU1fQUNFU1NPXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2NvbXByYXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZpRG9sbGFyU2lnbiBzaXplPXsyOH0gY29sb3I9XCIjREQ5QTQyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtcIkNvbXByYXNcIn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7dXNlcj8ucGVybWlzc2lvbnMuZGVtYW5kYXJSZXBvc2ljYW8gIT09IFwiU0VNX0FDRVNTT1wiICYmIChcclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2RlbWFuZGFyLXJlcG9zaWNhb1wiPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaVBhY2thZ2Ugc2l6ZT17Mjh9IGNvbG9yPVwiI0REOUE0MlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2hpdGVTcGFjZTogXCJub3dyYXBcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnk9e1wiRGVtYW5kYXIgUmVwb3Npw6fDo29cIn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge3VzZXI/LnBlcm1pc3Npb25zLnZpc3VhbGl6YXJSZXBvc2ljb2VzICE9PSBcIlNFTV9BQ0VTU09cIiAmJiAoXHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9jb25zdWx0YXItcmVwb3NpY29lc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaUdyaWQgc2l6ZT17Mjh9IGNvbG9yPVwiI0REOUE0MlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2hpdGVTcGFjZTogXCJub3dyYXBcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnk9e1wiVmlzdWFsaXphciBSZXBvc2nDp8O1ZXNcIn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuXHJcbiAgICAgICAgICAgIHt1c2VyPy5wZXJtaXNzaW9ucy5jb25maWd1cmFjb2VzICE9PSBcIlNFTV9BQ0VTU09cIiAmJiAoXHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9jb25maWd1cmFjb2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpU2V0dGluZ3Mgc2l6ZT17Mjh9IGNvbG9yPVwiI0REOUE0MlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2hpdGVTcGFjZTogXCJub3dyYXBcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnk9e1wiQ29uZmlndXJhw6fDtWVzXCJ9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHt1c2VyPy5wZXJtaXNzaW9ucz8ucGVybWlzc29lcyAhPT0gXCJTRU1fQUNFU1NPXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvcGVybWlzc29lc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaVVzZXIgc2l6ZT17Mjh9IGNvbG9yPVwiI0REOUE0MlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2hpdGVTcGFjZTogXCJub3dyYXBcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnk9e1wiUGVybWlzc8O1ZXNcIn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPExpc3RJdGVtIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyIFwiIH19IG9uQ2xpY2s9e2xvZ291dH0+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8RmlMb2dPdXQgc2l6ZT17Mjh9IGNvbG9yPVwiI0REOUE0MlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2hpdGVTcGFjZTogXCJub3dyYXBcIiB9fVxyXG4gICAgICAgICAgICAgICAgICBwcmltYXJ5PXtcIlNhaXJcIn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgPE1vdXNlVG9vbFRpcFxyXG4gICAgICAgICAgICBzdHlsZT17eyB6SW5kZXg6IDIxNDc0ODM2NDcgfX1cclxuICAgICAgICAgICAgdmlzaWJsZT17dG9nZ2xlTW91c2VUb29sdGlwfVxyXG4gICAgICAgICAgICBvZmZzZXRYPXsxNX1cclxuICAgICAgICAgICAgb2Zmc2V0WT17MTB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2JzZXJ2YWNhby1jb21wcmFcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj57dGl0bGVUb29sdGlwfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L01vdXNlVG9vbFRpcD5cclxuICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8RHJhd2VyXHJcbiAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgIHBhcGVyOiBjbHN4KGNsYXNzZXMuZHJhd2VyQmFja2dyb3VuZCksXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgdmFyaWFudD1cInRlbXBvcmFyeVwiXHJcbiAgICAgICAgICBhbmNob3I9XCJ0b3BcIlxyXG4gICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZURyYXdlckNsb3NlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxMaXN0IGNsYXNzTmFtZT1cInNpZGVCYXItdWxcIj5cclxuICAgICAgICAgICAge3VzZXI/LnBlcm1pc3Npb25zLmNvbnN1bHRhclByb2R1dG9zICE9PSBcIlNFTV9BQ0VTU09cIiAmJiAoXHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9jb25zdWx0YXItcHJvZHV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaVNlYXJjaCBzaXplPXszMH0gY29sb3I9XCIjREQ5QTQyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17XCJDb25zdWx0YXIgUHJvZHV0b3NcIn0gLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuXHJcbiAgICAgICAgICAgIHt1c2VyPy5wZXJtaXNzaW9ucy5kaWdpdGFjYW9JbnZlbnRhcmlvICE9PSBcIlNFTV9BQ0VTU09cIiAmJiAoXHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9kaWdpdGFjYW8taW52ZW50YXJpb1wiPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaUVkaXQgc2l6ZT17MzB9IGNvbG9yPVwiI0REOUE0MlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e1wiRGlnaXRhw6fDo28gZGUgSW52ZW50w6FyaW9cIn0gLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge3VzZXI/LnBlcm1pc3Npb25zLmNvbXByYXNSZXF1aXNpdGFyICE9PSBcIlNFTV9BQ0VTU09cIiB8fFxyXG4gICAgICAgICAgICAgIHVzZXI/LnBlcm1pc3Npb25zLmNvbXByYXNDb25zdWx0YXIgIT09IFwiU0VNX0FDRVNTT1wiIHx8XHJcbiAgICAgICAgICAgICAgdXNlcj8ucGVybWlzc2lvbnMuY29tcHJhc1BhaW5lbERvQ29tcHJhZG9yICE9PSBcIlNFTV9BQ0VTU09cIiB8fCAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvY29tcHJhc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RmlEb2xsYXJTaWduIHNpemU9ezMwfSBjb2xvcj1cIiNERDlBNDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17XCJDb21wcmFzXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHt1c2VyPy5wZXJtaXNzaW9ucy5kZW1hbmRhclJlcG9zaWNhbyAhPT0gXCJTRU1fQUNFU1NPXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvZGVtYW5kYXItcmVwb3NpY2FvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpUGFja2FnZSBzaXplPXszMH0gY29sb3I9XCIjREQ5QTQyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17XCJEZW1hbmRhciBSZXBvc2nDp8Ojb1wifSAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcblxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gb25DbGljaz17bG9nb3V0fT5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxGaUxvZ091dCBzaXplPXszMH0gY29sb3I9XCIjREQ5QTQyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtcIlNhaXJcIn0gLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=