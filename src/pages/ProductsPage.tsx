import { useState } from 'react'
import BloodPressureMonitor from '../assets/bloodpressure.jpg'
import Stethoscope from '../assets/stethoscope.jpg';
import Thermometer from '../assets/Thermometer.jpg';
import NurseWatch from '../assets/NurseWatch.jpg';
import NurseUniform from '../assets/NurseUniform.webp';
function ProductsPage() {
  const products = [
    {
      id: 1,
      name: 'Blood Pressure Monitor',
      oldPrice: 15000,
      newPrice: 12000,
      image: BloodPressureMonitor, // Replace with actual image URL
      description: 'Accurate blood pressure monitoring device for home and professional use.',
    },
    {
      id: 2,
      name: 'Stethoscope',
      oldPrice: 5000,
      newPrice: 3500,
      image: Stethoscope, // Replace with actual image URL
      description: 'High-quality stethoscope with clear sound for medical professionals.',
    },
    {
      id: 3,
      name: 'Thermometer',
      oldPrice: 2000,
      newPrice: 1500,
      image: Thermometer, // Replace with actual image URL
      description: 'Digital thermometer with fast readings and accurate temperature results.',
    },
    {
        id: 3,
        name: 'Nurse Watch',
        oldPrice: 2000,
        newPrice: 1500,
        image: NurseWatch, // Replace with actual image URL
        description: 'Digital thermometer with fast readings and accurate temperature results.',
      },
      {
        id: 3,
        name: 'Nurse Uniform',
        oldPrice: 2000,
        newPrice: 1500,
        image: NurseUniform, // Replace with actual image URL
        description: 'Digital thermometer with fast readings and accurate temperature results.',
      },
  ]

  const [selectedProduct, setSelectedProduct] = useState<{
    id: number
    name: string
    oldPrice: number
    newPrice: number
    image: string
    description: string
  } | null>(null)

  const handleProductClick = (product: any) => {
    setSelectedProduct(product)
  }

  return (
    <div className="container my-4">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-3">
            <div
              className="card h-100 shadow-sm"
              onClick={() => handleProductClick(product)}
              style={{ cursor: 'pointer' }}
            >
              <img src={product.image} alt={product.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="text-danger">
                  <s>Ksh {product.oldPrice}</s>
                </p>
                <p className="text-success fw-bold">Ksh {product.newPrice}</p>
                <button className="btn btn-sm btn-outline-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Product Details Section */}
      {selectedProduct && (
        <div className="row mt-4 p-3 border rounded bg-light">
          <div className="col-md-4">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-8">
            <h3>{selectedProduct.name}</h3>
            <p className="text-muted">{selectedProduct.description}</p>
            <p className="text-danger">
              <s>Ksh {selectedProduct.oldPrice}</s>
            </p>
            <p className="text-success fw-bold">Ksh {selectedProduct.newPrice}</p>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductsPage
