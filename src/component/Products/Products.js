import React from 'react';


const ProductCard = (props) => {
    return (
        <div className="card cardProduct">
            <img className="card-img-top" src={props.image} alt={'image'}/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text"><span>Price:</span>{props.price}</p>
                <p className={'card-text'}><span>Category:</span>{props.category}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
};

class Products extends React.Component {
    /*
    * loadProductsBasedOnQuery used to load products from store based on
    * search query and category selection
    * */
    loadProductsBasedOnQuery() {
        let productsToShow;

        // load products default
        if (this.props.search === '' || this.props.search == undefined) {
            productsToShow = this.props.products.slice(0, this.props.perPage);
        } else {
            // check and return the product that's name or category contains the search query
            productsToShow = this.props.products.filter((element) => {
                let elementName = element.name.toLowerCase();
                let elementCategory = element.category.toLowerCase();
                return `${elementName}${elementCategory}`.includes(this.props.search)
            });

            if (productsToShow.length > (this.props.perPage)) {
                productsToShow = productsToShow.slice(0, this.props.perPage)
            }
        }

        return productsToShow;
    }

    // sortProducts based on sorting type
    sortProducts(sortingType = this.props.sorting) {
        if (sortingType === 'price_ascending') {
            return this.loadProductsBasedOnQuery().sort((a, b) => {
                return b.price - a.price;
            });
        } else {
            return this.loadProductsBasedOnQuery().sort((a, b) => {
                return a.price - b.price;
            });
        }
    }

    render() {
        let products;


        if (this.props.sorting === '' || this.props.sorting === undefined) {
            products = this.loadProductsBasedOnQuery();
        } else {
            products = this.sortProducts();
            console.log(products);
        }


        return (
            <div className={'col-md-12 product_area'}>
                <div className={'row'}>
                    {
                        products.map((product, index) => {
                            return (
                                <div className={'col-md-4 '}>
                                    <ProductCard
                                        key={index}
                                        name={product.name}
                                        price={product.price}
                                        category={product.category}
                                        image={product.image}
                                    />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
};

export default Products;

