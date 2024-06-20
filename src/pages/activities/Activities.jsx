import React,{useState,useEffect} from 'react'

import Navbar from '../../components/navbar/Navbar'
import FeedBody from '../../components/feed/FeedBody'
import Forcast from '../../components/feed/Forcast'


function Activities() {
  const [feedData, setFeedData] = useState([]);
  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem('feedData'))
    setFeedData(data)
  },[])
  const getAllPosts = () => {
    return feedData;
  };
  return (
    <>
    <Navbar/>
    <div style={{overflow:'hidden'}}>
    <div className="feed-container">
      <div id="activity">
        <FeedBody getAllPosts={getAllPosts} />
      </div>
      <div id="weather">
        <Forcast />
      </div>
    </div>
  </div>
  </>
  )
}

export default Activities
