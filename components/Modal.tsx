import { useState, useEffect } from "react";
import { ReactDOM } from "react-dom";
import { FaTimes } from "react-icons/fa";
import {Overlay, ModalBody, Header, Content} from "@/styles/Modal.style"

export default function Modal({show, onClose, children, title}: any) {
    const [isBrowser, setIsBrowser] = useState(false)
    useEffect(() => setIsBrowser(true))
    const handleClose = (e) => {
        e.preventDefault()
        onClose()
    }
    const ModelContent = show ? (
        <Overlay>
            <ModalBody>
                <Header>
                    <a href="#" onClick={handleClose}>
                        <FaTimes />
                    </a>
                    <div>
                        {title && <div>title</div>}
                        <Content>{children}</Content>
                    </div>
                </Header>
            </ModalBody>
        </Overlay>
    )
}