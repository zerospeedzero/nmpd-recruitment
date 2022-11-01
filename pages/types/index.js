import styles from '../../styles/types.module.css'
import TypeLink from '../../components/TypeLink'

export default function types() {
    return (
        <div className={styles.Types}>
            <div className={styles.Row}>
                <TypeLink title='gd' bgColor='#df3e51' src='/gdSmall.mp4' />
                <TypeLink title='wd' bgColor='#a19989' src='/wdSmall.mp4' />
                {/* <TypeLink title='Adventurer' bgColor='#da552d' src='/adventurerSmall.mp4' />
                <TypeLink title='Maker' bgColor='#4b9d81' src='/makerSmall.mp4' /> */}
            </div>
            <div className={styles.Row}>
                <TypeLink title='cc' bgColor='#3ca0a0' src='/ccSmall.mp4' />
                <TypeLink title='ds' bgColor='#892078' src='/dsSmall.mp4' />
                {/* <TypeLink title='Innovator' bgColor='#2e5096' src='/innovatorSmall.mp4' />
                <TypeLink title='Visionary' bgColor='#fca63f' src='/visionarySmall.mp4' /> */}
            </div>
        </div>
    )
}
