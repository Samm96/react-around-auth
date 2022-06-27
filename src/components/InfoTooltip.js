function InfoTooltip ({
text,
}) {
    return(
        <>
            <div className="popup-form popup-form_open">
                <div className="popup-form__container popup-form__container_type_picture">
                <button
                    type="button"
                    className="close-button"
                ></button>
                <img className="popup-form__picture" src={require("../images/checkMark.png")} alt="Check Mark"/>
                <p className="popup-form__text">{text}</p>
                </div>
            </div>
        </>
    )
}

export default InfoTooltip;