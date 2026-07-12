import { SignIn, UserButton, useUser, useAuth } from '@clerk/react'
import StockList from './components/StockList'
import './App.css'

function App() {
  const { user } = useUser();
  const { isSignedIn } = useAuth();

  return (
    <div className='app-container'>

      <header>
        <h1>Finora.io</h1>
        <h3>Track your favorite stocks.</h3>
      </header>

      {isSignedIn ? (
        <>
          <div className="user-header">
            <UserButton />
            <p>Hello, {user.firstName || user.username || 'User'}! 👋 </p>
          </div>
          <StockList userId={user?.id} />
        </>
      ) : (
        <div>
          <p>Login to manage your stocks.</p>
          <SignIn />
        </div>
      )}

    </div>
  )
}

export default App
