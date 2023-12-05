/* import { useEffect, useState } from "react" */
import { Hero } from "../../components/ui/Hero/Hero"
import styles from "./Home.module.css"
import { CardProduct } from "../../components/ui/CardProduct"
import { getProducts } from "../../service"
/* import { Product } from "../../interface" */
import {Toaster} from 'sonner'
import { useQuery } from "react-query";
import {useState} from 'react'



const Home = () => {

  const [page, setPage] = useState(1);

  const {data, isLoading, error } = useQuery(
    ['products', page],
    () => getProducts(page),
    {keepPreviousData:true}
    );

/*   const [products, setProducts] = useState<Product[]>([])
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data)
    }).catch(() =>{
      setError(true)
    }).finally(() => {
      setIsLoading(false)
    })
  },[]) */
 

  return (
    <>
     <Hero/>
     <Toaster richColors duration={900}/>
     {isLoading && <p>Loading...</p> }
     {error && <p>Something went</p> }
     <div className={styles.container}>
      {data?.map((product) => (
        <CardProduct key={product.tail} product= {product} />
      ))}
     </div>
     <div className={styles.paginationContainer}>
      <button
      className={styles.paginationButton}
      onClick={() => {setPage(page - 1)}}
      disabled={page === 1}
      >
      previus page
      </button>
      <div className={styles.paginationActive}>
        <span>{page}</span>
      </div>
      <button
      className={styles.paginationButton}
       onClick={() => {setPage(page + 1)}}
      >
      next page
      </button>
     </div>
    </>
  )
}

export default Home