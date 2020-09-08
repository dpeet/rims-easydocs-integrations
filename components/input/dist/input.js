"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./input.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Input = /*#__PURE__*/function (_React$Component) {
  _inherits(Input, _React$Component);

  var _super = _createSuper(Input);

  function Input(props) {
    var _this;

    _classCallCheck(this, Input);

    _this = _super.call(this, props);
    _this.state = {
      label: _this.props.label ? _this.props.label : "Name",
      inputValue: '',
      fieldActive: false,
      inactive: _this.props.inactive ? _this.props.inactive : false
    };
    return _this;
  } // to activate the input field while typing


  _createClass(Input, [{
    key: "activateField",
    value: function activateField() {
      console.log("setting state");
      this.setState({
        fieldActive: true
      });
    } // to deactivate input only if it's empty

  }, {
    key: "disableField",
    value: function disableField(e) {
      console.log("setting state off");

      if (e.target.value === "") {
        this.setState({
          fieldActive: false
        });
      }
    } // to update the changes in the input and activate it

  }, {
    key: "updateInputValue",
    value: function updateInputValue(e) {
      this.setState({
        inputValue: e.target.value
      });
      this.activateField(e);
      e.preventDefault();
    } // TODO Harden Inactive so it actually doesn't accept input

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log(this.props.label);
      var inputClassName = "dev-input";

      if (this.state.fieldActive) {
        inputClassName += " field-active";
      }

      ;

      if (this.state.inputValue !== '') {
        inputClassName += " field-filled";
      }

      ;

      if (this.state.inactive) {
        inputClassName = "dev-input inactive";
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        className: this.props.className
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "dev-input-group"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "dev-input-wrapper"
      }, /*#__PURE__*/_react.default.createElement("input", {
        className: inputClassName,
        type: "text",
        value: this.state.inputValue,
        onFocus: function onFocus() {
          return _this2.activateField();
        },
        onBlur: function onBlur(e) {
          return _this2.disableField(e);
        },
        onChange: function onChange(e) {
          return _this2.updateInputValue(e);
        }
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "dev-label-wrapper"
      }, /*#__PURE__*/_react.default.createElement("label", {
        // check state the input, whether it is active then apply the class for floating label
        className: this.state.fieldActive ? "field-active" : ""
      }, " ", this.state.label))));
    }
  }]);

  return Input;
}(_react.default.Component);

exports.default = Input;

//# sourceMappingURL=input.js.map