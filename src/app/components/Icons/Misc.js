import "../HomeGrid/styles/misc.css";

const colorMap = {
  lavender: "#C6B1EA",
  pink: "#F480A3",
  peach: "#F7A474",
  sage: "#C8D98E",
  yellow: "#FFDF70",
  skyblue: "#B6CDDC",
};

export default function Misc({
  petalColor = "pink",
  outerCircleColor = "skyblue",
}) {
  return (
    <svg
      id="eeLJ3NBQkhu1"
      viewBox="0 0 171 171"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      cached="false"
      className="w-full h-full"
    >
      <g transform="translate(-92.13499-88.393577)">
        <g transform="translate(-.265008 0)">
          <g
            id="eeLJ3NBQkhu4_tr"
            transform="translate(176.406544,173.893578) rotate(0)"
          >
            <g transform="translate(-176.406543,-173.893577)">
              <path
                d="M68.990552,113.548099c-9.71971,17.001312-3.808359,36.737502,40.716747,29.637422c2.337149-.371131,3.795105-2.16051,4.5771-3.485976s1.577244-3.49923.728978-5.708341C98.900749,91.89882,78.851639,96.626315,68.990552,113.548099Z"
                transform="translate(55.152148 27.16665)"
                fill={colorMap[petalColor]}
                stroke="#000"
              />
              <path
                d="M68.990552,113.548099c-9.71971,17.001312-3.808359,36.737502,40.716747,29.637422c2.337149-.371131,3.795105-2.16051,4.5771-3.485976s1.577244-3.49923.728978-5.708341C98.900749,91.89882,78.851639,96.626315,68.990552,113.548099Z"
                transform="matrix(.410172 0.912008-.912008 0.410172 257.358377 5.779852)"
                fill={colorMap[petalColor]}
                stroke="#000"
              />
              <path
                d="M68.988814,234.060549c9.861309,16.921837,29.910868,21.649348,46.028275-20.44317.843866-2.209117.026508-4.369634-.728995-5.708359s-2.24442-3.092764-4.577202-3.485986c-44.530522-7.100103-50.446423,12.63615-40.722078,29.637515Z"
                transform="translate(52.177498-33.50484)"
                fill={colorMap[petalColor]}
                stroke="#000"
              />
              <path
                d="M68.988814,234.060549c9.861309,16.921837,29.910868,21.649348,46.028275-20.44317.843866-2.209117.026508-4.369634-.728995-5.708359s-2.24442-3.092764-4.577202-3.485986c-44.530522-7.100103-50.446423,12.63615-40.722078,29.637515Z"
                transform="matrix(.583941-.811796 0.811796 0.583941-60.05805 151.100552)"
                fill={colorMap[petalColor]}
                stroke="#000"
              />
              <path
                d="M267.837415,234.060469c9.719706-17.001312,3.808357-36.737502-40.716735-29.637422-2.337148.371131-3.795104,2.16051-4.577098,3.485976s-1.577244,3.49923-.728978,5.708341c16.112622,42.092384,36.161726,37.364889,46.022811,20.443105Z"
                transform="translate(-39.053736-27.973186)"
                fill={colorMap[petalColor]}
                stroke="#000"
              />
              <path
                d="M267.84163,113.548372c-9.861305-16.921845-29.910858-21.649358-46.02826,20.443178-.843866,2.209119-.026509,4.369636.728995,5.708362s2.244419,3.092765,4.5772,3.485988c44.530508,7.100105,50.446408-12.636156,40.722065-29.637528Z"
                transform="translate(-34.946979 32.337744)"
                fill={colorMap[petalColor]}
                stroke="#000"
              />
            </g>
          </g>
        </g>
        <g>
          <circle
            r="32.365"
            transform="translate(177.635 173.20044)"
            fill={colorMap[outerCircleColor]}
            stroke="#000"
          />
          <circle
            r="25"
            transform="translate(177.635 173.20044)"
            fill={colorMap.yellow}
            stroke="#000"
          />
        </g>
      </g>
      <circle r="4" transform="translate(76.616036 85.5)" />
      <circle r="4" transform="translate(89.50001 79.242074)" />
      <path
        d="M84.551427,90.426326q8.667094,3.485977,8.667091-4.875996"
        transform="translate(-1.931418 1.755836)"
        fill="none"
        stroke="#000"
      />
    </svg>
  );
}
