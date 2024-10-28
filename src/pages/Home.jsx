import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Allstaffs from '../components/Allstaffs'
import Department from '../components/Department'

function Home() {

  const [profileStatus , setProfileStatus] = useState({})


  return (
    <>
      <div className='d-flex p-md-5 p-3' style={{ backgroundColor: '#EEEDEA' }} >
        <div className='container' >
          <div className='row'>
            <div className="col-md-12">
              <Allstaffs setProfileStatus={setProfileStatus} />
            </div>

            <div className="col-md-12">
              <Department profileStatus={profileStatus} />
            </div>


            <div className="col-md-12 text-center mt-5 pt-5">
             <Link to={'/Resigned'} style={{textDecoration:'none'}}> <button  style={{ backgroundColor: '#8b563d', borderColor: '#8b563d', color: 'white' }} className="m-3 px-5 py-2 rounded shadow">RESIGNED FACULTIES</button></Link>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default Home


