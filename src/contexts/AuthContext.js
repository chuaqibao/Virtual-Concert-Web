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

      setCurrentUser(auth.currentUser)
      
      ref.push({ log: true })
      ref.onDisconnect().remove()

      loginRef.push({
        email: email,
        time: d
      })

      history.push("/stream")
  }

  function checkUser() {
    return auth.currentUser.email
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}