import style from './style.module.css'
export default function Parag1() {
  const classes = [style.red, style.weight];
  const class1=style.red, class2=style.weight;
  return (
    <>
      <div className={style.red + ' ' + style.weight}>PARAGRAF1.1</div>
      <div className={classes.join(' ')}>PARAGRAF1.2</div>
      <div className={`${class1} ${class2}`}>PARAGRAF1.3</div>
    </>
    )
}
