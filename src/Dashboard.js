const Dashboard = () => {
  return (
    <div className="table bg-gray-300 w-3/4 h-1/2 overflow-y-scroll">
      <div className="table-row">
        <div className="table-cell">Rank</div>
        <div className="table-cell">Name</div>
        <div className="table-cell">Time</div>
      </div>
      <div className="table-row-group">
        <div className="table-row odd:bg-gray-100">
          <div className="table-cell">1</div>
          <div className="table-cell">Harsh</div>
          <div className="table-cell">5</div>
        </div>
        <div className="table-row">
          <div className="table-cell">1</div>
          <div className="table-cell">Harsh</div>
          <div className="table-cell">5</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
