import React, { Component } from "react";
import css from "./ProfileStatus.module.css";

export default class ProfileStatus extends Component {
  // LOCAL STATE
  state = {
    editorMode: false,
    status: this.props.status,
  };

  // EDITOR MODE FOR TEXTAREA
  activateEditorMode = () => {
    this.setState({
      editorMode: true,
    });
  };

  // DEACTIVATE EDITOR MODE FOR TEXTAREA
  deactivateEditorMode() {
    this.setState({
      editorMode: false,
    });
    this.props.updateStatus(this.state.status);
  }

  // CHANGE STATUS
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };
  // COMPONENT DID UPDATE
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    } 
    console.log("componentDidUpdate");
  }
  render() {
    return (
      <div>
        {this.state.editorMode ? (
          <input
            onChange={this.onStatusChange}
            autoFocus={true}
            onBlur={this.deactivateEditorMode.bind(this)}
            value={this.state.status}
            className={css.statusChange}
          />
        ) : (
          <div
            onDoubleClick={this.activateEditorMode}
            className={css.statusRead}
          >
            {this.props.status || "No status"}
          </div>
        )}
      </div>
    );
  }
}
