import dynamic from 'next/dynamic'
const Type = dynamic(() => import('../../components/Type'))

function type({id, darkMode}) {
    return <Type id={id} darkMode={darkMode}/>
}

// export async function getStaticPaths() {
//     return {
//       paths: [{ params: { id: 'innovator' } }, { params: { id: 'artist' } }, { params: { id: 'thinker' } }, { params: { id: 'adventurer' } }, 
//       { params: { id: 'maker' } }, { params: { id: 'producer' } }, { params: { id: 'dreamer' } }, { params: { id: 'visionary' } }],
//       fallback: false, // can also be true or 'blocking'
//     }
//   }

// export async function getStaticProps(context) {
//     const  id  = context.params.id
//     console.log(context)
//     console.log(id)
//     return {
//         props: { id: id},
//     }
// }


export async function getServerSideProps(context) {
    const { id } = context.query
    return {
        props: {
            id
        }
    }
}


export default type
