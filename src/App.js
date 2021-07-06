
import React, {Component} from 'react'
import firebase from './firebase'
export default class App extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  componentDidMount(){
    const messaging = firebase.messaging()
    messaging.requestPermission().then((token)=>{
      return messaging.getToken()
    }).then((token)=>{
      console.log("Token  =>  ", token)
    }).catch(()=>{
      console.error('error')
    })

  }

  render(){
    return (
      <div></div>
    )
  }
}