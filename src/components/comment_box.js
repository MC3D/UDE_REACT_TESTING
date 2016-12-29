import React, { Component } from 'react'

export default class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: '' };
  }
  _handleInput(event) {
    this.setState({ comment: event.target.value });
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.setState({ comment: '' });
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit.bind(this)} className='comment-box'>
        <textarea value={this.state.comment} onChange={this._handleInput.bind(this)} />
        <button action='submit'>Submit Comment</button>
      </form>
    )
  }
}
