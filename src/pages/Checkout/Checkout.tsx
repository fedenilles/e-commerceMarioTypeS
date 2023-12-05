import { CartCredit } from "../../components/ui/CartCredit/CartCredit"
import { Table } from "../../components/ui/Table/Table"
import styles from "./Checkout.module.css"
import {Toaster} from 'sonner'

const Checkout = () => {
  return (
    <div className={styles.container}>
      <Toaster richColors visibleToasts={1}/>
      <h1 className={styles.title}>Checkout</h1>
      <div className={styles.grid}>
        <div className={styles.tableContainer}>
          <Table/>
        </div>
          <CartCredit/>
      </div>
    </div>
  )
}

export default Checkout