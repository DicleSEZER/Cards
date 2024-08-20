import React from 'react'
// kısa yol ffc function açmak için kullanırız, rafc de kullanabilirz farkı import ederken ffc de süslü parantezsiz rafcde süslü parantezle import ediyoruz

function Course({image,title ,description})//props isimleri app.js de
 {
   
    return ( 

<div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img
        src={image}
        alt="Kurslarım"
      />
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
     
      <div className="media-content">
        <p className="title is-4">{title}</p>
      
      </div>
    </div>

    <div className="content">
      {description}
    </div>
  </div>
</div>

     );
}

export default Course;