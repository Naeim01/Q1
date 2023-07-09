import React from 'react'


export default function Function(props) {
  return (
    <>
        <div className="card">
        <img src={props.logo} width={"100px"} alt="" />
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
        </div>
    </>
  )
}
