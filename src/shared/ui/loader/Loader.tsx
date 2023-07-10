import styles from './Loading.module.scss'

export const Loader = () => {
  return (
    <>
      <div className={`loader ${styles.loader}`}>
        <div className={`loader__animation ${styles.loaderAnimation}`}></div>
        <div className={`loader__title ${styles.loaderTitle} font-medium`}>
          Loading...
        </div>
      </div>
    </>
  )
}
