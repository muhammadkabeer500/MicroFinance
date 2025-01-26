// components/ApplicationList.js

const ApplicationList = () => {
    const applications = [
      { name: 'John Doe', loanType: 'Wedding', status: 'Pending' },
      { name: 'Jane Smith', loanType: 'Home Construction', status: 'Approved' },
      { name: 'Ali Khan', loanType: 'Business Startup', status: 'Rejected' },
      // More mock applications...
    ];
  
    return (
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Loan Applications</h2>
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border border-gray-300">Name</th>
              <th className="px-4 py-2 border border-gray-300">Loan Type</th>
              <th className="px-4 py-2 border border-gray-300">Status</th>
              <th className="px-4 py-2 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={index} className="odd:bg-gray-50 even:bg-gray-100">
                <td className="px-4 py-2 border border-gray-300">{app.name}</td>
                <td className="px-4 py-2 border border-gray-300">{app.loanType}</td>
                <td className="px-4 py-2 border border-gray-300">{app.status}</td>
                <td className="px-4 py-2 border border-gray-300">
                  <button className="text-blue-500 hover:underline">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  };
  
  export default ApplicationList;
  