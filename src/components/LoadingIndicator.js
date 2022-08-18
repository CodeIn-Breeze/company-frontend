import Loader from 'react-loader-spinner';
import { usePromiseTracker } from "react-promise-tracker";

export const LoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker();

  return promiseInProgress && 
    <div
      style={{
        width: "100%",
        height: "100",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Loader type="ThreeDots" color="#8A2BE2" height="100" width="100" />
   </div>
};