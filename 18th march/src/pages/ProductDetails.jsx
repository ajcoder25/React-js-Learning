import { useParams } from 'react-router-dom';
import Header from '../component/Header';
import Footer from '../component/Footer'

const ProductDetails = () => {
  const { productid } = useParams();
  const data = [
    {
      id: '1',
      name: 'Product 1',
      description:
        'This is Description of Product 1. Lorem ipusm dolar sit amet',
      price: '$99.99',
      avilableColors: ['Red', 'Blue', 'Green'],
      isReturnAppicable: true,
      productImageUrl: 'https://placehold.co/600x400?text=Product+1',
    },
    {
      id: '2',
      name: 'Product 2',
      description:
        'This is Description of Product 1. Lorem ipusm dolar sit amet',
      price: '$99.99',
      avilableColors: ['Red', 'Blue', 'Green'],
      isReturnAppicable: false,
      productImageUrl: 'https://placehold.co/600x400?text=Product+2',
    },

    {
      id: '3',
      name: 'Product 3',
      description:
        'This is Description of Product 1. Lorem ipusm dolar sit amet',
      price: '$99.99',
      avilableColors: ['Red', 'Blue', 'Green'],
      isReturnAppicable: true,
      productImageUrl: 'https://placehold.co/600x400?text=Product+3',
    },

    {
      id: '4',
      name: 'Product 4',
      description:
        'This is Description of Product 1. Lorem ipusm dolar sit amet',
      price: '$99.99',
      avilableColors: ['Red', 'Blue', 'Green'],
      isReturnAppicable: false,
      productImageUrl: 'https://placehold.co/600x400?text=Product+3',
    },
  ];

  const findId = data.find((data) => data.id == productid);
  console.log(findId);
  return (
    <>
      <Header />
      <main className="container">
        <h2>{findId.name}</h2>
        <img src={findId.productImageUrl} alt="not working" />
        <p>Price: {findId.price}</p>
        <p>Description: {findId.description}</p>
        <p>Available Colors : {findId.avilableColors.join(', ')}</p>
        <p>
          Return Policy:{' '}
          {findId.isReturnAppicable
            ? 'Return Applicable within 7 days'
            : 'not avaiable'}
        </p>
      </main>
      <Footer/>
    </>
  );
};

export default ProductDetails;
