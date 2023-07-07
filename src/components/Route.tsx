export interface RouteProps {
  path: string;
  element: React.ReactNode;
}

const Route = ({ path, element }: RouteProps) => {
  return window.location.pathname == path? <>{element}</> : null;
}

export default Route;