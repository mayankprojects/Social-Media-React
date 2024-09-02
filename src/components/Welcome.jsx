export default function Welcome({handleOnclick}) {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center h-25 mx-auto mt-5">
        <h2>Welcome to the Social Media Club</h2>
        <button type="button" className="btn btn-primary" onClick={handleOnclick}>
          Generate Posts
        </button>
      </div>
    </>
  );
}
