const Home = () => {
  return (
    <>
    <div className="mt-4 p-5 bg-primary text-white rounded text-end w-75 mx-auto" style={{backgroundImage: "url('./public/books.jpg')", backgroundSize: "cover", backgroundColor: "#cccccc", backgroundPosition: "bottom"}}>
      <div className="my-5 mt-5 mb-1">
          <h1 className="text-white display-1 visually-hidden"></h1>
          <em className="display-1">Our blog. For You.</em>
          <br/>
          <a className="visually-hidden"></a>
      </div>
    </div>
    </>
  )
}

export default Home