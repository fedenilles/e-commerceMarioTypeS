import styles from "./CartModal.module.css"
import Close from "../../../assets/close.svg"
import { FC } from "react"
import { Table } from "../Table/Table"
import { useNavigate } from "react-router-dom"


interface Props{
    handleShowwCartModal : () => void 
}

export const CartModal: FC<Props> = ({handleShowwCartModal}) => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate("./checkout")
        handleShowwCartModal()
    }

  return (
    <div className={styles.modalContainer}>
        <button className={styles.modalCloseButton} onClick={handleShowwCartModal} >
            <img src={Close} alt="Close" />
        </button>
        <Table/>
        <div className={styles.modalButtonContainer}>
            <button onClick={handleNavigate} >Ckeckout</button>
        </div>
    </div>
  )
}
