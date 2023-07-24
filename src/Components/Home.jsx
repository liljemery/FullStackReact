const Home = () => {
  return (
    <>
      <div className="container text-center mb-2">
        <div className="mt-4 p-5 bg-primary text-white rounded text-end w-100 mx-auto mb-4" style={{backgroundImage: "url('/books.jpg')", backgroundSize: "cover", backgroundColor: "#cccccc", backgroundPosition: "bottom"}}>
          <div className="my-5 mt-5 mb-1">
              <h1 className="text-white display-1 visually-hidden"></h1>
              <br/>
              <a className="visually-hidden"></a>
          </div>
        </div>
        <em className="display-4">If you can imagine it, you can code it.</em>
      </div>
      <div className="container">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ducimus possimus in vel animi! Sunt incidunt in pariatur accusamus tenetur, dolore nostrum quasi? Dicta laboriosam, voluptates natus accusantium odio incidunt.
        </p>
      </div>
    </>
  )
}

export default Home