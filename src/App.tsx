
import './App'
import Modal from "./components/Modal/Modal";
import {useState} from "react";
import Button from "./components/Button/Button";
import Alert from "./components/Alert/Alert";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showAlert1, setShowAlert1] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);
      return (
      <>
        <h4>Cart</h4>
        <Button
          title="Modal"
          onDismiss={() => setShowModal(true)}
        />
        <Button
          title="Alert1"
          onDismiss={() => setShowAlert1(true)}
        />
        <Button
          title="Alert2"
          onDismiss={() => setShowAlert2(true)}
        />

        <Modal
          show={showModal}
          title="Alert"
          onClose={() => setShowModal(false)}
        >

          <div className="modal-header">
            <div>Content</div>
          </div>

          <div className="modal-footer">
            <button
              className="btn btn-danger"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </Modal>

        <Alert
          text="This is a warning type alert"
          type="warning"
          show={showAlert1}
          onDismiss={() => setShowAlert1(false)}

        />
        <Alert
          text="This is a success type alert"
          type="success"
          show={showAlert2}
          children='это элемент?'
        />
    </>
  )
}

export default App
