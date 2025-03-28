import React, { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import "./Portfolio.css";

const Portfolio = () => {
  const [filterText, setFilterText] = useState("");
  const [filterBy, setFilterBy] = useState("borrower");
  const [sortingColumn, setSortingColumn] = useState(null);
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [newLoan, setNewLoan] = useState({
    loanNo: "",
    type: "",
    borrower: "",
    address: "",
    coBorrower: "",
    coAddress: "",
    dpd: "",
    amount: "",
    region: "",
  });

  const [data, setData] = useState([
    {
      loanNo: "L28J3247",
      type: "Home Loan",
      borrower: "Vedica Sachar",
      address: "83 Yogi Ganj, Kadapa-058720",
      coBorrower: "Divit Vora",
      coAddress: "24/53A, Acharya Path Ongole-052360",
      dpd: 91,
      amount: 1934068,
      region: "West",
    },
    {
      loanNo: "L28J3243",
      type: "Home Loan",
      borrower: "Hrishita Agrawal",
      address: "86/22, Deo Path, Betulampore 841186",
      coBorrower: "Mahika Tak",
      coAddress: "58 Teal Road, Sultan Pur Marja 91878",
      dpd: 100,
      amount: 1842143,
      region: "North",
    },
    {
      loanNo: "L28J3252",
      type: "Car Loan",
      borrower: "Priyansh Soman",
      address: "H.No. 152 Andra Street Amritsar-471762",
      coBorrower: "Zaina Dara",
      coAddress: "H.No. 42, Srivastava Marg, Junagadh-191124",
      dpd: 100,
      amount: 4537889,
      region: "East",
    },
    {
      loanNo: "L28P1101",
      type: "Personal Loan",
      borrower: "Ananya Sharma",
      address: "21, Green Park, Mumbai-400001",
      coBorrower: "Rahul Sharma",
      coAddress: "Flat 4B, Bandra West, Mumbai-400050",
      dpd: 45,
      amount: 750000,
      region: "West",
    },
    {
      loanNo: "L28P1103",
      type: "Personal Loan",
      borrower: "Kiran Mehta",
      address: "56, Connaught Place, Delhi-110001",
      coBorrower: "Amit Mehta",
      coAddress: "Flat 8C, Rajouri Garden, Delhi-110027",
      dpd: 15,
      amount: 500000,
      region: "North",
    },
    {
      loanNo: "L28C2045",
      type: "Car Loan",
      borrower: "Sanya Kapoor",
      address: "77, Golf Course Road, Gurgaon-122002",
      coBorrower: "Nishant Kapoor",
      coAddress: "B-5, DLF Phase 3, Gurgaon-122010",
      dpd: 60,
      amount: 2200000,
      region: "North",
    },
    {
      loanNo: "L28H5678",
      type: "Home Loan",
      borrower: "Aditya Rao",
      address: "House No. 12, Koramangala, Bangalore-560034",
      coBorrower: "Meera Rao",
      coAddress: "Apartment 3D, HSR Layout, Bangalore-560102",
      dpd: 75,
      amount: 3200000,
      region: "South",
    },
  ]);
  

  const filteredData = useMemo(() => {
    if (!filterText) return data;
    return data.filter((item) =>
      String(item[filterBy]).toLowerCase().includes(filterText.toLowerCase())
    );
  }, [filterText, filterBy, data]);

  const sortedData = useMemo(() => {
    if (!sortingColumn) return filteredData;
    return [...filteredData].sort((a, b) => {
      if (typeof a[sortingColumn] === "string") {
        return a[sortingColumn].localeCompare(b[sortingColumn]);
      }
      return a[sortingColumn] - b[sortingColumn];
    });
  }, [filteredData, sortingColumn]);

  const columns = useMemo(
    () => [
      { id: "loanNo", header: "Loan No", accessorKey: "loanNo" },
      { id: "type", header: "Loan Type", accessorKey: "type" },
      { id: "borrower", header: "Borrower", accessorKey: "borrower" },
      { id: "address", header: "Address", accessorKey: "address" },
      { id: "coBorrower", header: "Co-Borrower", accessorKey: "coBorrower" },
      {
        id: "coAddress",
        header: "Co-Borrower Address",
        accessorKey: "coAddress",
      },
      { id: "dpd", header: "Current DPD", accessorKey: "dpd" },
      { id: "amount", header: "Sanction Amount", accessorKey: "amount" },
      { id: "region", header: "Region", accessorKey: "region" },
    ],
    []
  );

  const table = useReactTable({
    data: sortedData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleFilterSelect = (column) => {
    setSortingColumn(column);
    setShowFilterOptions(false);
  };

  const handleUploadClick = () => {
    setShowUploadForm(true);
  };

  const handleInputChange = (e) => {
    setNewLoan({ ...newLoan, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, newLoan]);
    setShowUploadForm(false);
    setNewLoan({
      loanNo: "",
      type: "",
      borrower: "",
      address: "",
      coBorrower: "",
      coAddress: "",
      dpd: "",
      amount: "",
      region: "",
    });
  };

  return (
    <div className="portfolio-container">
      <h2>Portfolio</h2>

      <div className="filter-container">
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <select value={filterBy} onChange={(e) => setFilterBy(e.target.value)}>
          <option value="loanNo">Loan No</option>
          <option value="borrower">Borrower Name</option>
          <option value="amount">Amount</option>
        </select>
        {/* <button className="reset-btn" onClick={() => window.location.reload()}>
          Reset
        </button> */}

        <div className="more-filters">
          <button
            className="more-filters-btn"
            onClick={() => setShowFilterOptions(!showFilterOptions)}
          >
            More Filters
          </button>
          {showFilterOptions && (
            <div className="filter-dropdown">
              <button onClick={() => handleFilterSelect("amount")}>
                Sort by Amount
              </button>
              <button onClick={() => handleFilterSelect("region")}>
                Sort by Region
              </button>
              <button onClick={() => handleFilterSelect("type")}>
                Sort by Loan Type
              </button>
            </div>
          )}
        </div>

        <button className="upload-btn" onClick={handleUploadClick}>
          Upload
        </button>
      </div>

      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(
                    cell.column.columnDef.cell ??
                      cell.column.columnDef.accessorKey,
                    cell.getContext()
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Upload Modal */}
      {showUploadForm && (
        <div className="upload-modal">
          <div className="modal-content">
            <h3>Add New Loan</h3>
            <form onSubmit={handleSubmit} className="form-grid">
              {Object.entries(newLoan).map(([key, value]) => (
                <div key={key} className="form-row">
                  <label>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
                  <input
                    name={key}
                    value={value}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              ))}
              <div className="modal-actions">
                <button type="submit">Submit</button>
                <button type="button" onClick={() => setShowUploadForm(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
