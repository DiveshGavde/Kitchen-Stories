export default function PageContent({ title, children }) {
  return (
    <main className="error">
      <h2>{title}</h2>
      {children}
    </main>
  );
}
