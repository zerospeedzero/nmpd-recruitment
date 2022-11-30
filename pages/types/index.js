import styles from '../../styles/types.module.css'
import TypeLink from '../../components/TypeLink'

export default function types() {
    return (
        <div className={styles.Types}>
            <div className={styles.Row}>
                <TypeLink title='vt' bgColor='#df3e51' src='/vtSmall.mp4' />
                <TypeLink title='pm' bgColor='#a19989' src='/pmSmall.mp4' />
                {/* <TypeLink title='Adventurer' bgColor='#da552d' src='/adventurerSmall.mp4' />
                <TypeLink title='Maker' bgColor='#4b9d81' src='/makerSmall.mp4' /> */}
            </div>
            <div className={styles.Row}>
                <TypeLink title='ia' bgColor='#3ca0a0' src='/iaSmall.mp4'/>
                <TypeLink title='ad' bgColor='#892078' src='/adSmall.mp4'/>
                {/* <TypeLink title='Innovator' bgColor='#2e5096' src='/innovatorSmall.mp4' />
                <TypeLink title='Visionary' bgColor='#fca63f' src='/visionarySmall.mp4' /> */}
            </div>
        </div>
    )
}
