import React, { useContext, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

import firebase from 'firebase/app'
import 'firebase/database'

import { auth } from "../firebase"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  const history = useHistory()
  const value = {
    currentUser,
    login,
    //deleteUser,
    checkUser
    }


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  function login(emailParse) {

      var d = new Date().toString()
      
      const loginRef = firebase.database().ref("logins")
      const ref = firebase.database().ref(emailParse)
      const email = auth.currentUser.email

      //console.log(email)
      setCurrentUser(auth.currentUser)


      //const special = ['stl03@sph.com.sg', 'trevsze@gmail.com', 'adrian.chiang.is@gmail.com', 'jczhang@smu.edu.sg', 'lokekyd@gmail.com', 'touliang@hotmail.com', 'phytanb@nus.edu.sg']
      
      ref.push({ log: true })
      ref.onDisconnect().remove()

      loginRef.push({
        email: email,
        time: d
      })

      history.push("/stream")
      // if (!special.includes(email)) {
      //   /* Delete account after 5s */
      //   setTimeout(deleteUser, 5000)

      //   /* Delete account after 4h */
      //   //setTimeout(deleteUser, 14400000)
      // }

  }

  // function deleteUser() {
  //   console.log("RUN")
  //   return auth.deleteUser(uid)
  // }

  function checkUser() {
    return auth.currentUser.email
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}