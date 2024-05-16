import Swiper from "@/components/swiper/SwiperCom";
import "./home.scss"
import ProductCard from "@/components/product-card/ProductCard";

async function getData() {
  const res = await fetch('https://dummyjson.com/products', { cache: 'force-cache' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  let data = await getData()
  return (
    <main>
      <section id="hero">
        <div className="container hero">
          <Swiper />
        </div>
      </section>
      <section id="products">
        <div className="container products">
          <h1 className="products__title">All Products</h1>
          <div className="products__wrapper">
            <ProductCard data={data?.products} />
          </div>
        </div>
      </section>
    </main>
  );
}
