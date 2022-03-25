import logo from "logo.svg";
import { useState, Suspense } from 'react';
import { Link, Outlet } from "react-router-dom";
import { useTranslation, Trans } from 'react-i18next';

const lngs = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch' },
  es: { nativeName: 'Español' },
};

function Home() {
  const { t, i18n } = useTranslation();
  const [count, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/">Home</Link> |{" "}
          <Link to="/poke-data">Api Data</Link> |{" "}
          <Link to="/video">Video</Link>
        </nav>
        <div>
          {Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.language === lng ? 'bold' : 'normal' }} type="submit" onClick={() => {
              i18n.changeLanguage(lng);
              setCounter(count + 1);
            }}>
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Trans i18nKey="description.part1">
            Edit <code>src/App.js</code> and save to reload.
          </Trans>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('description.part2')}
        </a>
        <Outlet />
      </header>
    </div>
  );
}

export default function WrappedHome() {
  return (
    <Suspense fallback="...is loading">
      <Home />
    </Suspense>
  );
}
