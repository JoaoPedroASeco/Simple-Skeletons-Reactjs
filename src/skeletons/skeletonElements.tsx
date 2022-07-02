import './Skeletons.css'

export const SkeletonElements = ({ type }: any) => {
  const classes = `skeleton ${type}`
  
  return (
    <div className={classes} />
  )
}