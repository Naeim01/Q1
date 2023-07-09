import React, { Component } from 'react'

export default class Class extends Component {
  render() {
    return (
      <>
      <div className="card">
        <img src={this.props.logo} width={"100px"} alt="" />
      <h1>{this.props.title}</h1>
      <p>{this.props.desc}</p>
      </div>
      </>
    )
  }
}
