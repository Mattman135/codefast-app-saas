import Link from "next/link" // this pre fetches the data and hence makes loading faster. its not an html tag and the browser will interpret this as an a tag html.

const ButtonLogin = ({ isLoggedIn, name, extraStyle }) => {
  if (isLoggedIn) {
    return (
      <Link
        href="/dashboard"
        className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
      >
        Welcome back {name}
      </Link>
    )
  }
  return <button>Login</button>
}
export default ButtonLogin
