import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import AccountList from './AccountList';
import Footer from '../../component/Footer/Footer';
import Cart from '../../component/AddToCartPage/Cart';
import PlantImg from '../Assest/PlantImg.svg';
import Image1 from '../Assest/image1.svg';

const Home = () => {
  return (
    <>
      <h1 className='c-categories nav-width'>Home > Profile > Orders & Refund</h1>
      <div className="c-pName-pImg profile-width">
        <div className='c-profileImg'></div>
        <h2 className='c-profileName'>Hello Priyanka!</h2>
      </div>
      <div className="my-account account-width">
        <div className='account-fields'>
          <h3 className='c-myAccount-heading'>My Account</h3>
          <ul className='c-accountList'>
            {AccountList.map((item) => {
              return (
                <li key={item.id}>
                  <Link to={item.url} className={item.cName}>
                    {item.name}
                  </Link>
                </li>)
            })}
          </ul>
        </div>
        {/* <hr /> */}

        <div className='all-order-container'>
          <div className='order-heading'>
            <div className='all-order'>
              <h2>All Orders</h2>
            </div>

            <div className='search-order'>
              <div className='c-input'>
                <input type='search' placeholder='Search in Orders' />
              </div>

            </div>
            <div className='c-buttons'>
              <button> Previous</button>
              <button>Next</button>
            </div>
          </div>


          <div className='cart-components'>
            <Cart />
            <Cart />
            <Cart />
          </div>

        </div>

        <div className='view-product'>
          <div className='view-product-img'>
            <img src={PlantImg} alt='' />
            <button>View Product</button>
          </div>
          <div className='view-title-rate'>
            <h3>Lorem ipsum dolor sit </h3>
            <p>Indoor Plant, Low maintenance</p>
            <h2>₹ 299</h2>
          </div>
          <div className='viewProduct-buttons'>
            <button> - Add to cart +</button>
            <button>Buy on Rent</button>
          </div>
          <div className='plant-imgDes'>
            <img src={Image1} alt='' className='Image1' />
            <p>Lorem ipsum dolor sit amet. Ut
              incidunt odio aut quod sequi eos
              magni laborum quo iusto internos! Ut
              delectus dignissimos.<br /><br />


              Ut velit dolores aut molestias atque
              est earum dolor aut officia mollitia et
              adipisci harum eum voluptatem
              galisum est
            </p>
          </div>
          <div className='plant-imgDes'>
            <img src={Image1} alt='' className='Image1' />
            <p>Lorem ipsum dolor sit amet. Ut
              incidunt odio aut quod sequi eos
              magni laborum quo iusto internos! Ut
              delectus dignissimos.<br /><br />


              Ut velit dolores aut molestias atque
              est earum dolor aut officia mollitia et
              adipisci harum eum voluptatem
              galisum est
            </p>
          </div>
          <div className='view-product-img'>
            <img src={PlantImg} alt='' />
            <button>View Product</button>
          </div>
          <div className='view-title-rate'>
            <h3>Lorem ipsum dolor sit </h3>
            <p>Indoor Plant, Low maintenance</p>
            <h2>₹ 299</h2>
          </div>
          <div className='viewProduct-buttons'>
            <button> - Add to cart +</button>
            <button>Buy on Rent</button>
          </div>
          <div className='view-product-img'>
            <img src={PlantImg} alt='' />
            <button>View Product</button>
          </div>
          <div className='view-title-rate'>
            <h3>Lorem ipsum dolor sit </h3>
            <p>Indoor Plant, Low maintenance</p>
            <h2>₹ 299</h2>
          </div>
          <div className='viewProduct-buttons'>
            <button>- Add to cart +</button>
            <button>Buy on Rent</button>
          </div>

        </div>

      </div>




      <section className="footer-container">
        <div className="footer-page">
          <Footer />
        </div>
      </section>



    </>
  );
}

export default Home;
