function MobilePopup ({
isOpen,
route
}) {
    return(
        <>
        <div className={`popup-mobile ${isOpen ? "popup-mobile_open" : ""}`}>
            <div className="popup-mobile__container">
                <p className="popup-mobile__email">userEmail</p>
                <a className="popup-mobile__logout" href={route}>Log out</a>
            </div>
        </div>
        </>
    )
}

export default MobilePopup;