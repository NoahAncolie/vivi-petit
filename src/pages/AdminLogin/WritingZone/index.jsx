import { useState } from "react"

const WritingZone = ({ authorization, refresh }) => {

    const [writing, setWriting] = useState(false)
    const [articleContent, setContent] = useState("")
    const [articleTitle, setTitle] = useState("")

    const setToggleWrite = () => {
        setWriting(!writing)
    }

    const setUpdateContent = (contentInput) => {
        setContent(contentInput)
    }

    const setUpdateTitle = (titleInput) => {
        setTitle(titleInput)
    }

    const saveArticle = () => {
        fetch('http://localhost:3001/articles/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authorization
            },
            body: JSON.stringify({
                article: {
                    name: articleTitle,
                    content: articleContent
                }
            })
        })
        setTimeout(refresh, 100);
    }

    return (
        <div className="padding-10-0">
            <h4 className="padding-1">Zone de rédac 📓</h4>
            <button className="button" onClick={setToggleWrite}>{writing ? "Arrêter de rédiger" : "Rédiger Un Article"}</button>
            {writing ?
                <>
                    <input className="input-field-admin" onChange={(event) => { setUpdateTitle(event.target.value) }} defaultValue={articleTitle} placeholder="Titre de l'article" />
                    <textarea className="article-content-admin-text vh-half" onChange={(event) => { setUpdateContent(event.target.value) }} defaultValue={articleContent} placeholder="écrire le contenu ici" />
                    <button className='button btn-sauvegarder' onClick={() => { setToggleWrite(); saveArticle(); setUpdateContent(""); setUpdateTitle("") }}>Sauvegarder</button>
                </>
                :
                <></>
            }
        </div>
    )
}

export default WritingZone