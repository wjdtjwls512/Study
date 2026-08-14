import Header from "./Header";
import ProjectCard from "./Body";
// import Footer from "./Footer";

function App() {
  const name = "이정환";

  return (
    <div>
      <Header />
      <main>
        <ProjectCard
          title="급식 혼잡도 알림 서비스"
          role="프론트엔드 개발자"
          count="2"
          />
          <p>급식실의 시간대별 혼잡도를 학생들에게 알려주는 프로젝트입니다.</p>
      </main>
    </div>
  );
}
export default App;
