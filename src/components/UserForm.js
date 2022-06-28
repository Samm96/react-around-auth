import React from "react";

function UserForm ({
    buttonText,
    name,
    onSubmit,
    route,
    children,
    title,
    text
}) {
    return(
        <>
        <section className="user-form">
            <div className="user-form__container">
                <h2 className="user-form__title">{title}</h2>
                <form name={name} onSubmit={onSubmit} >
                    <div className="user-form__input-container">
                        {children}
                    </div>
                    <button className="submit-button submit-button_type_user-form">{buttonText}</button>
                    <p className="user-form__text">{text} <a className="user-form__link" href={route}>here</a>!</p>
                </form>
                </div> 
        </section>
        </>
    )
}

export default UserForm;