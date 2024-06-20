import React,{useState} from 'react'
import './popup.css'

function UpdatePopup({setShowPopup,updatePost,post}) {
    const [postImage, setPostImage] = useState(null);
    const [questionBody, setQuestionBody] = useState('');
  
    const handleImageChange = (e) => {
      setPostImage(e.target.files[0]);
    };
  
    const handleBodyChange = (e) => {
      setQuestionBody(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('profile'))
        if (questionBody && user) {
          if (postImage) {
            const reader = new FileReader();
            reader.onloadend = () => {
              const img = reader.result;
              const updatedPostData = {
                body:questionBody,
                img:img,
                user:user,
              }
              updatePost( post.id, updatedPostData);
              setPostImage(null);
              setQuestionBody('');
              setShowPopup(false)
              alert('Updated successfully');
            };
            reader.readAsDataURL(postImage);
          } else {
            const updatedPostData = {
              body:questionBody,
              img:null,
              user:user,
            }
            updatePost(post.id, updatedPostData);
            setPostImage(null);
            setQuestionBody('');
            setShowPopup(false)
            alert('Uploaded successfully');
          }
        }
      };

  return (
    <div className='popup'>
        <button className='cancel-update' onClick={()=>setShowPopup(false)}>x</button>
        <form onSubmit={handleSubmit} className="question-send">
          <div className="question-send">
            <input 
              type="file" 
              onChange={handleImageChange} 
              placeholder="Upload the image" 
              className="input update" 
            />
            <textarea 
              value={questionBody}
              onChange={handleBodyChange} 
              placeholder="Question Body" 
              className="question-body input update" 
            />
          </div>
          <div>
            <button type="submit" className="edit-post">Update</button>
          </div>
        </form>
    </div>
  )
}

export default UpdatePopup
