import React, { useEffect,useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from 'react-infinite-scroll-component';
const News =(props)=> {
  const [article, setarticle] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
 
    document.title=`${props.category}-News App`;
  const  newsUpdate=async()=> {
    props.setprogress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
      props.category
    }&apiKey=${props.api}&page=${
      page
    }&pagesize=${props.pagesize}`;
    props.setprogress(30);
    setloading(true );
    let data = await fetch(url);
    let ParsedData = await data.json();
    props.setprogress(70);
    setarticle(ParsedData.articles)
    setloading(false );
    settotalResults(ParsedData.totalResults);
    props.setprogress(100);
  }
  useEffect(() => {
    newsUpdate();
  }, []);
  // handlePrevious = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.newsUpdate();
  // };
  // handleNext = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.newsUpdate();
  // };
  const fetchMoreData=async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
      props.category
    }&apiKey=${props.api}&page=${
      page+1
    }&pagesize=${props.pagesize}`;
    
    setpage(page + 1)
    let data = await fetch(url);
    let ParsedData = await data.json();
    setarticle(article.concat(ParsedData.articles))
    settotalResults(ParsedData.totalResults);

  }
    return (
      <div className="container">
        <h1 className="text-center">Top HeadLines</h1>
        {loading && <Spinner />}
        <InfiniteScroll
  dataLength={article.length}
  next={fetchMoreData}
  hasMore={article.length!==totalResults}
  loader={<Spinner/>}
>
 
        <div className="row" style={{"flexWrap": "wrap","margin": 0}}>
          {
            article.map((element) => {
              return (
                <div className="col-md-4 " key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0,40) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 80)
                        : ""
                    }
                    imgurl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://gizmodo.com/app/uploads/2025/02/Severance-MDR.jpg"
                    }
                    newsurl={element.url}
                    author={element.author}
                    publishedAt={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        </InfiniteScroll>
        <div className="container d-flex justify-content-between">
          {/* <button
            disabled={this.state.page <= 1}
            onClick={this.handlePrevious}
            type="button"
            className="btn btn-dark"
          >
            Previous
          </button>

          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / (props.pagesize + 1))
            }
            type="button"
            onClick={this.handleNext}
            className="btn btn-dark "
          >
            Next
          </button> */}
        </div>
      </div>
    );
}

export default News;
