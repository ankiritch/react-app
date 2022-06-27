import React, { useRef, useState } from 'react'


export default function Name() {

    const nameRef = useRef()
    const [name, setName] = useState('unknown')

    function submitName() {
        const name = nameRef.current.value

        if (name) setName(name)
        else setName('unknown')
        nameRef.current.value = null
    }


    return (
        <div>
            <input text='text' ref={nameRef} />
            <button onClick={submitName}>Submit Your name</button>
            <p>Your name is {name}</p>
        </div>
    )
}
