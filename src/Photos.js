import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
  return (
    <section className="photos">
        <div className="row">
          {props.photos.map(function(photo, index) {
            return (
              <div className="col-4" key={index}>
                <img 
                  src={photo.src.tiny} 
                  alt="photos" 
                  className="img-fluid" />
              </div>
        );
       })}
      </div>
    </section>
  );
  } else {
    return null;
  }
}

