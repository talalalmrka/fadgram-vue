// types/prismjs.d.ts
declare module 'prismjs' {
    interface Prism {
      highlightAll(): void;
    }
  
    const prism: Prism;
    export default prism;
  }
  