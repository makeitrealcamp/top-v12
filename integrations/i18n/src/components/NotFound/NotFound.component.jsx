import styles from './NotFound.module.css';
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>{t('notFound')}</h1>
    </main>
  );
}
