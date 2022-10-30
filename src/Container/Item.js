import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "../Container/item.css"
import { Link } from 'react-router-dom';

export const Item = ({producto}) =>{

    return (
    <div className='tarjeta'>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={producto.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {producto.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {producto.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={producto/id}>
          <Button size="small" color="primary">
            Mas Informacion
          </Button>
          </Link>
        </CardActions>
      </Card>
      </div>
  )
}

const style={
  container:{
    display:"flex",
  }

}
//{"id":11,"title":"Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5","price":109,"description":"3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.","category":"electronics","image":"https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg","rating":{"rate":4.8,"count":319}}