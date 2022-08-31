import React from 'react'

export default function PostApi(props) {
console.log(props.user.name.title)
  return (
    <div>
       <h3>Usuario enviado por API</h3>
                <p>{props.user.name.title} {props.user.name.first} {props.user.name.last}</p>
                <p>Email: {props.user.email}</p>
                <p>Cel: {props.user.cell}</p>
                <img src={props.user.picture.large} alt='image not foud' /> 
    </div>
  )
}


                /* <h3>Usuario enviado por API</h3>
                <p>{user?.results[0].name?.title} {user?.results[0].name?.first} {user?.results[0].name?.last}</p>
                <p>Email: {user?.results[0]?.email}</p>
                <p>Cel: {user?.results[0]?.cell}</p>
                <img src={user?.results[0].picture?.large} alt='image not foud' /> */