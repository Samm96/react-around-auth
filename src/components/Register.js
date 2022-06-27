function Register ({
    buttonText,
    name,
    onSubmit,
    text,
    route,
    title,
    children
}) {
    return(
        <>
        <section className="register">
            <div className="register__container">
                <h2 className="register__title">{title}</h2>
                <form name={name} onSubmit={onSubmit} >
                    <div className="register__input-container">
                        {children}
                    </div>
                    <button className="submit-button submit-button_type_register">{buttonText}</button>
                    <p className="register__text">{text}<a className="register__link" href={route}>here</a>!</p>
                </form>
                </div> 
        </section>
        </>
    )
}

export default Register;