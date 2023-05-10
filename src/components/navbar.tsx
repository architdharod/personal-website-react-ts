import { AppSettings } from '../assets/interfaces';

interface Props {
  name: string;
  appSetting: AppSettings;
  handleClickOnLang: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClickOnTheme: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function Navbar({
  name,
  appSetting,
  handleClickOnLang,
  handleClickOnTheme,
}: Props) {
  return (
    <nav>
      <div id='name'>{name}</div>

      <div className='toggle-buttons'>
        <button id='mode' onClick={handleClickOnTheme}>
          {appSetting.lightMode ? 'Dark' : 'Light'}
        </button>
        <button id='style' onClick={handleClickOnTheme}>
          Style
        </button>
        <button id='EN' className='language-icon' onClick={handleClickOnLang}>
          {appSetting.langImgSrc}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
