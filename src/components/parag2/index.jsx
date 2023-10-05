import style from './style.module.css'

export default function Parag2() {
  const classes = [style.blue, style.weight];
  return (
    <>
      <div className={style.blue}>PARAGRAF2.1</div>
      <div className={classes.join(' ')}>PARAGRAF2.2</div>
    </>
  )
}
