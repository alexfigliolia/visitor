import { SVGProps } from "react";
import "./styles.scss";

export const SVGGradient = ({ colors, ...rest }: Props) => {
  const N = colors.length - 1;
  return (
    <svg className="svg-gradient" aria-hidden>
      <linearGradient {...rest}>
        {colors.map((c, i) => {
          return <stop key={i} offset={`${100 * (i / N)}%`} stopColor={c} />;
        })}
      </linearGradient>
    </svg>
  );
};

interface Props extends Omit<SVGProps<SVGGradientElement>, "ref"> {
  colors: string[];
}
