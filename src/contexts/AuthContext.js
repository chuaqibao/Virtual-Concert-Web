import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase"
import firebase from 'firebase'
import { useHistory } from "react-router-dom"

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
    deleteUser,
    }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  function login(password) {
      const ref = firebase.database().ref(password)
      ref.push({ log: true })
      ref.onDisconnect().remove()
      setCurrentUser(auth.currentUser)
      { /* Delete account after 10s */ }
      //setTimeout(deleteUser, 10000)
      history.push("/stream")
  }

  function deleteUser() {
    return auth.currentUser.delete()
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}