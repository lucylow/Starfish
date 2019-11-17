import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Ocean } from '@oceanprotocol/squid'
import Web3 from 'web3'

let web3

if (window.web3) {
  web3 = new Web3(window.web3.currentProvider)
  window.ethereum.enable()
}

class App extends Component {
  state = {
    ocean: undefined,
  }

  async componentDidMount() {
    const ocean = await new Ocean.getInstance({
      web3Provider: web3,
      nodeUri: 'https://nile.dev-ocean.com',
      aquariusUri: 'https://aquarius.marketplace.dev-ocean.com',
      brizoUri: 'https://brizo.marketplace.dev-ocean.com',
      brizoAddress: '0x4aaab179035dc57b35e2ce066919048686f82972',
      secretStoreUri: 'https://secret-store.nile.dev-ocean.com',
      verbose: true
    })
    this.setState({ ocean })
    console.log('Finished loading contracts.')
  }

  render() {
    return (
      <div
        style={{ fontFamily: '"Fira Code", monospace', textAlign: 'center' }}
      >
        <h1>
          <span role="img" aria-label="squid">
            🦑
          </span>
          <br /> Lucys Data Marketplace
        </h1>

        {!web3 && <p>No Web3 Browser!</p>}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
