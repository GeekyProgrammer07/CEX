import { Fragment } from "react"
import OrderBookUI from "./layouts/Navbar"
import { CssBaseline } from "@mui/material"
function App() {

  return (
    <Fragment>
      <CssBaseline></CssBaseline>
      <OrderBookUI></OrderBookUI>
    </Fragment>
  )
}

export default App
