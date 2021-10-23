import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useSelector, useDispatch } from "react-redux"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  const dispatch = useDispatch()
  const { productReducer, countReducer } = useSelector(state => state)
  console.log("Count Reducer State is ", countReducer)
  console.log("Product Reducer State is ", productReducer)

  function incrementHandler() {
    dispatch({ type: "INCREMENT" })
  }

  function decrementHandler() {
    dispatch({ type: "DECREMENT" })
  }

  function incByPayloadHandler() {
    dispatch({ type: "INC_PAYLOAD", payload: 5 })
  }

  function addToCart() {
    dispatch({ type: "ADD_TO_CART", payload: "Omar Farooq" })
  }

  return (
    <Layout>
      <Seo title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>Count is : {countReducer.count}</p>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={incByPayloadHandler}>INCREMENT BY 5</button>
      <button onClick={addToCart}>Add to Cart</button>
      <div>
        <h1>Cart</h1>
        <div>
          {React.Children.toArray(
            productReducer.products.map(name => <p>{name}</p>)
          )}
        </div>
      </div>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
        <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
        <Link to="/using-dsg">Go to "Using DSG"</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
