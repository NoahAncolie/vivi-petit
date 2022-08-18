import { useState, useEffect } from "react"
import Article from "./Article"

const Articles = () => {
    
    const [articles, setArticles] = useState()

    const getArticles = () => {
        fetch('http://localhost:3001/articles')
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
            <h1 className="text-center lg-title-l padding-5">Articles rédigés par Viviane Petit</h1>
            {articles ? articles.filter(article => article.archived === false).map((article) => (
                <Article article={article}/>
            )) : <h1>Cette page ne contient aucun article</h1>}
        </div>
    )
}

export default Articles