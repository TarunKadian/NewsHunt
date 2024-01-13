// import React, { Component } from "react";
// import NewsItems from "./NewsItems";
// import Spinner from "./Spinner";
// import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {
//   static defaultProps = {
//     country: "in",
//     pageSize: 6,
//     category: "general",
//   };
//   static propsTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//   };
//   capitlize = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   };
//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [],
//       // loading: false,
//       loading: true,
//       page: 1,
//       totalResults: 0
//     };
//     document.title = `${this.capitlize(props.category)}-NewsHunt`;
//   }
//   async updatenews() {
//     props.setProgress(0);
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page}&pageSize=${props.pageSize}`;
//     this.setState({ loading: true });
//     let data = await fetch(url);
//     props.setProgress(30)
//     let parsedData = await data.json();
//     console.log(parsedData);
//     props.setProgress(70);
//     this.setState({
//       articles: parsedData.articles,
//       totalResults: parsedData.totalResults,
//       loading: false,
//     });
//     props.setProgress(100)
//   }
//   async componentDidMount() {
//     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=eb78517e12234231af851cd98162285e&page=1&pageSize=${props.pageSize}`;
//     // this.setState({loading:true})
//     // let data = await fetch(url);
//     // let parsedData=await data.json();
//     // console.log(parsedData);
//     // this.setState({articles: parsedData.articles,totalResults: parsedData.totalResults,loading:false});
//     this.updatenews();
//   }
//   handlePrevClick = async () => {
//     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=eb78517e12234231af851cd98162285e&page=${this.state.page-1}&pageSize=${props.pageSize}`;
//     // this.setState({loading:true})
//     // let data = await fetch(url);
//     // let parsedData=await data.json();
//     // console.log(parsedData);
//     // // this.setState({articles: parsedData.articles});
//     // this.setState({
//     //   page: this.state.page-1,
//     //   articles: parsedData.articles,
//     //   loading:false
//     // })
//     this.setState({ page: this.state.page - 1 });
//     this.updatenews();
//   };
//   handleNextClick = async () => {
//     // if(!(this.state.page+1>Math.ceil(this.state.totalResults/props.pageSize))){

//     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=eb78517e12234231af851cd98162285e&page=${this.state.page+1}&pageSize=${props.pageSize}`;
//     // this.setState({loading:true})
//     // let data = await fetch(url);
//     // let parsedData=await data.json();
//     // console.log(parsedData);
//     // // this.setState({articles: parsedData.articles});
//     // this.setState({
//     //   page: this.state.page+1,
//     //   articles: parsedData.articles,
//     //   loading:false
//     // })

//     // }
//     this.setState({ page: this.state.page + 1 });
//     this.updatenews();
//   };
//   fetchMoreData = async () => {
//     this.setState({page:this.state.page+1})
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page}&pageSize=${props.pageSize}`;
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     console.log(parsedData);
//     this.setState({
//       articles: this.state.articles.concat(parsedData.articles),
//       totalResults: parsedData.totalResults,
//     });
//   }
//   render() {
//     return (
      
//       // <div className="container my-3">
//       //   <h1 className="text-center my-2">NewsHunt - Top {this.capitlize(props.category)} Headlines</h1>
//       //   <div className="text-center">{this.state.loading && <Spinner/>}</div>
//       //   <div className="row">
//       //     {!this.state.loading && this.state.articles.map((element) => {
//       //       return (
//       //         <div className="col-md-4" key={element.url}>
//       //           <NewsItems
//       //             title={element.title}
//       //             description={element.description}
//       //             imageUrl={element.urlToImage}
//       //             newsUrl={element.url}
//       //             author={element.author}
//       //             date={element.publishedAt}
//       //             source={element.source.name}
//       //           />
//       //         </div>
//       //       )

//       //     })}
//       //   </div>
//       //   <div className="container d-flex justify-content-between">
//       //       <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Perivous</button>
//       //       <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/props.pageSize)}type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
//       //   </div>
//       // </div>
//       <>
//       <h1 className="text-center my-2">NewsHunt - Top {this.capitlize(props.category)} Headlines</h1>
//       <div className="text-center">{this.state.loading && <Spinner/>}</div>
//       <InfiniteScroll
//         className="text-center"
//         dataLength={this.state.articles.length}
//         next={this.fetchMoreData}
//         hasMore={this.state.articles.length!==this.state.totalResults}
//         loader={<Spinner/>}
//       >
//         <div className="container">
//         <div className="row">
//           {this.state.articles.map((element) => {
//             return (
//               <div className="col-md-4" key={element.url}>
//                 <NewsItems
//                   title={element.title}
//                   description={element.description}
//                   imageUrl={element.urlToImage}
//                   newsUrl={element.url}
//                   author={element.author}
//                   date={element.publishedAt}
//                   source={element.source.name}
//                 />
//               </div>
//             )

//           })}
//         </div>
//         </div>
//       </InfiniteScroll>
//       </>
//     );
//   }
// }

// export default News;


//function based
import React, {useEffect,useState} from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles,setArticles] = useState([])
  const [loading,setLoading] = useState(true)
  const [page,setPage] = useState(1)
  const [totalResults,setTotalResults] = useState(0)
  const capitlize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
   
  const updatenews = async () => {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30)
    let parsedData = await data.json();
    console.log(parsedData);
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100)
  }
  useEffect(() => {
    document.title = `${capitlize(props.category)}-NewsHunt`;
    updatenews();
    // eslint-disabled-next-line
  },[])
  // const handlePrevClick = async () => {
  //   setPage(page-1);
  //   updatenews();
  // };
  // const handleNextClick = async () => {
  //   setPage(page+1);
  //   updatenews();
  // };
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  }
    return (
      <>
      <h1 className="text-center" style={{margin: '35px 0px',marginTop:'90px'}}>NewsHunt - Top {capitlize(props.category)} Headlines</h1>
      <div className="text-center">{loading && <Spinner/>}</div>
      <InfiniteScroll
        className="text-center"
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length!==totalResults}
        loader={<Spinner/>}
      >
        <div className="container">
        <div className="row">
          {articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItems
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            )

          })}
        </div>
        </div>
      </InfiniteScroll>
      </>
    );
}
News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};
News.propsTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;