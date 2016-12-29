import React, { Component } from 'react'

export default class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: '' };
  }
  _handleInput(event) {
    this.setState({ comment: event.target.value });
  }

  render() {
    return (
      <div className='comment-box'>
        <textarea value={this.state.comment} onChange={this._handleInput.bind(this)} />
        <button>Submit Comment</button>
      </div>
    )
  }
}
