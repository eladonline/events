import data from "src/data/components/workingTime/data.json";
const WorkingTime = () => {
  return (
    <div className="working-time">
      <li>שעות פעילות:</li>
      <li>{data.working}</li>
      <li>{data.phone}</li>
      <li>{data.mail}</li>
    </div>
  );
};

export default WorkingTime;
