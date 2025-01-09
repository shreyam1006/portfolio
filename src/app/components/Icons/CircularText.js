import MLIcon from "./MLIcon";
import AnalyticsIcon from "./AnalyticsIcon";

export default function CircularText({ cardId, title }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 160 160">
      <defs>
        <path
          id={`curve-${cardId}`}
          d="M80,80 m-60,0 a60,60 0 1,1 120,0 a60,60 0 1,1 -120,0"
          fill="none"
        />
      </defs>
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 80 80"
          to="360 80 80"
          dur="15s"
          repeatCount="indefinite"
        />
        <text className="font-semibold text-black text-[16.5px]">
          <textPath href={`#curve-${cardId}`} startOffset="0%">
            &nbsp;
            {`• ${title} • ${title} • ${title} • ${title} • ${title} • ${title} • ${title} • ${title} • ${title} • ${title} • ${title} • ${title} •`}
          </textPath>
        </text>
      </g>
      <g transform="translate(35, 35)">
        {cardId === 1 ? (
          <MLIcon width={90} height={90} />
        ) : (
          <AnalyticsIcon width={90} height={90} />
        )}
      </g>
    </svg>
  );
}
