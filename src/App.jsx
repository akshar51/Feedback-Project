import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const App = () => {

  const [hover, setHover] = useState(0);
  const [star,setStar] = useState(0)
  const [showModal, setShowModal] = useState(false);
  const [feedback,setFeedback] = useState({});


  const handleHover = (idx)=>{
    setHover(idx)
    if(star !=0){
      setStar(0)
    }  
  }

  const handleLeave = (idx)=>{
    setHover(0)
    setStar(idx)
  }

  const handleDown = (idx)=>{
    setStar(idx)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowModal(true)
};  


  const handleChange =(e)=>{
      const {name,value} = e.target;
      let data = {...feedback,[name]:value,stars : star}
      setFeedback(data)   
  }
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto mt-3">
            <h1 className='text-center'>Student Feedback Form</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="s-name" className="form-label fw-bold">Student Name :</label>
                  <input type="text" 
                  className="form-control"
                  onChange={handleChange}
                  name='student'
                  value={feedback.student || ""}
                  id="s-name" required/>
                </div>
                <div className="mb-3">
                  <label htmlFor="behave" className="form-label fw-bold">Faculty Behaviour :</label>
                  <div className='d-flex justify-content-between fs-3'>
                    {
                    [...Array(5)].map((val,idx)=>(
                      <FaStar
                      key={idx}
                      color={hover > idx || star > idx ? "gold" : "gray"}
                      onMouseOver={()=>handleHover(idx + 1)}
                      onMouseLeave={()=>handleLeave(idx + 1)}
                      onMouseDown={()=>handleDown(idx + 1)}/>
                    ))
                  }
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="Id" className="form-label fw-bold">GR ID :</label>
                  <input type="number" 
                  className="form-control"
                  onChange={handleChange}
                  name='Id'
                  value={feedback.Id || ""} 
                  id="Id" />
                </div>
                <textarea
                style={{height : "90px"}} 
                name="feedback"
                value={feedback.feedback || ""}
                onChange={handleChange} 
                id="feedback"  
                className='w-100 rounded px-2 py-2' 
                placeholder='Enter your feedback'>
                </textarea><br />
                <button type="submit" className="btn btn-primary mt-2">Submit</button>
              </form>
          </div>
        </div>
      </div>
      {/* Modal */}
      <div className={`modal fade ${showModal ? "show d-block" : ""}`} tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Feedback Successfull !</h5>
              <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
            </div>
            <div className="modal-body ">
              <label htmlFor="studentName" className='fw-bold'>Student Name :</label>
              <div className='mb-2'>{feedback.student}</div>

              <label htmlFor="studentName" className='fw-bold'>Faculty Behaviour :</label>
              <div className='mb-2'>
                {[...Array(5)].map((_, idx) => (
                    <FaStar key={idx} color={star > idx  ? "gold" : "gray"} />
                ))}
              </div>

              <label htmlFor="studentName" className='fw-bold'>GR ID :</label>
              <div className='mb-2'>{feedback.Id}</div>

              <label htmlFor="studentName" className='fw-bold'>Feedback :</label>
              <div className='mb-2'>{feedback.feedback}</div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
