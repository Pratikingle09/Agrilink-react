import React,{useState} from 'react'

function AskQuestion({createPost}) {
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
            createPost(user, questionBody, img);
            setPostImage(null);
            setQuestionBody('');
            alert('Uploaded successfully');
          };
          reader.readAsDataURL(postImage);
        } else {
          createPost(user, questionBody, null);
          setPostImage(null);
          setQuestionBody('');
          alert('Uploaded successfully');
        }
      }
    };
  
    return (
      <div className="form-cont">
        <form onSubmit={handleSubmit} className="question-send">
          <div className="question-send">
            <input 
              type="file" 
              onChange={handleImageChange} 
              placeholder="Upload the image" 
              className="question-title input" 
            />
            <textarea 
              value={questionBody}
              onChange={handleBodyChange} 
              placeholder="Question Body" 
              className="question-body input" 
            />
          </div>
          <div>
            <button type="submit" className="send">Ask</button>
          </div>
        </form>
      </div>
    );
  };

export default AskQuestion
