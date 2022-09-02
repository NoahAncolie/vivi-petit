import { useState } from "react"

const AdminArticle = ({ article, authorization, refresh }) => {

    const [writing, setWriting] = useState(false)
    const [articleContent, setContent] = useState(article.content)

    const setToggleWrite = () => {
        setWriting(!writing)
    }


    const setUpdateContent = (contentInput) => {
        setContent(contentInput)
    }

    const saveArticle = () => {
        fetch(`https://database.vivianepetitavocat.fr/articles/${article.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authorization
            },
            body: JSON.stringify({
                article: {
                    content: articleContent
                }
            })
        })
        setTimeout(refresh, 100);
    }

    const archiveArticle = () => {
        fetch(`https://database.vivianepetitavocat.fr/articles/${article.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authorization
            },
            body: JSON.stringify({
                article: {
                    archived: !article.archived
                }
            })
        })
        setTimeout(refresh, 100);
    }

    const deleteArticle = () => {
        fetch(`https://database.vivianepetitavocat.fr/articles/${article.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authorization
            }
        })
        setTimeout(refresh, 100);
    }

    return (
        <div className="padding-y-5 bg-light">
            <h5 className="article-title-admin title border-left border-dark">{article.name}</h5>
            <div id={`article-content${article.id}`}>
                {writing ?
                    <textarea className="article-content-admin-text vh-half text-black border-1 border-dark" onChange={(event) => { setUpdateContent(event.target.value) }} defaultValue={articleContent} />
                    :
                    <p className="article-content-admin text-black border-1 border-dark" onClick={() => { setToggleWrite() }}>{articleContent}</p>
                }
            </div>
            <div className="articles-actions flex space-between" id={`buttons-of-article${article.id}`}>
                <div>
                    <button className="button-dark btn-archiver" onClick={archiveArticle}>{!article.archived ? "Archiver" : "Remettre sur le site" }</button>
                    {writing ?
                        <button className='button-dark btn-sauvegarder' onClick={() => { setToggleWrite(); saveArticle() }}>Sauvegarder</button>
                        :
                        <></>
                    }
                </div>
                <div>
                    <button className="button-dark btn-supprimer" onClick={deleteArticle}>Supprimer</button>
                </div>
            </div>
        </div>
    )
}

export default AdminArticle