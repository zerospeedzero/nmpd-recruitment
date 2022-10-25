import styles from '../../styles/types.module.css'
import TypeLink from '../../components/TypeLink'

export default function types() {
    return (
        <div className={styles.Types}>
            <div className={styles.Row}>
                <TypeLink title='Artist' bgColor='#df3e51' src='/artistSmall.mp4' />
                <TypeLink title='Thinker' bgColor='#a19989' src='/thinkerSmall.mp4' />
                <TypeLink title='Adventurer' bgColor='#da552d' src='/adventurerSmall.mp4' />
                <TypeLink title='Maker' bgColor='#4b9d81' src='/makerSmall.mp4' />
            </div>
            <div className={styles.Row}>
                <TypeLink title='Producer' bgColor='#3ca0a0' src='/producerSmall.mp4' />
                <TypeLink title='Dreamer' bgColor='#892078' src='/dreamerSmall.mp4' />
                <TypeLink title='Innovator' bgColor='#2e5096' src='/innovatorSmall.mp4' />
                <TypeLink title='Visionary' bgColor='#fca63f' src='/visionarySmall.mp4' />
            </div>
        </div>
    )
}
