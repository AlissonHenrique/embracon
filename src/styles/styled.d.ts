import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
        primary:string;
        secundary:string;       
        background: string;
        text:string;
        textSecondary:string ; 
        label:string;
        bgButton:string;
        clButton:string;
        clMenu:string;
        logo:string;
    }
  }
}
