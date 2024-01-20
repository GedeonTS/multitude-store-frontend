import "./Description.scss";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import Products from "../../components/Products/Products";

const Description = () => {
  let { itemId } = useParams();
  const [activeImage, setActiveImage] = useState<number>(0);
  const [activeColor, setActiveColor] = useState<number>(0);
  const [cart, setCart] = useState<boolean>(false);

  const product = {
    id: 1,
    name: "OLED C1 Series 55” 4k Smart TV (3840 x 2160), 120Hz Refresh Rate, AI-Powered 4K, Dolby Cinema, WiSA Ready, Gaming Mode",
    description: {
      "Nom du produit": "Pochette en silicone pour iphone 13 Pro MAX",
      Marque: "Apple",
      "Modèles de téléphones compatibles": "iPhone 13 Pro MAX",
      Matériau: "Silicone",
      Embellissement: "Logo Apple à l'arrière",
      "Caractéristique spéciale": "Anti dérapant",
    },
    price: 100,
    category: "audio&video",
    color: ["black", "white", "red", "blue"],
    images: [
      "https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-product-image-39.jpg",
      "https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-product-gallery-image-20.jpg",
      "https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-product-gallery-image-27.jpg",
      "https://websitedemos.net/electronic-store-04/wp-content/uploads/sites/1055/2022/03/electronic-store-product-gallery-image-33.jpg",
    ],
  };


  return (
    <section className="description">
      <div className="descripion-headline">
        <div className="product-image">
          <img className="active-image" src={product.images[activeImage]} />
          <ul className="images-list">
            {product.images.map((image, index) => (
              <li key={index}>
                <img
                  src={image}
                  className={index == activeImage ? "image border" : "image"}
                  onClick={() => setActiveImage(index)}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="description-text">
          <h1>{product.name}</h1>
          <h2>{product.price}€</h2>
          <h3>Couleur: {product.color[activeColor]}</h3>
          <ul className="color-list">
            {product.color.map((color, index) => (
              <li
                key={index}
                className={index == activeColor ? "color active" : "color"}
                style={{ backgroundColor: color }}
                onClick={() => setActiveColor(index)}
              >
                {" "}
              </li>
            ))}
          </ul>
          {!cart ? (<button
            onClick={() => {
                setCart(true);
                alert("Ajouté au panier");
            }}
            className="btn"
          >
            Ajouter au panier
          </button>)
            : (<button 
            
            className="btn panier"
            ><Link
            to="/cart"
            >
                voir le panier
            </Link>
            </button>)

            
        }

          
        </div>
      </div>
      <div className="description-body">
        <h2>Description</h2>
        <p>
        {product.name}
        </p>
        <ul>
          {Object.keys(product.description).map((key, index) => (
            <li key={index}>
              <span className="key">{key}:</span> {product.description[key]}
            </li>
          ))}
        </ul>
      </div>
      <div className="related-products">
     <Products category={"Produits similaires"} />
    </div>
    </section>
  );
};

export default Description;
