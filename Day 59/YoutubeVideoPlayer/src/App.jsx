import VideoPlayer from "./components/VideoPlayer"
function App() {
  const videoId="-LSZtE4zsp8";

  return (
    <>
      <h1>Youtube Video Player</h1>
      <VideoPlayer videoId={videoId} />
    </>
  )
}

export default App
