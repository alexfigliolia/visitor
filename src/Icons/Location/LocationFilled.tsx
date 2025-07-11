import { SVGProps } from "react";
import { classnames } from "@figliolia/classnames";

export const LocationFilled = ({
  children,
  className,
  ...rest
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={classnames("location-filled", className)}
      {...rest}>
      <g>
        <g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.89129 21.0787L8.9461 21.1315L8.95039 21.1357C9.95462 22.098 10.9283 22.7576 12.0296 22.7449C13.1259 22.7323 14.0956 22.0555 15.0992 21.0783C16.4747 19.7455 18.2545 17.9477 19.5403 15.8149C20.831 13.6741 21.6639 11.1292 21.0372 8.33595C18.9197 -1.10413 5.09133 -1.11519 2.96276 8.32592C2.35382 11.04 3.12314 13.5227 4.34999 15.6268C5.57222 17.7231 7.2824 19.5029 8.65394 20.8471C8.73386 20.9254 8.81273 21.0023 8.89035 21.0778L8.89129 21.0787ZM12 6.25012C10.2051 6.25012 8.75 7.7052 8.75 9.50012C8.75 11.295 10.2051 12.7501 12 12.7501C13.7949 12.7501 15.25 11.295 15.25 9.50012C15.25 7.7052 13.7949 6.25012 12 6.25012Z"
          />
        </g>
      </g>
      {children}
    </svg>
  );
};
