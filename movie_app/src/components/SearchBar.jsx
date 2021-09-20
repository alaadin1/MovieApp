import React from 'react'

export class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state={
      search:"",
      page:1
    }
    this.searchMovie = this.searchMovie.bind(this)
    this.performSearch = this.performSearch.bind(this)
    this.nextpage=this.nextpage.bind(this)
    this.prevpage = this.prevpage.bind(this)
  }
  timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async searchMovie(e){
    this.setState({
      search:e.target.value
    })
    var prev = e.target.value
    await this.timeout(1500)
    if (prev === this.state.search){
      this.performSearch()
    }
  }
  performSearch(){
    console.log("3"+this.state.search)
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.props.API_KEY}&query=${this.state.search}&language=en-US&page=1&include_adult=true&region=US&page=${this.state.page}`) //,{signal}
    .then(response=>response.json())
    .then(results=>console.log(results))
    .catch(error =>console.log(error))
  }

  async nextpage(){
    await this.setPageState(this.state.page+1)
    this.performSearch()
  }
  async prevpage(){
    await this.setPageState(this.state.page-1)
    this.performSearch()
  }
  setPageState(page){
    return new Promise( ()=>{
        this.setState({page})
    })
  }

  render(){
    return (
    <div>
      <form onSubmit={this.searchMovie}>
        <input type="text" placeholder="Search for a Movie!" onChange={this.searchMovie}></input>
      </form>

    </div>  
    );
  }
}
/*<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>*/