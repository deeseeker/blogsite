import Features from "@/component/RecentArticle";
import Header from "@/component/Header";
import Image from "next/image";
import RecentArticle from "@/component/RecentArticle";
import AllArticle from "@/component/AllArticle/AllArticle";
import Slide from "@/component/Slide";

export default function Home() {
  return (
    <main>
      <Header/>
      <RecentArticle/>
      <AllArticle/>
      <Slide/>
    </main>
  );
}
