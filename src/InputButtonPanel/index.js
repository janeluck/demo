import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import _ from "lodash";
import SvgIcon from "../SvgIcon";
import "./index.css";

function isEmpty(v) {
  return v === "0" || !v;
}

class InnerButton extends PureComponent {
  static propTypes = {
    type: PropTypes.string,
    onMouseDown: PropTypes.func,
    className: PropTypes.string
  };
  static defaultProps = {
    onMouseDown: _.identity
  };

  onMouseDown = event => {
    const type = this.props.type;
    // 阻止虚拟键盘获得焦点, 保留原输入框的focus状态
    event.preventDefault();
    this.props.onMouseDown(type);
  };

  render() {
    return (
      <button
        {..._.omit(this.props, ["children", "onMouseDown", "type"])}
        onMouseDown={this.onMouseDown}
        tabIndex="-1">
        {this.props.children}
      </button>
    );
  }
}
export default class InputButtonPanel extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    // 是否展示确定按钮
    showOk: PropTypes.bool,
    // 点击确定的交互事件
    onOk: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };
  static defaultProps = {
    onChange: _.identity,
    showOk: false,
    onOk: _.identity,
    value: ""
  };

  shouldComponentUpdate(nextProps) {
    return this.props.showOk !== nextProps.showOk;
  }

  getResultString = (originStr = "", start = 0, end = 0, str = "") => {
    // 回退键特殊处理
    if (str === "back") {
      str = "";
      if (start === end) start -= 1;
    }
    //return originStr.slice(0, start) + (str === 'back' ? '' : str) + originStr.slice(end)
    //return originStr.replace(new RegExp('(^[\\d\\.]{' + start + '})[\\d\\.]{' + (end - start) + '}'), '$1' + str)
    // 根据光标的位置, 处理输入结果
    return originStr.replace(
      new RegExp("(.{" + start + "}).{" + (end - start) + "}"),
      "$1" + str
    );
  };

  handleOkDown = () => {
    const { onOk, value } = this.props;
    onOk(value);
  };

  handleMouseDown = type => {
    // 获取当前焦点的input或者textarea
    let activeEl = document.activeElement;
    if (["INPUT", "TEXTAREA"].indexOf(activeEl.tagName) < 0) return;

    const value = activeEl.value || "";
    const { selectionStart, selectionEnd } = activeEl;

    const result = this.getResultString(
      value,
      selectionStart,
      selectionEnd,
      type
    );

    // 计算光标所在的位置
    const caretPosition = result.length - (value.length - selectionEnd);
    const { onChange, onOk, mode } = this.props;
    switch (type) {
      case "clear":
        onChange("");
        break;
      case "back":
        onChange(result);
        break;
      case ".":
        if (value.indexOf(".") < 0) onChange(result);
        break;
      case "00":
        onChange(mode !== "text" && isEmpty(value) ? 0 : result);
        break;
      case "sure":
        onOk(value);
        break;
      default:
        onChange(mode !== "text" && isEmpty(value) ? type : result);
        break;
    }

    // 设置元素的光标位置
    setTimeout(() => {
      const currentV = activeEl.value;
      // 如果结果被再处理，光标定位到末尾
      if (typeof currentV !== "undefined" && currentV != result) {
        activeEl.setSelectionRange(99999, 99999);
      } else {
        activeEl.setSelectionRange(caretPosition, caretPosition);
      }
    }, 0);
  };

  renderNumberPanel = () => {
    const viewData = [
      ["1", "2", "3"],
      ["4", "5", "6"],
      ["7", "8", "9"],
      ["0", "00", "."]
    ];
    return (
      <div className="InputButtonPanel-Number">
        {_.map(viewData, (row, i) => {
          return (
            <div className="InputButtonPanel-Row" key={i}>
              {_.map(row, (cell, j) => {
                return (
                  <div className="InputButtonPanel-Cell" key={j}>
                    <InnerButton onMouseDown={this.handleMouseDown} type={cell}>
                      {cell}
                    </InnerButton>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    const { showOk } = this.props;
    return (
      <div
        ref={wrap => (this.wrap = wrap)}
        className="InputButtonPanel-Wrap"
        onMouseDown={function(event) {
          event.preventDefault();
        }}>
        {this.renderNumberPanel()}
        <div
          className={classnames("InputButtonPanel-Operator", {
            "InputButtonPanel-hasSure": showOk
          })}>
          <div>
            <InnerButton
              className="InputButtonPanel-Back"
              onMouseDown={this.handleMouseDown}
              type="back">
              <SvgIcon type="deleteone" />
            </InnerButton>
          </div>
          <div>
            <InnerButton
              className="InputButtonPanel-Clear"
              onMouseDown={this.handleMouseDown}
              type="clear">
              <SvgIcon type="deleteall" />
            </InnerButton>
          </div>
          {showOk && (
            <div className="InputButtonPanel-Sure">
              <InnerButton onMouseDown={this.handleOkDown} type="sure">
                确定
              </InnerButton>
            </div>
          )}
        </div>
      </div>
    );
  }
}

// 使用实例
export class InputButtonPanelExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  onChange = v => {
    this.setState({ value: v });
  };
  handleChange = e => {
    const value = e.target.value;
    this.setState({
      value
    });
  };
  onOk = v => {
    console.log(v);
  };

  render() {
    const value = this.state.value;
    return (
      <div>
        <input type="text" value={value} onChange={this.handleChange} />
        <InputButtonPanel
          value={this.props.value}
          onChange={this.onChange}
          //showOk
          //onOk={this.onOk}
        >
          <div>
            <span>当前积分：</span>
            <span>{value}</span>
          </div>
        </InputButtonPanel>
      </div>
    );
  }
}
