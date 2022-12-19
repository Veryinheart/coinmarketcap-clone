import { createStyles } from '@mantine/core'
import ChevronDown from '../../../assets/svg/chevronDown'
import ChevronUp from '../../../assets/svg/chevronUp'

interface RateProps {
  isIncrement?: boolean | undefined
  rate?: string | number
}

const useStyles = createStyles(() => ({
  rate: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '12px',
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

const Rate = ({ isIncrement, rate }: RateProps) => {
  const { classes } = useStyles()

  return (
    <div className={classes.rate}>
      {isIncrement ? (
        <ChevronUp fill="#17C784" />
      ) : (
        <ChevronDown fill="#EA3943" />
      )}
      &nbsp;
      <p className={isIncrement ? classes.green : classes.red}>{rate}%</p>
    </div>
  )
}

export default Rate
