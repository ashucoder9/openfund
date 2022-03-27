import React, { useState } from 'react'

function Create({toggleModal}) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [target, setTarget] = useState(0)
    const [showNotification, setShowNotification] = useState(false)

    const handleSubmit = (event) => {
    event.preventDefault()
    window.contract.add_crowdfund({title:title, donate:target * 1, description:description})
    setShowNotification(!showNotification)
    alert(`OpenFund Details: ${title} ${target} ${description}`)
    }

    console.log(`its ${toggleModal}`);

    return (
    <div>
        {toggleModal == true && (
        <div className='addopenfund'>
            <form onSubmit={handleSubmit}>
            <label>
                Enter Project Title:
                <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            </label>
            <label>
                Enter Funding Target:
                <input
                type="number"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                />
            </label>
            <label>
                Describe Your Project:
                <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
            </label>
            <input type="submit" className='submit' />
            </form>
        </div>
        )}
        
        {showNotification && <Notification />}

    </div>   
    )
}


function Notification() {
    return (
    <aside>
        <footer>
        <div>✔ Succeeded </div> 
        <div>Hurray! You Added New Project</div>
        </footer>
    </aside>
    )
}
export default Create