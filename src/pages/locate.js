import React from "react"
import { Row, Col, Card } from "react-materialize"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps"
import { BrowserView, MobileView } from "react-device-detect"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 39.1222947, lng: -77.234276 }}
    >
      <Marker position={{ lat: 39.1223598, lng: -77.2344795 }} />
    </GoogleMap>
  ))
)

const LocatePage = () => {
  return (
    <Layout>
      <SEO title="Store Locator" />
      <BrowserView>
        <Row style={{ width: "80%", marginTop: "5%" }}>
          <Col s={4}>
            <Card
              header={<></>}
              actions={[
                <a href="https://goo.gl/maps/rjTTEGLesy8dazo87">Google Maps</a>,
                // <a href="https://goo.gl/maps/rjTTEGLesy8dazo87">Apple Maps</a>,
              ]}
            >
              <h5>Kentlands</h5>
              <p>
                133 Commerce Square Pl <br />
                Gaithersburg, MD 20878 <br />
                (240) 543-5028
              </p>
            </Card>
          </Col>
          <Col s={8}>
            <Card>
              <MapComponent
                isMarkerShown={true}
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD7CAuPt-s6HiZoiu4QoMg2fCLlRpbUTqw&callback=initMap"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `500px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </Card>
          </Col>
        </Row>
      </BrowserView>
    </Layout>
  )
}

export default LocatePage
