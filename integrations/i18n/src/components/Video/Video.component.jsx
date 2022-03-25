import { useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function Video() {
  const params = useParams();
  const { t } = useTranslation();
  return (
    <main>
      <h2>{t('video')} 🚧</h2>
      <p>{params.videoId ? `Id# ${params.videoId}` : ''}</p>
    </main>
  );
}
