import { TableData } from "../types/table";
import Moment from "react-moment";
interface tableProps {
  dataTable: TableData[];
}
const Table = ({ dataTable }: tableProps) => {
  return (
    <div className="container-fluid mb-4">
      <div className="row">
        <div className="col-12">
          <div className="white-box pt-5 px-5 pb-3">
            <div className="row mb-3">
              <div className="col-md-8">
                <h4 className="m-0">My Tasks</h4>
              </div>             
            </div>

            <div className="row mb-3">
              <div className="col-md-5">
                <div className="col-md-9">
                  <input
                    type="text"
                    className="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder="Search by keywords, min 3 character"
                  />
                </div>
              </div>
              <div className="col-md-7">
                <div className="row">
                 
                 
                </div>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-12">
                <div className="table-responsive">
                  <table id="dashboard-table" className="table">
                    <thead>
                      <tr>
                        <th scope="col">Task Name</th>
                        <th className="px-4 text-center" scope="col">
                          Status
                        </th>
                        <th className="px-4 text-center" scope="col">
                          Task Type
                        </th>
                        <th className="px-4 text-center" scope="col">
                          View
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataTable &&
                        dataTable.map((item) => (
                          <tr>
                            <td>
                              <div className="task-title d-flex align-items-center">
                                <span className="icon material-symbols-outlined">
                                  checklist
                                </span>
                                <div className="task-name">
                                  <a href="#">
                                    <p>{item.taskName}</p>
                                  </a>
                                  <span>
                                    <Moment format={"DD-MM-YYYY"}>
                                      {item.dateCreated}
                                    </Moment>
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 text-center">
                              <span className={`badge ${item.status}`}>
                                {item.status}
                              </span>
                            </td>
                            <td className="px-4 text-center">
                              {item.taskType}
                            </td>
                            <td className="px-4 text-center">
                              <a href="#">View</a>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
