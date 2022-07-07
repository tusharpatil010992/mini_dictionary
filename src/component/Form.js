import { useState, useRef, useEffect } from 'react'

const Form = ({ submitHandler,clearHandler }) => {
    const [search, setSearch] = useState('')

    const inputRef = useRef('');

    useEffect(() => {
        inputRef.current.focus()
    },[])

    const changeHandler = (event) => {
        setSearch(event.target.value)
    }

    const handleClear = () => {
        setSearch('')
        clearHandler()
    }

    return (
        <form className='d-flex'
            onSubmit={submitHandler}
        >
            <div className="input-group">
                <input type="text"
                    name="search"
                    className="form-control rounded"
                    placeholder="Search"
                    autoComplete='Off'
                    value={search}
                    onChange={changeHandler}
                    ref={inputRef} />
                <button type="submit" className="btn btn-outline-secondary">search</button>
                <button type="button" onClick={handleClear} className="btn btn-outline-secondary">clear</button>
            </div>
        </form>
    )
}

export default Form
