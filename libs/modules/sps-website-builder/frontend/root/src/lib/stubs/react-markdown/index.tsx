// Styled markdown will not be rendered here
// react-markdown library has issue
// https://github.com/remarkjs/react-markdown/issues/635

export function ReactMarkdown({ children }: any) {
  return (
    <div
      data-test-id="react-markdown"
      data-comment="Styled markdown will not be rendered here. Check component '/src/components/stubs/react-markdown/index.tsx'"
    >
      {children}
    </div>
  );
}
