import { FC, memo } from "react";

type SpinnerProps = {};

const Spinner: FC<SpinnerProps> = (props) => {
  return (
    <div className="relative h-12">
      <svg
        className="absolute  m-auto  h-20  block shape  [shape-rendering: auto]"
        xmlns="http://www.w3.org/2000/svg"
        //   xmlns:xlink="http://www.w3.org/1999/xlink"
        //   style="margin: auto; background: rgb(255, 255, 255); display: block; "

        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          r="0"
          fill="none"
          stroke="#e90c59"
          stroke-width="8"
        >
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1s"
            values="0;40"
            keyTimes="0;1"
            keySplines="0 0.2 0.8 1"
            calcMode="spline"
            begin="0s"
          />
          <animate
            attributeName="opacity"
            repeatCount="indefinite"
            dur="1s"
            values="1;0"
            keyTimes="0;1"
            keySplines="0.2 0 0.8 1"
            calcMode="spline"
            begin="0s"
          />
        </circle>
        <circle
          cx="50"
          cy="50"
          r="0"
          fill="none"
          stroke="#46dff0"
          stroke-width="10"
        >
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1s"
            values="0;40"
            keyTimes="0;1"
            keySplines="0 0.2 0.8 1"
            calcMode="spline"
            begin="-0.5s"
          />
          <animate
            attributeName="opacity"
            repeatCount="indefinite"
            dur="1s"
            values="1;0"
            keyTimes="0;1"
            keySplines="0.2 0 0.8 1"
            calcMode="spline"
            begin="-0.5s"
          />
        </circle>
      </svg>
    </div>
  );
};

Spinner.defaultProps = {};

export default memo(Spinner);
