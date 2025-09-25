function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1>
        Welcome to my recipe website. Here you can find all of the recipes that
        Alissa and I have tried and keep coming back to. I hope you enjoy them as much as we do!
      </h1>
      <a href="/recipes"><button className="bg-primary text-white px-4 py-2 rounded-md">View Recipes</button></a>
    </div>
  )
}

export default Home
