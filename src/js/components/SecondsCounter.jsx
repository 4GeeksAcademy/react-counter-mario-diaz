import React from "react"

function displaySeconds(seconds) {
    return String(seconds).padStart(6, "0").split("")
}

const SecondsCounter = ({ seconds }) => {
    return (
        <div className="d-flex justify-content-center bg-black p-3">
            <div className="bg-dark text-white rounded px-3 py-2 mx-1 fs-2 d-flex align-items-center justify-content-center">
                <i className="bi bi-clock"></i>
            </div>
            {displaySeconds(seconds).map((digit, index) => (
                <div key={index} className="bg-dark text-white rounded px-3 py-2 mx-1 fs-2 fw-bold">
                    {digit}
                </div>
            ))}
        </div>
    )
}

export default SecondsCounter