import { useAuth0 } from "@auth0/auth0-react";

export default function Video() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { loginWithRedirect } = useAuth0();

  if (!isAuthenticated) {
    return (
      <div>
        <h2>User not authenticated</h2>
        <button onClick={() => loginWithRedirect()}>Log In</button>
      </div>
    );
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <main>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </main>
    )
  );
}
