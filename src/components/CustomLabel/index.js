function CustomLabel(props) {
  const { cx, cy } = props.viewBox;
  return (
    <>
      <text
        x={cx}
        y={cy - 5}
        fill="rgba(0, 0, 0, 0.87)"
        className="recharts-text recharts-label"
        textAnchor="middle"
        dominantBaseline="central"
      >
        <tspan alignmentBaseline="middle" fontSize="21.5px" fontFamily="Roboto">
          {props.value2}
        </tspan>
      </text>
      <text
        x={cx}
        y={cy + 20}
        fill="rgba(0, 0, 0, 0.54)"
        className="recharts-text recharts-label"
        textAnchor="middle"
        dominantBaseline="central"
      >
        <tspan width="10px" fontSize="17.3px" fontFamily="Roboto">
          {props.value1}
        </tspan>
      </text>
      <text
        x={cx}
        y={cy + 40}
        fill="rgba(0, 0, 0, 0.54)"
        className="recharts-text recharts-label"
        textAnchor="middle"
        dominantBaseline="central"
      >
        <tspan width="10px" fontSize="17.3px" fontFamily="Roboto">
          {props.value3}
        </tspan>
      </text>
    
    </>
  );
}

export default CustomLabel