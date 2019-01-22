import React from "react";
import ProductsTopBar from '../component/Products/Product-top-bar';
import Products from '../component/Products/Products'
import connect from "react-redux/es/connect/connect";
import {setSearchTern, setSortingType} from "../redux/actionCreators";

const Home = (props) => {
    return (
        <div className={'container'}>
            <div className={'row'}>
                <ProductsTopBar
                    handleSearchSubmit={props.handleSearchSubmit}
                    handleCategoryFilter={props.handleCategoryFilter}
                    handleSorting={props.handleSorting}
                    products={props.products}
                />
                <Products
                    products={props.products}
                    perPage={6}
                    search={props.search}
                    sorting={props.sorting}
                />
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
        products: state.products,
        search: state.searchTerm,
        sorting: state.sortingType
    });

const mapDispatchToProps = (dispatch) => {
    return {
        handleSearchSubmit(e) {
            e.preventDefault();
            let searchQuery= e.target.search.value.toLowerCase();
            dispatch(setSearchTern(searchQuery))
        },

        handleCategoryFilter(e) {
            let filterCategory = e.target.value;
            dispatch(setSearchTern(filterCategory))
        },

        handleSorting(e){
            let sortingType= e.target.value;
            dispatch(setSortingType(sortingType));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);