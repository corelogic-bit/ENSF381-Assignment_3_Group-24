function DisplayStatus({ type, message }) {
    let className = "status-message";
    if (type === "success") {
        className += " status-success";
    } else {
        className += " status-error";

    }
    
    
    return <div className = {className}>{message}</div>
    

}
export default DisplayStatus;