import { createStyles } from '@mantine/core'
// import ChevronDown from '../../../assets/svg/chevronDown'
// import ChevronUp from '../../../assets/svg/chevronUp'

interface CurrencyProps {
  isIncrement?: boolean | undefined
  currency?: string | number
}

const useStyles = createStyles(() => ({
  rate: {
    display: 'flex',
    alignItems: 'center',
  },
  red: {
    marginLeft: '0.5 rem',
    color: '#EA3943',
  },
  green: {
    marginLeft: '0.5 rem',
    color: '#17C784',
  },
}))

const Currency = ({ isIncrement, currency }: CurrencyProps) => {
  const { classes } = useStyles()

  return (
    <div className={classes.rate}>
      <p className={isIncrement ? classes.green : classes.red}>${currency}</p>
    </div>
  )
}

export default Currency
