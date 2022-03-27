
import 'regenerator-runtime/runtime'
import { useEffect, useState } from 'react'
import Listing from './components/Listing'
import Create from './components/Create'
import React from 'react'
import { login, logout } from './utils'
import './global.css'
import getConfig from './config'
const { networkId } = getConfig(process.env.NODE_ENV || 'development')

export default function App() {
  const [crowdfunds, setCrowdfunds] = useState([])
  const [toggleModal, setToggleModal] = useState(false)
  function addProject() {
    setToggleModal(!toggleModal)
  }

  useEffect(
    () => {

      // in this case, we only care to query the contract when signed in
      if (window.walletConnection.isSignedIn()) {

        // window.contract is set by initContract in index.js
        window.contract.list_crowdfunds().then((crowdfundprojects) => {
          const crowdfundList = [...crowdfundprojects]
          setCrowdfunds(crowdfundList)
        })

      }

    },
    [],
  )

  // if not signed in, return early with sign-in prompt
  if (!window.walletConnection.isSignedIn()) {
    return (

      <main>
        <h1>Welcome to OpenFund</h1>
        <p style={{ textAlign: 'center' }}>
          Click the button below to sign in:
        </p>
        <p style={{ textAlign: 'center', marginTop: '2.5em' }}>
          <button onClick={login}>Sign In</button>
        </p>
      </main>

    )
  }
  return (
    // use React Fragment, <>, to avoid wrapping elements in unnecessary divs
    <>

      <header>
        <div className="logo"></div>
        <button className="link" style={{ float: 'right' }} onClick={logout}>
          Sign Out <span className="id">{window.accountId}</span>
        </button>
      </header>
      <button onClick={addProject}>Add a Project</button>
      <main>
        <Create toggleModal={toggleModal} />
        <section>
          {crowdfunds.map((project, id) => {
            return (
              <div key={id}>
                <Listing project={project} />
              </div>
            )
          })}
        </section>
      </main>

    </>
  )
}