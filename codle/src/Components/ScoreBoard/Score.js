import React, { useState, useEffect, useReducer } from 'react'
import { FaRegEdit } from 'react-icons/fa';


function reducer(state, action) {
    switch (action.type) {
        case 'countdown':
            return { count: state.count - 1}
        case 'reset':
            return {count: state.count = action.payload.value}
        default:
            return state
    }
}



function Score( { modalStyle, exitModal, userName, recentScores, sessionScore, lifetimeScore, currentScore, isWin } ) {
    const [state, dispatch] = useReducer(reducer, { count: 59 })
    const [suggestedWord, setSuggestedWord] = useState('')
    const [suggestedWords, setSuggestedWords] = useState('')
    const [submit, setSubmit] = useState('')
    const [suggestionObj, setSuggestionObj] = useState({})
    const [submittedToday, setSubmittedToday] = useState(false)
    const [editWord, setEditWord] = useState('')
    const [isEdit, setIsEdit] = useState(false)

    console.log(recentScores)

    //get data for recent scores
    // useEffect(() => {
    //     fetch(`http://localhost:9292/users/${userId.id}/recent`)
    //     .then(res => res.json())
    //     .then(data => setRecentScores(Object.values(data)))
    // }, [])
    // //create li components for recent scores list
    function RecentScoresList() {
        return(
            recentScores.map((score) => (
                <li><strong>Date:</strong> {score.date} <strong>Word:</strong> {score.word} <strong>Score:</strong> {score.score}</li>
            )
        ))       
    }
    
    //Initial post when word is submitted
    function handleSubmit(e) {
        e.preventDefault()
        if (submittedToday === false){
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
                setSuggestionObj(data)
            })
            setSuggestedWord('')
            setSuggestedWords([...suggestedWords, suggestedWord])
            dispatch({ type: 'reset', payload: { value: 59 } })
            setSubmit('')
            setSubmittedToday(true)
        } 
    }
    
    //Timer component that is conditionally rendered in JSX
    function Timer () {
       useEffect(() => {
         const intervalId = setInterval(() => {
            if(state.count > 0) {
                dispatch({ type: 'countdown' })
            } else {
                setSuggestedWords([])
                setSubmit('submit')
            }
        }, 1000) 
        return () => clearInterval(intervalId)
       }, [state.count])
       return <p><em id='submission-text'>Need to edit your submission?</em> 0:{state.count}</p>
    }

    //Delete function for suggested word
    function handleDeleteRow() {
        let id = suggestionObj.id
        fetch('http://localhost:9292/suggested-words' + `/${id}`, {
            method: 'DELETE',
          })
          .then(res => res.json())
          .then(data => console.log(data))
          setSubmittedToday(false)
          setSuggestedWords([])
    }

    //Changes isEdit to true to render the edit form
    function handleEdit() {
        setIsEdit(true)
    }

    //Patch request when edit is submitted
    function handleEditSubmit(e) {
        e.preventDefault()
        const id = suggestionObj.id
        fetch('http://localhost:9292/suggested-words' + `/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
              suggested_word: editWord,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json));
        setSuggestedWords([editWord])
        setIsEdit(false)
    }

    let suggestionLi = suggestedWords.length === 0 ? null : suggestedWords


    function LiDisplay() {
        if (suggestionLi !== null) {
            return suggestionLi.map(word => (<li>{word} <button className='modal-btn' id='sugg-x-btn' onClick={handleDeleteRow}>X</button> <button id='sugg-edit-btn' onClick={handleEdit}><FaRegEdit size={11} /></button></li>))
        } else if (suggestionLi === null) {
            return null
        }
    }

  

    //modify and use this version when current user object is passed in - currently using dummy data
    function ShowGreeting() {
        if (sessionScore === 0) {
            return "Welcome to Codle, the code-related word game!" 
        } else if (sessionScore !== 0 && isWin !== true) {
            return "Keep Playing, you'll get it!"
        } else {
            return "Congratulations!  You won!"
        }
    }


    return (
    <section id={modalStyle}>
        <div id="score-card">
            <h1 id="score-header">Codle</h1>
            <button className='modal-btn' id='score-x-button' onClick={exitModal}>X</button>
            <hr id='score-hr'/>
            <p><ShowGreeting /></p>
            <ul id='score-list'>
                <li><strong>User:</strong> {userName}  </li>
                <li><strong>Game Score:</strong> {sessionScore} </li>
                <li><strong>Lifetime Score:</strong> {lifetimeScore} </li>
            </ul>
            <p id='recent'>Recent scores:</p>
            <div id='recent-scores'>
                <ul>
                    <RecentScoresList />
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
                <button className='modal-btn' type="submit">Send</button>
            </form>
            <ul id='suggestions-ul'>
                {suggestionLi === null || submit === 'submit'
                ? null
                : <Timer />
                }
                {submit === 'submit' 
                ? <p id='thank-you'>Thank you for your submission!</p>
                : null
                }
                {submit === 'submit' 
                ? null
                : isEdit 
                    ? <form onSubmit={handleEditSubmit}>
                    <input 
                      type="text" 
                      placeholder={suggestedWords[0]}
                      name="edit" 
                      id="edit"
                      value={editWord}
                      onChange={(e) => setEditWord(e.target.value)}
                    />
                    <button className='modal-btn' type="submit">Submit</button>
                    </form>
                    : <LiDisplay />
                }
            </ul>
        </div>
    </section>
  )
}

export default Score