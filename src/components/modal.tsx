const Modal = ({ children }: { children: React.ReactNode }) => {
  const modalStyle = {
    padding: "100px",
    margin: "10px",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    border: "1px solid #ddd",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    backgroundColor: "white"
  }

  return <div style={modalStyle}>{children}</div>
}

export default Modal;