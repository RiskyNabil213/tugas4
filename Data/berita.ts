import link from "next/link"


export interface BlogPost {
   id: number;
   title: string;
   slug: string;
   date: string;
   excerpt: string;
   content: string;
 }
