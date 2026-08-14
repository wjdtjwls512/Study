function ProjectCard({title, role, count}) {
  return (
    <main>
        <h2>{title}</h2>
        <p>모집 역할: {role}</p>
        <p>모집 인원: {count}</p>
    </main>
  );
}
export default ProjectCard;