import { useEffect } from "react";

const PageWrapper = ({ state, children }) => {
  // const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    // dispatch(setAppState(state));
  }, []);

  return children;
};

export default PageWrapper;
