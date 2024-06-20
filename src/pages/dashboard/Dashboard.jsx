import React,{useState} from 'react'

import Navbar from '../../components/navbar/Navbar'
import DashboardIndex from '../../components/dashboard/DashboardIndex'

import './dashboard.css'
import Orders from '../../components/dashboard/Orders'

function Dashboard() {
  const [showOrders, setShowOrders] = useState(true)

  return (
    <div className="body" style={{ top: '0', position: 'absolute',marginTop:'5rem' }}>
      <Navbar/>
      <h1 className="dashboard" style={{marginTop:'50px'}}>Welcome to Your Seller Dashboard</h1>
        <p onClick={()=>setShowOrders(!showOrders)} className="link seller-prod" style={{cursor:'pointer'}}>{showOrders?<>Orders</>:<>Product's</>}</p>
      <div>
      { showOrders?<DashboardIndex/>:<Orders/>}
      </div>
    </div>
  )
}

export default Dashboard
