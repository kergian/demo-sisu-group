import { useDispatch } from 'react-redux'

import { User, APIUser } from '@/types'

import * as userActions from '@/store/userSlice'
import * as api from '@/services/api'

/**
 * Hook to work with sessions. Creates,
 * deletes, loads sessions
 */
const useSession = () => {
  const dispatch = useDispatch()

  /** Creates a session */
  const createSession = (user: User) => {
    const currentDate = new Date()
    currentDate.setMonth(currentDate.getMonth() + 1)
    const expiration = currentDate.toUTCString()

    localStorage.setItem(
      'sisuSession',
      JSON.stringify({ email: user.email, expiration }),
    )

    dispatch(userActions.setUser(user))
  }
  /** Gets information about the session */
  const getSession = async () => {
    const sisuSession = localStorage.getItem('sisuSession')

    if (sisuSession) {
      const session = JSON.parse(sisuSession)

      try {
        const req = await api.getUser({
          headers: { userId: session.email },
        })
        const data: APIUser = JSON.parse(req)

        return data
      } catch (error) {
        // ...
      }
    }
  }

  /** Destroys the session */
  const destroySession = () => {
    localStorage.removeItem('sisuSession')
    dispatch(userActions.resetUser())
  }

  return {
    createSession,
    getSession,
    destroySession,
  }
}

export { useSession }
