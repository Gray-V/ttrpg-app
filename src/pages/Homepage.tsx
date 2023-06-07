import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(
  theme => ({
    root: {
      backgroundColor: 'lightblue',
    },
  }),
  { name: 'Homepage' }
)

export const Homepage = () => {
  const classes = useStyles()
  return <div className={classes.root}>HOMEPAGE</div>
}
