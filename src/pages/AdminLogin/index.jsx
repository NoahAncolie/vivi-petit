import { useAtomValue } from "jotai"
import { JWT } from "../../stores/user"

const AdminLogin = () => {
    const JwtUser = useAtomValue(JWT)

    const connect = (event) => {
        const datas = Array.from(new FormData(document.getElementById('loginForm')))
        console.log(datas[0][1])
        console.log(datas[1][1])
        fetch('http://localhost:3001/users/sign_in', {
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
            console.log(answer)
            return answer.json() })
        .then((datas) => {console.log(datas) })
    }

    return (
        <div className="bg-main vh-full">
            {JwtUser ?
                <div>
                    
                </div>
                : // JONCTION : ⬆ UTILISATEUR CONNECTÉ , ⬇ UTILISATEUR NON CONNECTÉ
                <form className="admin-form" id="loginForm" onSubmit={(event) => {event.preventDefault(); connect(event)}}>
                    <label htmlFor="email" className="block text-sm ">Email</label>
                    <div class="">
                        <input type="email" name="email" id="email" className="input-field"/>
                    </div>
                    <br/>
                    <label htmlFor="password" className="block text-sm ">Mot de passe</label>
                    <div class="">
                        <input type="password" name="password" id="password" className="input-field"/>
                    </div>
                    <br/>
                    <br/>
                    <div class="">
                        <input type="submit" value="Se connecter" className="sumbit-btn-light"/>
                    </div>
                </form>
            }
        </div>
    )
}

export default AdminLogin