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
      const ref = firebase.database().ref(emailParse)
      const email = auth.currentUser.email

      setCurrentUser(auth.currentUser)

      // if (email !== 'sutdsmu.almamater@gmail.com') {
      //   ref.push({ log: true })
      //   ref.onDisconnect().remove()
      // } else {
      //   setTimeout(deleteUser, 7200000)
      // }

      const special = ['stl03@sph.com.sg', 'pvotcy@nus.edu.sg', 'trevsze@gmail.com', 'sutdsmu.almamater@gmail.com', 'adrian.chiang.is@gmail.com', 'jczhang@smu.edu.sg', 'lokekyd@gmail.com']
      
      if (!special.includes(email)) {
        /* Delete account after 5s */
        //setTimeout(deleteUser, 5000)

        /* Delete account after 4h */
        setTimeout(deleteUser, 14400000)
      }
      ref.push({ log: true })
      ref.onDisconnect().remove()
      history.push("/stream")
  }

  function deleteUser() {
    return auth.currentUser.delete()
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