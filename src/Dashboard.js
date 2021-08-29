const Dashboard = ({ players }) => {
  return (
    <div className="table bg-gray-300 w-1/2 h-1/2 overflow-y-scroll items-center">
      <div className="table-row items-center">
        <div className="table-cell">Rank</div>
        <div className="table-cell">Name</div>
        <div className="table-cell">Time</div>
      </div>
      <div className="table-row-group items-center">
        {players.length > 0 ? (
          players.map(({ data }, i) => (
            <div className="table-row odd:bg-gray-100">
              <div className="table-cell">{i + 1}</div>
              <div className="table-cell">{data.name}</div>
              <div className="table-cell">
                {data.minute}m {data.second}s
              </div>
            </div>
          ))
        ) : (
          <div className="table-row odd:bg-gray-100 items-center">
            <div className="table-cell"></div>
            <div className="table-cell">No Players Yet</div>
            <div className="table-cell"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
