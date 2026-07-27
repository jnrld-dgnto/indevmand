import useScrollReveal from "../hooks/useScrollReveal";

export default function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  const ref = useScrollReveal();
  const delayClass = delay ? `reveal-delay-${delay}` : "";

  return (
    <Tag ref={ref} className={`reveal ${delayClass} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
