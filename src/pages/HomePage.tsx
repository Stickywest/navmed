import ProductsPage from './ProductsPage'

function HomePage() {
  return (
    <div>
      {/* Hello Section */}
      <div className="text-center mb-4">
        <h1 className="text-maroon">Hello, Welcome to NavMed!</h1>
        <p>Your trusted online store for medical equipment.</p>
      </div>

      {/* Product Cards Section */}
      <ProductsPage />
    </div>
  )
}

export default HomePage
