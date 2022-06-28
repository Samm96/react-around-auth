import React from "react";

function InfoTooltip({ onClose, isOpen, name, onSubmit, status }) {
  return (
    <>
      <div className={`popup-form ${isOpen ? "popup-form_open" : ""}`}>
        <div className="popup-form__container popup-form__container_type_picture">
          <form name={name} onSubmit={onSubmit} noValidate>
            <button
              type="button"
              className="close-button"
              onClose={onClose}
            ></button>
            {status === "success" ? (
              <>
                <img
                  className="popup-form__picture"
                  src={require("../images/checkMark.png")}
                  alt="Check Mark"
                />
                <p className="popup-form__text">
                  Success! You have now been registered.
                </p>
              </>
            ) : (
              <>
                <img
                  className="popup-form__picture"
                  src={require("../images/xMark.png")}
                  alt="X Mark"
                />
                <p className="popup-form__text">
                  Oops, something went wrong! Please try again.
                </p>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default InfoTooltip;
