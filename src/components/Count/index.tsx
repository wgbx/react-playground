interface CountProps {
  children: React.ReactNode;
  onClick: () => void;
  style?: React.CSSProperties;
}

export default function Count(props: CountProps) {

  console.log("Count 渲染");
  const { children, onClick, style } = props;
  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
}
