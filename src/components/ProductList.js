import React from 'react'
import { useContext } from "react";
import { useState } from "react";
import ProductsContext from "../context/ProductsContext";
import ProductItem from "./ProductItem"
import { Link } from 'react-router-dom'

const ProductList = (props) => {
        const { filteredProducts,selectedcatName} = useContext(ProductsContext);
        const [paginatedProducts, setpaginatedProducts] = useState([]);
        const [currentPage, setCurrentPage] = useState(0);

        const productInit = filteredProducts;
        const pageSize = 12;
        var startIndex = 0;
        var endIndex = startIndex + pageSize;
        const numberOfPages = Math.ceil(productInit.length / pageSize);
        var pages = [];
        var index = 1;
        var R1 = 0;
        var R2 = 11;

        React.useEffect(() => {
                const firstPage = productInit.slice(0, 12);
               setpaginatedProducts(firstPage);
        },[]);
        
        React.useEffect(() => {
                const firstPage = productInit.slice(0, 12);
                setpaginatedProducts(firstPage);
        },[filteredProducts]);
        

        var getPageProducts = (pg) => {
                setpaginatedProducts([]);
                const pgProducts = productInit.slice(pg.range1, pg.range2 + 1);
                setpaginatedProducts(pgProducts);
                setCurrentPage(pg.id);
        }



        pages.push({
                "id": index,
                "range1": R1,
                "range2": R2
        });

        for (var i = 1; i < numberOfPages; i++) {
                R1 = R2 + 1
                R2 = R2 + pageSize;
                index = index + 1;
                pages.push({
                        "id": index,
                        "range1": R1,
                        "range2": R2
                });
        }

        return (
                <>
                <p className="headings-section">
               {selectedcatName}
                </p>
                        <div className="grid grid-col-3">
                        
                                {paginatedProducts.map((product) => (<ProductItem key={product.id} id={product.id} prodImage={product.productImageSmall} prodName={product.productName} bestSeller= {product.isBestSeller} rating= {product.rating} stock={product.stock} source ="productList"
                                        product={product}  >
                                </ProductItem>))}
                        </div>


                        <div style={{ display: numberOfPages > 0 ? "block" : "none" }}>
                                <center> <Link to onClick={() => {
                                        if (currentPage > 1) {
                                                getPageProducts(pages[(currentPage - 1) - 1]);
                                        } else {
                                                getPageProducts(pages[0]);
                                        }
                                }
                                }>Prev</Link>
                                &nbsp;{pages.map((pg) => (<Link to onClick={() => {
                                        getPageProducts(pg)
                                }}>{pg.id} &nbsp;</Link>))} &nbsp;

                <Link to onClick={() => {
                                                if (currentPage < numberOfPages) {
                                                        getPageProducts(pages[(currentPage + 1) - 1])
                                                } else {
                                                        getPageProducts(pages[numberOfPages - 1]);
                                                }
                                        }
                                        } >Next</Link></center>
                        </div>
                        <br /><br />
                        <div></div>

                </>
        )
}

export default ProductList
