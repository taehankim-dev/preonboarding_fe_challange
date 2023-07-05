import React, {useEffect, useState} from 'react';

interface RouteProps {
  path : string;
  element : React.ReactNode;
}

interface RouterProps {
  children : React.ReactElement<RouteProps>[];
}

/** usePath */
// 현재 주소를 확인하는 함수
function usePath () {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    setPath(window.location.pathname)
  }, [])
  console.log(path, "in usePath")
  return path;
}

/** Route */
// <Route path="" component="" /> 형태로 받으면 component 돌려줌.
export const Route = ({element} : RouteProps) => {
  return <>{element}</>
}

/** Router */
// <Router> 안에 <Route> 형태로 받음.
export const Router = ({children} : RouterProps) => {
  const currentPath = usePath();
  return (
    <>
      {children?.map((route: React.ReactElement<RouteProps>) => {
        if(route.props.path === currentPath)
        return route
      })}
    </>
  )
}

// Type '{ path: string; element: Element; }' is not assignable 
// to type 'IntrinsicAttributes & RouteProps'.
// Property 'element' does not exist on type 
// 'IntrinsicAttributes & RouteProps'.