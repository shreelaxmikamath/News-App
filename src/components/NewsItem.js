import React from "react";

const NewsItem=(props)=> {
    return (
      <div>
        <div className="card my-3 mx-auto" style={{width:"18rem"}}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left:"85%" }}>
  {props.source.slice(0,15)}
  </span>
          <img src={props.imgurl} className="card-img-top" alt="..." style={{ height: "180px", objectFit: "cover", width: "100%" }} />
          <div className="card-body">
            <h5 className="card-title">{props.title}...</h5>
            <p className="card-text">
              {props.description}...
            </p>
            <p className="card-text"><small className="text-muted">By{!props.author?"Unknown":props.author} on {new Date(props.publishedAt).toGMTString()}</small></p>
            <a href={props.newsurl} className="btn btn-sm btn-primary">Read More </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
