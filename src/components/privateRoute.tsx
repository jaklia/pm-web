import { useEffect, FC } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, RouteProps, useLocation } from "react-router-dom";
import { IApplicationState } from "../state/store";


const PrivateRoute: FC<RouteProps> = (/*component: FC, exact: boolean,*/ { ...props }: RouteProps) => {
  const location = useLocation();
  const authenticated = useSelector<IApplicationState, boolean>(
    state => state.app.auth.authenticated)
  const { component, exact } = props

  // FIXME:  this should be re-rendered automatically when the auth state changes         


  // useEffect(() => {
  //   console.log(authenticated)
  // },
  //   [authenticated])

  console.log(`private route   ${authenticated}`)
  console.log(component)
  if (authenticated) {
    console.log('  ---     authenticated   ---')
    return (
      <Route {...props}>

      </Route>
    )

  } else {
    console.log(location)
    return (
      <Route {...props} component={undefined}>

        <Redirect to={{ pathname: "/", state: { from: location } }} />

      </Route>
    )
  }


}
export default PrivateRoute;

/* this works, but meh

 if (authenticated) {
    console.log('  ---     authenticated   ---')
    return (
      <Route {...props}>

      </Route>
    )

  } else {
    console.log(location)
    return (
      <Route {...props} component={undefined}>

        <Redirect to={{ pathname: "/", state: { from: location } }} />

      </Route>
    )
  }


this brakes other hooks

 return (
    <Route exact={exact} {...props} >
      {
        authenticated ?
          component
          :
          <Redirect to={{ pathname: "/", state: { from: location } }} />
      }


    </Route>
  )

*/
