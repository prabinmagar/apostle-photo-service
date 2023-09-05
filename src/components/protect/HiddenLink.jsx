// import { selectIsLoggedIn, selectUser } from "@/redux/slices/authSlice";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { selectIsLoggedIn, selectUser } from "../../redux/slices/authSlice";

export const ShowOnLogin = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <>{children}</>;
  }
  return null;
};

ShowOnLogin.propTypes = {
  children: PropTypes.any
}

export const ShowOnLogout = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
    return <>{children}</>;
  }
  return null;
};

ShowOnLogout.propTypes = {
  children: PropTypes.any
}

export const AuthorLink = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  if (isLoggedIn && user?.role === "author") {
    return <>{children}</>;
  }
  return null;
};

AuthorLink.propTypes = {
  children: PropTypes.any
}
