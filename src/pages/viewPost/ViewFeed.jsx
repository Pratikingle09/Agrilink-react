import React,{useState} from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../../components/navbar/Navbar";
import AnsQuestion from "../../components/feed/answer/AnsQuestion";
import AnsBody from "../../components/feed/answer/AnsBody";
import PostDetails from "../../components/postDetails/PostDetails";

function ViewFeed() {
  const [render, setRender] = useState(false)
  const location = useLocation();
  const { data } = location.state || {};

  return (
    <div className="body" style={{top:'0',position:'absolute'}}>
      <Navbar/>
      <div className="q-a" style={{marginTop:'8rem',marginLeft:'2rem'}}>
      <PostDetails post={data} />
      </div>
      <div style={{marginLeft:'26rem',marginTop:'30px'}}>
       <AnsBody post={data} render={render} setRender={setRender} />
      </div>
      <AnsQuestion post={data} setRender={setRender} />
    </div>
  );
}

export default ViewFeed;
