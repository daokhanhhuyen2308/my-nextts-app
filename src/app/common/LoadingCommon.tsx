import { ClipLoader } from "react-spinners";

const LoadingCommon = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}>
      <ClipLoader color="#fff" size={50} />
    </div>
  );
}

export default LoadingCommon;
