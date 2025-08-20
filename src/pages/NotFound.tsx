import { NavLink } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="space-y-2">
      <h1 id="pageTitle" className="flex items-center space-x-2">

        <span className="text-xl font-medium m:text-2xl">
          Oops! Page not found.
        </span>
      </h1>
      <p className="text-base font-normal">
        The page you ara looking for was not found.
      </p>
      <p className="text-base font-normal">
        You may return to {""}
        <NavLink
          to="/"
          className="text-blue-600 hover:underline dark:text-blue-500"
        >
          Home Page
        </NavLink>
      </p>
    </div>
  )
}
