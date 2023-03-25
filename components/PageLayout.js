import { Container } from 'react-bootstrap'

import Footer from 'components/Footer'
import Navbar from 'components/Navbar'

const PageLayout = ({children, className}) => {
  return (
    <Container>
      <Navbar />
      <div className = {`page-wraper ${className}`}>{children}</div>
      <Footer />
    </Container>
  )
}

export default PageLayout
