import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';

const RequiresAuth = ({ element, ...rest }) => {
  const auth = useSelector((state) => state.auth);

  // const { loadUser, isAuthenticated } = authContext
  // useEffect(() => {
  //   loadUser()
  //   // eslint-disable-next-line
  // }, [])
  // if(isAuthenticated === null){
  //   return <></>
  // }
  return (
    <Route
      {...rest}
      render={(props) =>
        !auth ? <Navigate to='/login' /> : <element {...props} />
      }
    />
  );
};
export default RequiresAuth;
