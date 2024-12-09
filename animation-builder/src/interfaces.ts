interface Animation {
    percent: number;
    [key: string]: string | number;
  }
  
  interface Category {
    name: string;
    animations: Animation[];
  }
  
export {Animation,Category}