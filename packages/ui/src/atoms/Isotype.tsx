import { UnsetSvg, UnsetSvgProps } from "../helpers/UnsetSvg";

export default function Isotype({ sx }: UnsetSvgProps) {
  return (
    <UnsetSvg sx={sx}>
      <svg
        width="44"
        height="29"
        viewBox="0 0 44 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.0329 9.98497L8.30674 23.0849H33.8462L27.6914 8.66779L20.9687 20.536H15.2108L23.473 0.138672H31.3864L43.3401 28.7094H0L15.0329 9.98497Z"
          fill="url(#paint0_linear_9322_7625)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_9322_7625"
            x1="38.7454"
            y1="5.56816"
            x2="14.0305"
            y2="39.0654"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2193CE" />
            <stop offset="1" stopColor="#7339FF" />
          </linearGradient>
        </defs>
      </svg>
    </UnsetSvg>
  );
}
