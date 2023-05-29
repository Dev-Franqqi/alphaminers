

import { useState ,useEffect,ChangeEvent} from 'react';
import i18next from 'i18next';


export default function Language() {
const lang = [{code :'en',name: 'English'},{code:'fr',name:'French'},{code:'es',name: 'Spanish'},{code:'de',name:"German"},{code :'tr',name:'turkish'}]
  const [selectedLanguage, setSelectedLanguage] = useState('');

  useEffect(() => {
    const currentLanguage = i18next.language;
    setSelectedLanguage(currentLanguage);
  }, []);

  const handleLanguageChange = (event:ChangeEvent<HTMLSelectElement>) => {
    const selectedLangCode = event.target.value;
    setSelectedLanguage(selectedLangCode);
    i18next.changeLanguage(selectedLangCode);
  };
  return (
    <select className='text-black rounded px-3 absolute right-3 mb-2' key={selectedLanguage} value={selectedLanguage} onChange={handleLanguageChange}>
      <option value="">Select a language</option>
      {lang.map((language, index) => (
        <option key={index} value={language.code}>
          {language.name}
        </option>
      ))}
    </select>
  );
}
