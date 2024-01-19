import './TopBrands.scss'
function TopBrands() {
    const brands = [
        {
            id: 1,
            name: 'Apple',
            image: 'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202106030101'
        },
        {
            id: 2,
            name: 'Samsung',
            image: 'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202106030101'
        },
        {
            id: 3,
            name: 'Xiaomi',
            image: 'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202106030101'
        },
        {
            id: 4,
            name: 'Huawei',
            image: 'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202106030101'
        },
        {
            id: 5,
            name: 'Oppo',
            image: 'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202106030101'
        },
        {
            id: 6,
            name: 'Vivo',
            image: 'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202106030101'
        }]
        
  return (
    <section className='top-brand-section'>
      <div className='container'>
      <h2 className='top-brand-title'>Top Brands</h2>
        <div className='top-brand-wrapper'>
            {brands.map((brand) => (
                <div className='top-brand-item' key={brand.id}>
                    <img src={brand.image} alt={brand.name} />
                </div>
            ))}
        </div>
        </div>
    </section>
  )
}

export default TopBrands
