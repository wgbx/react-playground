import { memo } from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  style?: React.CSSProperties;
}

 function Button(props: ButtonProps) {

  console.log("Button 渲染");
  const { children, onClick, style } = props;
  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
}

export default memo(Button);