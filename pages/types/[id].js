import dynamic from 'next/dynamic'
const Type = dynamic(() => import('../../components/Type'))

function type({id, darkMode}) {
    return <Type id={id} darkMode={darkMode}/>
}

export async function getServerSideProps(context) {
    const { id } = context.query
    return {
        props: {
            id
        }
    }
}

export default type
