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
        fetch(`http://localhost:3001/articles/${article.id}`, {
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
        fetch(`http://localhost:3001/articles/${article.id}`, {
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
        fetch(`http://localhost:3001/articles/${article.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authorization
            }
        })
        setTimeout(refresh, 100);
    }

    return (
        <div className="margin-y-5">
            <h5 className="article-title-admin">{article.name}</h5>
            <div id={`article-content${article.id}`}>
                {writing ?
                    <textarea className="article-content-admin-text vh-half" onChange={(event) => { setUpdateContent(event.target.value) }} defaultValue={articleContent} />
                    :
                    <p className="article-content-admin" onClick={() => { setToggleWrite() }}>{articleContent}</p>
                }
            </div>
            <div className="articles-actions flex space-between" id={`buttons-of-article${article.id}`}>
                <div>
                    <button className="button btn-archiver" onClick={archiveArticle}>{!article.archived ? "Archiver" : "Remettre sur le site" }</button>
                    {writing ?
                        <button className='button btn-sauvegarder' onClick={() => { setToggleWrite(); saveArticle() }}>Sauvegarder</button>
                        :
                        <></>
                    }
                </div>
                <div>
                    <button className="button btn-supprimer" onClick={deleteArticle}>Supprimer</button>
                </div>
            </div>
        </div>
    )
}

export default AdminArticle