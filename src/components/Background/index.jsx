const Background = () => {

    const shrink = () => {
        let myArr = document.getElementsByClassName('tortoiseshell')
        console.log(myArr)
        for (let i = 0; i < myArr.length; i++) {
            setTimeout(() => {
                myArr[myArr.length - i - 1].classList.toggle('disapear')
                myArr[myArr.length - i - 1].classList.toggle('appear')
            }, i * 100)
             
        }

    }

    return (
        <div className="vivi-wrap">
            <div className="tortoiseshell">
                <button onClick={shrink}>Shrink here</button>
            </div>
            <div className="tortoiseshell"></div>
            <div className="tortoiseshell"></div>
            <div className="tortoiseshell"></div>
            <div className="tortoiseshell"></div>
            <div className="tortoiseshell"></div>
            <div className="tortoiseshell"></div>
            <div className="tortoiseshell"></div>
            <div className="tortoiseshell"></div>
            <div className="tortoiseshell"></div>
            <div className="tortoiseshell"></div>
            <div className="tortoiseshell"></div>
            <div className="tortoiseshell"></div>
            <div className="tortoiseshell"></div>
            <div className="tortoiseshell"></div>
            <div className="tortoiseshell"></div>
            <div className="tortoiseshell"></div>
            <div className="tortoiseshell"></div>
            <div className="tortoiseshell"></div>
            <div className="tortoiseshell"></div>
            <div className="tortoiseshell"></div>
            <div className="tortoiseshell"></div>
            <div className="tortoiseshell"></div>
            <div className="tortoiseshell"></div>
            <div className="tortoiseshell"></div>
            <div className="tortoiseshell"></div>
            <div className="tortoiseshell"></div>
            <div className="tortoiseshell"></div>
            <div className="tortoiseshell"></div>
            <div className="tortoiseshell"></div>
            <div className="tortoiseshell"></div>
            <div className="tortoiseshell"></div>
            <div className="tortoiseshell"></div>
            <div className="tortoiseshell"></div>
            <div className="tortoiseshell"></div>
            <div className="tortoiseshell"></div>
            <div className="tortoiseshell"></div>
            <div className="tortoiseshell"></div>
            <div className="tortoiseshell"></div>
            <div className="tortoiseshell"></div>
        </div>
    )
}

export default Background