import React from "react";

const Search = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <input type="text" value={props.value} name={'search'} className={'form-control'} placeholder={'search'}/>
        </form>
    )
}

const CategorySelection = (props) => {
    // get all the categories of the products
    let getCategories = props.products.map((item)=> {
        return item.category
    });

    // remove all the duplicate category occurrences and return a unique array
    getCategories = Array.from(new Set(getCategories));


    return (
        <div className="form-group">
            <label htmlFor="exampleFormControlSelect1" className={'label-full-width'}>
                <select className="form-control" id="exampleFormControlSelect1" onChange={props.handleChange}>
                    {
                        getCategories.map((category, index)=> {
                            return <option key={index} value={category.toLowerCase()}>{category}</option>
                        })
                    }
                </select>
            </label>
        </div>
    )
}

const SortProducts = (props)=>{
    return(
        <div className="form-group">
            <label htmlFor="sorting" className={'label-full-width'}>
                <select className="form-control" id="sorting" onChange={props.handleSorting}>
                    <option value="">Select</option>
                    <option value="price_ascending">High-Low</option>
                    <option value="price_descending">Low-High</option>
                </select>
            </label>
        </div>
    )
}

class ProductsTopBar extends React.Component {
    render() {
        return (
            <div className={'col-md-12'}>
                <div className={'row product-bar'}>
                    <div className={'col-md-3'}>
                        <h3>Products</h3>
                    </div>
                    <div className={'col-md-3'}>
                        <Search handleSubmit={this.props.handleSearchSubmit}/>
                    </div>
                    <div className={'col-md-3'}>
                        <CategorySelection products={this.props.products} handleChange={this.props.handleCategoryFilter}/>
                    </div>
                    <div className="col-md-3">
                        <SortProducts handleSorting={this.props.handleSorting}/>
                    </div>
                </div>
            </div>
        )
    }
};

export default ProductsTopBar;