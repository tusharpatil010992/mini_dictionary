import React from 'react'

const Display = ({ data }) => {
    const { loader, resp, err } = data
    let results = []
    if (resp.length) {
        for (let eachResp of resp) {
            if (eachResp.meanings) {
                for (let grpMeaning of eachResp.meanings) {
                    const { partOfSpeech, definitions } = grpMeaning
                    let newObj = {
                        'partOfSpeech': partOfSpeech,
                        'definitions': definitions
                    }
                    results.push(newObj)
                }
            }
        }
    }
    return loader ? (<div>Loading...</div>) :
        results.length ? (
            <div className='row'>
                <div className='col-12'>
                    {results.map((key, index) => {
                        return (
                            <div key={index}>
                                <h6 className='h3' key={index}><em>{key.partOfSpeech}</em></h6>
                                <ul>
                                    {
                                        key.definitions.map(def => {
                                            return <li key={def.definition}>{def.definition}</li>
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
        ) : 
        err ? (
            <div className='row'>
                <div className='col-12'>
                    <p className='text-danger'>{err}</p>
                </div>
            </div>
        ) : (<></>)

}

export default Display
