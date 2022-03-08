import React, { useState } from 'react'

function Score() {
    const [userName, setUserName] = useState('default')
    const [sessionScore, setSessionScore] = useState(0)
    const [ lifetimeScore, setLifetimeScore] = useState(0)
    const [suggestedWord, setSuggestedWord] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        const newObj = {
            suggested_word: suggestedWord,
            approved: false, 
            user_id: 1
        }
        fetch('http://localhost:9292/suggested-words', {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newObj)
            })
            .then(res => res.json())
            .then(data => {
              console.log(data)
            })
            setSuggestedWord('')
    }

  return (
    <section id='score-container'>
        <div id="score-card">
            <h1 id="score-header">Codle</h1>
            <hr/>
            <ul id='score-list'>
                <li><strong>User:</strong> {userName}  </li>
                <li><strong>Game Score:</strong> {sessionScore} </li>
                <li><strong>Total Score:</strong> {lifetimeScore} </li>
            </ul>
            <p id='recent'>Recent scores:</p>
            <div id='recent-scores'>
                <ul>
                    <li><strong>Date:</strong> 03/08/2022 <strong>Word:</strong> Ruby <strong>Score:</strong> 5</li>
                    <li><strong>Date:</strong> 03/09/2022 <strong>Word:</strong> Ruby <strong>Score:</strong> 2</li>
                    <li><strong>Date:</strong> 03/10/2022 <strong>Word:</strong> Ruby <strong>Score:</strong> 3</li>
                    <li><strong>Date:</strong> 03/11/2022 <strong>Word:</strong> Ruby <strong>Score:</strong> 5</li>
                    <li><strong>Date:</strong> 03/12/2022 <strong>Word:</strong> Ruby <strong>Score:</strong> 5</li>
                </ul>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="formClass">
                    <label for="suggestion">Help build the game:</label><br/>
                    <input 
                    type="text" 
                    placeholder="Make a suggestion" 
                    name="suggestion" 
                    id="suggestion"
                    value={suggestedWord}
                    onChange={(e) => setSuggestedWord(e.target.value)}
                    />
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    </section>
  )
}

export default Score