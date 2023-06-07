import { makeStyles } from '@material-ui/core/styles'
import { Routes, Route, Navigate, BrowserRouter as Router } from 'react-router-dom'
import { Homepage } from './pages/Homepage'

const useStyles = makeStyles(
  theme => ({
    root: {
      backgroundColor: 'green', // this works
    },
  }),
  { name: 'App' }
)

function App() {
  const classes = useStyles()
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  )
}

export default App
