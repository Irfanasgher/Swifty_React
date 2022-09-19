import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { connect } from 'react-redux';
import ProductCard from '../ProductCard/Index';
import SecondaryLayout from '../../Layouts/SecondaryLayout';
import EmptyCategoryPageContent from '../EmptyCategoryPageContent';
import Fab from '@material-ui/core/Fab';
import { FiShoppingCart } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import Pagination from './Pagination';
import { setCategoriesChangedValue, refreshPageNumber } from '../../store/actions';

import './style.css';

const PAGE_LIMIT = 5;

const Index = (props) => {
	function getWindowDimensions() {
		const { innerWidth: width, innerHeight: height } = window;
		return [width, height];
	}

	/*const tempstate = {allProducts:[], currentProducts:[], currentPage:null, totalPages:null} */
	const [allProducts, setAllProducts] = useState([]);
	const [currentProducts, setCurrentProducts] = useState([]);
	const [currentPage, setCurrentPage] = useState(null);
	const [totalPages, setTotalPages] = useState(null);

	//const childref = useRef(null);

	useEffect(() => {
		setAllProducts(props.products);

		if (props.categoriesChanged == true) {
			//childref.current.categorieschangedcallback()
			const currentProducts = props.products.slice(0, PAGE_LIMIT);
			setCurrentProducts(currentProducts);
			setCurrentPage(1);
			props.setCategoriesChangedValue(false);
			props.refreshPageNumber(true);
		}
	});

	const onPageChanged = (data) => {
		const { currentPage, totalPages, pageLimit } = data;
		const offset = (currentPage - 1) * pageLimit;
		const currentProducts = allProducts.slice(offset, offset + pageLimit);

		setCurrentPage(currentPage);
		setCurrentProducts(currentProducts);
		setTotalPages(totalPages);
	};

	let products = <EmptyCategoryPageContent />;
	let productsCount = props.products.length;
	if (productsCount > 0) {
		products = currentProducts.map((product) => {
			return <ProductCard key={product.id} product={product} currency={props.usedCurrency} />;
		});

		var products_array = [];
		var index = 0;
		for (var i = 0; i < Math.ceil(currentProducts.length / 2); i++) {
			const first_product = currentProducts[index];
			const second_product = currentProducts[index + 1];
			index += 2;

			if (second_product != null) {
				products_array.push(
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						<ProductCard key={first_product.id} product={first_product} currency={props.usedCurrency} />
						<ProductCard key={second_product.id} product={second_product} currency={props.usedCurrency} />
					</div>
				);
			} else {
				const win = getWindowDimensions();
				products_array.push(
					<div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
						<ProductCard
							style={{ height: win[1] / 100, width: win[0] / 2 }}
							key={first_product.id}
							product={first_product}
							currency={props.usedCurrency}
						/>
					</div>
				);
			}
		}
		products = products_array;
	}

	if (allProducts.length == 0) {
		return <EmptyCategoryPageContent />;
	} else {
		return (
			<SecondaryLayout
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					borderWidth: 1,
					borderColor: 'black'
				}}
				results={`(${productsCount} products found)`}
				breadCrumbs={props.breadCrumbs}>
				<Tabs defaultActiveKey='chips' id='uncontrolled-tab-example' className='pl-3'>
					<Tab eventKey='chips' title='Chips' className='pt-2'>
						{products}
					</Tab>
					<Tab eventKey='candy' title='Candy' className='pt-2'>
						{products}
					</Tab>
					<Tab eventKey='baked' title='Baked' className='pt-2'>
						{products}
					</Tab>
				</Tabs>
				<Pagination
					style={{ borderWidth: 1, borderColor: 'black' }}
					totalRecords={allProducts.length}
					pageLimit={PAGE_LIMIT}
					pageNeighbours={1}
					onPageChanged={onPageChanged}
				/>
				<Fab color='primary' style={{ position: 'fixed', bottom: 20, right: 20 }}>
					<NavLink to='/cart'>
						<FiShoppingCart style={{ color: '#fff' }} />
					</NavLink>
				</Fab>
				<input
					readOnly
					type='text'
					value={props.cartTotal}
					style={{
						position: 'fixed',
						bottom: 60,
						right: 18,
						width: 20,
						backgroundColor: 'red',
						color: 'white',
						border: '0'
					}}
				/>
			</SecondaryLayout>
		);
	}
};

Index.propTypes = {
	products: PropTypes.array.isRequired,
	usedCurrency: PropTypes.object.isRequired,
	breadCrumbs: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownprops) => {
	return {
		props: ownprops,
		cartTotal: state.cartTotal,
		categoriesChanged: state.categoriesChanged,
		products: ownprops.products
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setCategoriesChangedValue: (value) => dispatch(setCategoriesChangedValue(value)),
		refreshPageNumber: (value) => dispatch(refreshPageNumber(value))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
