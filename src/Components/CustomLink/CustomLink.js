import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          borderRadius: match ? "0px" : "none",
          background: match ? "#e6e7ee" : "transparent",
          boxShadow: match
            ? "inset 5px 5px 10px #dbdbe2,inset -5px -5px 10px #f2f3fa"
            : "none",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;
