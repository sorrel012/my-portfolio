import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    home: {
      bgColor: string;
      titleColor: string;
      textColor: string;
    };
    header: {
      white: string;
      blue: string;
      green: string;
      pink: string;
    };
    profile: {
      bgColor: string;
      boxColor: string;
      titleColor: string;
      labelColor: string;
    };
    skills: {
      bgColor: string;
      textColor: string;
    };
    projects: {
      headerBgColor: string;
      headerTextColor: string;
      bgColor: string;
      wrapperBgColor: string;
      contentBgColor: string;
    };
    contact: {
      bgColor: string;
      headerColor: string;
      textColor: string;
    };
    admin: {
      loginColor: string;
      navBgColor: string;
      navBorderColor: string;
      navTextColor: string;
      navTextHoverColor: string;
      textColor: string;
      bgColor: string;
      wrapperBgColor: string;
      wrapperBorderColor: string;
    };
  }
}
