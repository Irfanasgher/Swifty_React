import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ProductFeatures from '../../components/ProductCard/ProductFeatures';
import Button from 'react-bootstrap/Button';
import { addToCart } from '../../store/actions';
import { currencyToUse, productPrice, productDiscountPrice } from '../../Utility/currency';
import './ProductCard.css';

class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			productDetails: {
				id: null,
				size: '',
				quantity: 1
			}
		};
		this.item = this.props.product;
	}

	product = this.props.productProp;
	currencyKeys = currencyToUse(this.props.currency);
	currencyValue = this.currencyKeys.value;
	currencyName = this.currencyKeys.name;

	handleAdditionSubtraction(action) {
		let stateData = this.state.productDetails;
		if (action === 'subtract' && stateData.quantity < 2) {
			return;
		}

		let quantity = parseInt(stateData.quantity);
		let newValue = action === 'subtract' ? quantity - 1 : quantity + 1;

		this.setState((prevState) => ({
			productDetails: {
				...prevState.productDetails,
				quantity: newValue
			}
		}));
	}

	componentDidMount() {
		let currentID = this.item.id;
		this.setState((prevState) => ({
			productDetails: {
				...prevState.productDetails,
				id: currentID
			}
		}));
	}

	incrementFunction() {
		this.setState((prevState) => ({
			productDetails: {
				...prevState.productDetails,
				quantity: ++prevState.productDetails.quantity + 1
			}
		}));
	}

	decrementFunction() {
		this.setState((prevState) => ({
			productDetails: {
				...prevState.productDetails,
				quantity: prevState.productDetails.quantity > 1 ? --prevState.productDetails.quantity : 1
			}
		}));
	}

	handleAddToCart = () => {
		this.props.addProductToCartProp(this.state.productDetails);
	};

	render() {
		return (
			<React.Fragment>
				<div className={'col-sm-6 col-md-6 col-lg-4 mb-4'}>
					<div className='shop-card text-center'>
						<div className='shop-card-image'>
							<NavLink to={`/product/${this.item.slug}`} exact>
								<img src={`${this.item.img}`} alt={this.item.img.split('.')[0]} />
							</NavLink>
							{this.item.sale ? <span className='shop-card-sale'>Sale</span> : null}
							{this.item.discount_price ? (
								<span className='shop-card-discount'>
									{productDiscountPrice(this.item.price, this.item.discount_price)}
								</span>
							) : null}
						</div>

						<div className='shop-card-content'>
							<h2 className='shop-card-vendor'>{this.item.vendor ? this.item.vendor.name : null}</h2>
							<h3 className='shop-card-title'>{this.item.name}</h3>
							<div className='shop-card-price-container'>
								<span className='shop-card-price'>
									{this.currencyName}
									{` ${productPrice(this.item.price, this.currencyValue)}`}
								</span>
								{this.item.discount_price ? (
									<span className={'shop-card-discount-price'}>
										<span style={{ textTransform: 'lowercase' }}>{this.currencyName}</span>
										{productPrice(this.item.discount_price, this.currencyValue)}
									</span>
								) : null}
							</div>
							<div className='shop-card-features-container'>
								<ProductFeatures product={this.item} />
							</div>
						</div>
						<div className='quantity-input'>
							{/* <Button size='sm' onClick={this.handleAddToCart} className='d-md-block d-none mr-3'>
								Add to Cart
							</Button> */}
							{/* <button
								className='quantity-input__modifier quantity-input__modifier--left'
								onClick={() => this.handleAdditionSubtraction('subtract')}>
								&mdash;
							</button>
							<input
								className='quantity-input__screen'
								type='text'
								value={this.state.productDetails.quantity}
								readOnly={this.state.productDetails.quantity}
							/>
							<button
								className='quantity-input__modifier quantity-input__modifier--right'
								onClick={() => this.handleAdditionSubtraction('add')}>
								&#xff0b;
							</button> */}
						</div>
						<Button
							size='sm'
							onClick={this.handleAddToCart}
							style={{ width: '100%' }}
							// className='mt-3'
							// className='d-block d-md-none mt-3'
						>
							Add to Cart
						</Button>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addProductToCartProp: (productDetails) => dispatch(addToCart(productDetails))
	};
};

// export default Index;
export default connect(mapStateToProps, mapDispatchToProps)(Index);
