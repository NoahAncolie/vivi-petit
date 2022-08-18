const Article = ({ article }) => {

    const toggleContent = () => {
        document.getElementById(`article-${article.id}-content`).classList.toggle('hidden-h')
        document.getElementById(`article-${article.id}-content`).classList.toggle('open')
        document.getElementById(`article-${article.id}-content`).classList.toggle('margin-bottom-10')
    }


    return (
        <div key={article.id} className="padding-0-5">
            <h4 className="article-title" onClick={toggleContent}>{article.name}</h4>
            <p className="text-justify hidden-h" id={`article-${article.id}-content`}>{article.content}</p>
        </div>
    )
}

export default Article