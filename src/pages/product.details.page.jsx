import React, { useEffect,useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import { fetchProductDetails } from '../services/products.service';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
export const ProductDetails = () => {
    //Get by id 
    const {id} = useParams();
    const [product,setProduct] = useState({});

    useEffect(() => {
        async function fetch(){
            let res = await fetchProductDetails(id);
            res = await res.json();
            setProduct(res);
        }
        fetch();
    },[])
  return (
    <div>
    <Link to='/products'><ArrowBackRoundedIcon/></Link>    
    <p>{product.title}</p>
    </div>

  )
}
