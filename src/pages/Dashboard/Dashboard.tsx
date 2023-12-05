import { useNavigate } from "react-router-dom"
import styles from "./Dashboard.module.css"
import {useEffect, useState} from 'react'
import { useMutation } from "react-query"
import { createProduct } from "../../service"
import { Product } from "../../interface"

const Dashboard = () => {

    const [product, setProduct] = useState({
        amiiboSeries: "",
        character: "",
        gameSeries: "",
        head: "",
        image: "",
        name: "",
        releaseDate: "",
        tail: "",
        type: "",
        price: 0,
    })

  const navigate =  useNavigate()

  useEffect(() => {
    const userLogin = localStorage.getItem("userLogin")
    if(!userLogin) {
        navigate("/Login")
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("userLogin")
    navigate("/Login")
  }

  const handleChage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
        ...product,
        [e.target.name] : e.target.value
    })
  }

  const mutation = useMutation((newProduct:Product) => {
    return createProduct(newProduct)
  })

  const handleSubmit = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutation.mutate(product);
    
  }
  
  return (
    <div className={styles.container}>
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
        <form onSubmit={handleSubmit}>
            <div className={styles.formControlLogin}>
                <label htmlFor="amiiboSeries">Amiibo Series</label>
                <input type="text"
                id="amiiboSeries"
                name="amiiboSeries"
                value={product.amiiboSeries}
                onChange={handleChage}
                required
                />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="character">Character</label>
                <input type="text"
                id="character"
                name="character"
                value={product.character}
                onChange={handleChage}
                required
                />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="gameSeries">GameSeries</label>
                <input type="text"
                id="gameSeries"
                name="gameSeries"
                value={product.gameSeries}
                onChange={handleChage}
                required
                />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="head">Head</label>
                <input type="text"
                id="head"
                name="head"
                value={product.head}
                onChange={handleChage}
                required
                />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="image">Image</label>
                <input type="url"
                id="image"
                name="image"
                value={product.image}
                onChange={handleChage}
                required
                />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="name">Name</label>
                <input type="text"
                id="name"
                name="name"
                value={product.name}
                onChange={handleChage}
                required
                />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="releaseDate">Release</label>
                <input type="date"
                id="releaseDate"
                name="releaseDate"
                value={product.releaseDate}
                onChange={handleChage}
                required
                />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="tail">Tail</label>
                <input type="text"
                id="tail"
                name="tail"
                value={product.tail}
                onChange={handleChage}
                required
                />
            </div>

            <div className={styles.formControlLogin}>
                <label htmlFor="type">Type</label>
                <input type="text"
                id="type"
                name="type"
                value={product.type}
                onChange={handleChage}
                required
                />
            </div>
            <div className={styles.formControlLogin}>
                <label htmlFor="price">Price</label>
                <input type="number"
                id="price"
                name="price"
                value={product.price}
                onChange={handleChage}
                required
                />
            </div>
            <div className={styles.formControlLogin}>
                <button type="submit">
                    Add product
                </button>
            </div>
        </form>
        
    </div>
  )
}

export default Dashboard