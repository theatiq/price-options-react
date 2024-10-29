import { LineChart, Line,XAxis, YAxis } from "recharts";

const Linechart = () => {
  const data = [
    { student: "Alice", math: 78, physics: 84, chemistry: 79 },
    { student: "Bob", math: 85, physics: 79, chemistry: 88 },
    { student: "Charlie", math: 92, physics: 91, chemistry: 86 },
    { student: "David", math: 74, physics: 76, chemistry: 72 },
    { student: "Eva", math: 88, physics: 85, chemistry: 89 },
    { student: "Frank", math: 69, physics: 73, chemistry: 70 },
    { student: "Grace", math: 95, physics: 94, chemistry: 96 },
    { student: "Hannah", math: 80, physics: 78, chemistry: 82 },
    { student: "Ian", math: 76, physics: 75, chemistry: 79 },
    { student: "Jack", math: 90, physics: 88, chemistry: 91 },
  ];

  return (
    <LineChart width={400} height={400} data={data}>
        <XAxis dataKey="student"></XAxis>
        <YAxis dataKey=""></YAxis>
      <Line type="monotone" dataKey="math" stroke="red" />
      <Line type="monotone" dataKey="physics" stroke="green" />
      <Line type="monotone" dataKey="chemistry" stroke="blue" />
    </LineChart>
  );
};

export default Linechart;
