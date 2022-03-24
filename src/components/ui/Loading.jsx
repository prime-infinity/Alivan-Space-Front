function Loading() {
  return (
    <div className="col-lg-8 col-xl-9 mb-5 mb-lg-0 text-center mt-md-5 pt-md-5">
      <div
        className="spinner-border"
        style={{ width: "5rem", height: "5rem" }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
