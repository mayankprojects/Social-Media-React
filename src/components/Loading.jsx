export default function Loading() {
  return (
    <>
      <div
        className="spinner-border mx-auto mt-5 p-4"
        style={{ width: "4rem", height: "4rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </>
  );
}
