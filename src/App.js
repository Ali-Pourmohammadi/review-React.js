import { useState } from 'react';
import './App.css';
import reviews from './data';
function App(){
  return(<div><ReviewContainer/></div>)
}


function ReviewContainer(){
  const [person , setPerson] = useState(0)
  function handleNext(){
if(person < reviews.length - 1) setPerson( person + 1);
  }
  function handlePrev(){
    if(person> 0) setPerson(person - 1);
  }
  function random(){
    const random = Math.floor(Math.random()*reviews.length)
    setPerson(random);
  }
  return (<div className='review-container'>
     <section className="container">
 <div className="title">
   <h2>our reviews</h2>
   <div className="underline"></div>
 </div>
 <article className="review">
   <div className="img-container">
<img src={reviews[person].img} id="person-img" alt="" />
</div>
   <h4 id="author">{reviews[person].name}</h4>
   <p id="job">{reviews[person].job}</p>
   <p id="info">
    {reviews[person].text}
   </p>
   <div className="button-container">
     <button className="prev-btn" onClick={handlePrev}>
       <i className="fas fa-chevron-left"></i>
     </button>
<button className="next-btn" onClick={handleNext}>
       <i className="fas fa-chevron-right"></i>
     </button>
   </div>
   <button className="random-btn" onClick={random}>surprise me</button>
   <section className='steps'>
    <div className={`${person===0 ? "active":""}`}>1</div>
    <div className= {`${person===1 ? "active":""}`}>2</div>
    <div className={`${person===2 ? "active":""}`} >3</div>
    <div className={`${person===3 ? "active":""}`}>4</div>
   </section>

 </article>
 </section>
  </div>)
}
export default App;
