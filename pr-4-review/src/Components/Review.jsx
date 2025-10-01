import './Review.css'
import React, { useState } from 'react'

const Review = () => {
  const initial = {
    uname: "",
    email: "",
    review: "",
    rating: 0
  }

  const [inputForm, setInputForm] = useState(initial)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", inputForm)
   
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputForm({
      ...inputForm,
      [name]: value
    })
  }

  const handleRating = (num) => {
    setInputForm({
      ...inputForm,
      rating: num
    })
  }

  return (
    <div className="main-form">
      <div className='form-item'>
        <div className="from-hading">
          <h2>Rating and Review</h2>
        </div>

        <div className="form">
          <form onSubmit={handleSubmit}>
            
            <div className="form-input">
              <label>Username</label><br />
              <input
                type="text"
                name="uname"
                value={inputForm.uname}
                onChange={handleChange}
              />
            </div>

            <div className="form-input">
              <label>Email</label><br />
              <input
                type="text"
                name="email"
                value={inputForm.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-rating">
              <label>Rating</label><br />
              {[1, 2, 3, 4, 5].map((num) => (
                <span
                  key={num}
                  onClick={() => handleRating(num)}
                  style={{
                    cursor: "pointer",
                    fontSize: "30px",
                    color: num <= inputForm.rating ? "gold" : "gray"
                  }}
                >
                  &#9733;
                </span>
              ))}
            </div>

            <div className="form-input">
              <label>Write Review</label><br />
              <textarea
                name="review"
                value={inputForm.review}
                onChange={handleChange}
              />
            </div>

            <div>
              <button type='submit'>Submit</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Review
