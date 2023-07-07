export interface RouteProps {
  path: string;
  component: React.ReactNode;
}

const Route = ({ path, component }: RouteProps) => {
  return window.location.pathname == path? <div>{component}</div> : null;
}

export default Route;