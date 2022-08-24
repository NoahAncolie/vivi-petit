import { useState, useEffect } from "react"
import Article from "./Article"

const Articles = () => {
    
    const [articles, setArticles] = useState()

    const getArticles = () => {
        fetch('http://37.187.179.249:3000/articles')
            .then((answer) => { 
                return answer.json() })
            .then((datas) => { 
                setArticlesList(datas.reverse())
            })
    }

    const setArticlesList = (data_obj) => {
        setArticles(data_obj)
    }

    useEffect(() => {
        getArticles()
    }, [])
    
    return (
        <div className="bg-main vh-full fade-out" id="page">
            <h1 className="text-center lg-title-l padding-5">Articles</h1>
            {articles ? articles.filter(article => article.archived === false).map((article) => (
                <Article article={article}/>
            )) : <h1>Cette page ne contient aucun article</h1>}
        </div>
    )
}

export default Articles