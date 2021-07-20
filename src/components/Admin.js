import React from 'react'
import  {Link} from 'react-router-dom'

const Admin = () => {
    return (
        <div>
        <div  className="Admin-header">
        <Link to = "/" style={{textDecoration: 'none'}}>  Add Category</Link >
        <Link to = "/" style={{textDecoration: 'none'}}>   Edit Category</Link >
        <Link to = "/" style={{textDecoration: 'none'}}>   Delete Category</Link >
      
        <Link to = "/" style={{textDecoration: 'none'}}>  Add Products</Link >
        <Link to = "/" style={{textDecoration: 'none'}}>    Edit Products</Link >
        <Link to = "/" style={{textDecoration: 'none'}}>    Delete Products</Link >
      
        
        </div>
        </div>
    )
}

export default Admin
