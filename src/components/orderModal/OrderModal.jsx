import s from './OrderModal.module.css'
import Modal from "react-modal";


export function OrderModal({ modalIsOpen, setModalIsOpen }) {
    function closeModal() {
        setModalIsOpen(false);
    }
    return (
        <>
            <Modal className={s.modal} isOpen={modalIsOpen}>
                <p>Заявка на товар</p>
                <input type="text" placeholder='Введите название товара'/>
                <input type="text" placeholder='Введите количество товара'/>
                <button class="btn" >Заказать</button>
                <img onClick={closeModal} className={s.close} src="./close.png" alt="close" />
            </Modal>
        </>
    )
}