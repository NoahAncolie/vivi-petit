import { ReactMarkdown } from "react-markdown/lib/react-markdown"

const Article = ({ article }) => {

    const toggleContent = () => {
        document.getElementById(`article-${article.id}-content`).classList.toggle('hidden-h')
        document.getElementById(`article-${article.id}-content`).classList.toggle('open')
        document.getElementById(`article-${article.id}-content`).classList.toggle('margin-bottom-10')
    }


    return (
        <div key={article.id} className="padding-0-5">
            <h4 className="article-title" onClick={toggleContent}><ReactMarkdown>{`# ${article.name}`}</ReactMarkdown></h4>
            <div className="hidden-h" id={`article-${article.id}-content`}>
                <ReactMarkdown>
                    {article.content}
                </ReactMarkdown>
            </div>
        </div>
    )
}

export default Article