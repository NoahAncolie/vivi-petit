import { useEffect, useState } from "react"
import { useAtom } from "jotai"
import { JWT } from "../../stores/user"
import AdminArticle from "./AdminArticle"
import WritingZone from "./WritingZone"

const AdminLogin = () => {
    const [JwtUser, setJwt] = useAtom(JWT)
    const [articles, setArticles] = useState()
    const [newArticle, setRefresh] = useState(1) 

    const getArticles = () => {
        fetch('http://37.187.179.249:3000/articles')
            .then((answer) => {
                return answer.json()
            })
            .then((articles) => {
                setArticlesList(articles.reverse())
            })
    }

    const setArticlesList = (data_obj) => {
        setArticles(data_obj)
    }

    const setRefreshList = () => {
        setRefresh(newArticle + 1)
    }

    const connect = (event) => {
        const datas = Array.from(new FormData(document.getElementById('loginForm')))
        fetch('http://37.187.179.249:3000/users/sign_in', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    email: datas[0][1],
                    password: datas[1][1]
                }
            })
        }).then((answer) => {
            setJwt(answer.headers.get("Authorization"))
            return answer.json()
        })
    }

    useEffect(() => {
        getArticles()
    }, [newArticle])

    return (
        <div className="bg-light vh-full margin-0" id="page">
            {JwtUser ?
                <>
                    <h1 className="text-center padding-1">👩🏻‍🏫 Administration Articles 👩🏻‍🏫</h1>
                    <WritingZone authorization={JwtUser} refresh={setRefreshList} />
                    {articles.map((article) => (
                        <AdminArticle article={article} key={article.id} authorization={JwtUser} refresh={setRefreshList}/>
                    ))}
                </>
                : // JONCTION : ⬆ UTILISATEUR CONNECTÉ , ⬇ UTILISATEUR DÉCONNECTÉ
                <form className="admin-form" id="loginForm" onSubmit={(event) => { event.preventDefault(); connect(event) }}>
                    <label htmlFor="email" className="block text-sm ">Email</label>
                    <div className="">
                        <input type="email" name="email" id="email" className="input-field" />
                    </div>
                    <br />
                    <label htmlFor="password" className="block text-sm ">Mot de passe</label>
                    <div className="">
                        <input type="password" name="password" id="password" className="input-field" />
                    </div>
                    <br />
                    <br />
                    <div className="">
                        <input type="submit" value="Se connecter" className="sumbit-btn-light" />
                    </div>
                </form>
            }
        </div>
    )
}

export default AdminLogin