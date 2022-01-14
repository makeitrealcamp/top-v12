import { useParams } from "react-router-dom";

export default function Video() {
  const params = useParams();
  return (
    <main>
      <h2>Page in construction 🚧</h2>
      <p>{params.videoId ? `Id# ${params.videoId}` : ''}</p>
    </main>
  );
}
