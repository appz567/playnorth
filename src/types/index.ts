export interface metaDataProps {
    title: string;
    description: string;
    path: string;
    availableLanguages: {
      en: {
        path: string;
      },
      fi: {
        path: string;
      }
    };
    indexed: boolean;
  }