import React, { useState, useEffect } from "react";
import { RouteProps } from "./Route";

interface RouterProps {
    children: React.ReactNode;
}

export const Router = ({ children }: RouterProps) => {
    const [path, setPath] = useState(location.pathname);
    const routes = React.Children.toArray(children) as React.ReactElement<RouteProps>[];

    useEffect(() => {
        const handleSetPath = () => {
            setPath(window.location.pathname)
        };

        window.addEventListener('popstate', handleSetPath);
        return () => window.removeEventListener('popstate', handleSetPath);
    }, []);

    return routes.find((route) => route.props.path === path);
}