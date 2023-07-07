export interface RouteProps {
  path: string;
  element: React.ReactNode;
}

export const Route = ({ path, element }: RouteProps) => {
  return window.location.pathname == path? <>{element}</> : null;
}