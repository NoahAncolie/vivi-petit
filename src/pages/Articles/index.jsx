import { useAtomValue } from "jotai"
import { JWT } from "../../stores/user"

const Articles = () => {
    const JwtUser = useAtomValue(JWT)

    return (
        <div className="bg-main vh-full">
            Articles from {JwtUser ?
                <div>
                    
                </div>
                : // JONCTION : ⬆ UTILISATEUR CONNECTÉ , ⬇ UTILISATEUR NON CONNECTÉ
                <form>
                    <label for="email" class="block text-sm ">Email</label>
                    <div class="">
                        <input type="email" name="email" id="email" className="input-field"/>
                    </div>
                    <div class="">
                        <input type="email" name="email" id="email" className="input-field"/>
                    </div>
                    <div class="">
                        <input type="submit" value="Se connecter" className="sumbit-btn-light"/>
                    </div>
                </form>
            }
        </div>
    )
}

export default Articles