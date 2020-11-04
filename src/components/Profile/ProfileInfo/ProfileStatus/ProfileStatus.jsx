import React, { Component } from "react";
import css from "./ProfileStatus.module.css";

export default class ProfileStatus extends Component {
  // LOCAL STATE
  state = {
    editorMode: false,
    state: this.props.state,
  };

  // EDITOR MODE FOR TEXTAREA
  activateEditorMode = () => {
    this.setState({
      editorMode: true,
    });
  };

  // DEACTIVATE EDITOR MODE FOR TEXTAREA
  deactivateEditorMode = () => {
    this.setState({
      editorMode: false,
    });
    this.props.updateStatus(this.state.state);
  };

  // CHANGE STATUS
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };
  render() {
    return (
      <div>
        {this.state.editorMode ? (
          <input
            autoFocus={true}
            onBlur={this.deactivateEditorMode}
            onChange={this.onStatusChange}
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
