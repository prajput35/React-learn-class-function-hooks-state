import { ReactNode } from "react";

interface Props {
  text: string;
  children: ReactNode;
}
const Alert = ({ text, children }: Props) => {
  return (
    <div className="alert alert-primary">
      {children}
      <div>{text}</div>
    </div>
  );
};

export default Alert;
