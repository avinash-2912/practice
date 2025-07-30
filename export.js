import XLSX from 'xlsx';
const data = [
  { Name: 'John Doe', Age: 30, City: 'New York' },
  { Name: 'Jane Smith', Age: 25, City: 'Los Angeles' },
  { Name: 'Sam Green', Age: 35, City: 'Chicago' }
];
const worksheet = XLSX.utils.json_to_sheet(data);
const workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
XLSX.writeFile(workbook, 'output.xlsx');