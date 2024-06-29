export const mockData = {
  stations: [
    { id: '1-1', assigned: false, employee: null },
    { id: '1-2', assigned: false, employee: null },
    { id: '1-3', assigned: false, employee: null },
    { id: '1-4', assigned: false, employee: null },
    { id: '1-5', assigned: false, employee: null },
    { id: '2-1', assigned: false, employee: null },
    { id: '2-2', assigned: false, employee: null },
    { id: '2-3', assigned: false, employee: null },
    { id: '2-4', assigned: false, employee: null },
    { id: '2-5', assigned: false, employee: null },
    { id: '3-1', assigned: false, employee: null },
    { id: '3-2', assigned: false, employee: null },
    { id: '3-3', assigned: false, employee: null },
    { id: '3-4', assigned: false, employee: null },
    { id: '3-5', assigned: false, employee: null },
    { id: '4-1', assigned: false, employee: null },
    { id: '4-2', assigned: false, employee: null },
    { id: '4-3', assigned: false, employee: null },
    { id: '4-4', assigned: false, employee: null },
    { id: '4-5', assigned: false, employee: null },
    { id: '5-1', assigned: false, employee: null },
    { id: '5-2', assigned: false, employee: null },
    { id: '5-3', assigned: false, employee: null },
    { id: '5-4', assigned: false, employee: null },
    { id: '5-5', assigned: false, employee: null }
  ],
  employees: [
    { id: 1, name: "Jon Snow", cid: "123456" },
    { id: 2, name: "Daenerys Targaryen", cid: "234567" },
    { id: 3, name: "Arya Stark", cid: "345678" },
    { id: 4, name: "Tyrion Lannister", cid: "456789" },
    { id: 5, name: "Cersei Lannister", cid: "567890" },
    { id: 6, name: "Jaime Lannister", cid: "678901" },
    { id: 7, name: "Sansa Stark", cid: "789012" },
    { id: 8, name: "Bran Stark", cid: "890123" },
    { id: 9, name: "Samwell Tarly", cid: "901234" },
    { id: 10, name: "Brienne of Tarth", cid: "012345" },
    { id: 11, name: "Jorah Mormont", cid: "112233" },
    { id: 12, name: "Petyr Baelish", cid: "223344" },
    { id: 13, name: "Sandor Clegane", cid: "334455" },
    { id: 14, name: "Varys", cid: "445566" },
    { id: 15, name: "Theon Greyjoy", cid: "556677" },
    { id: 16, name: "Davos Seaworth", cid: "667788" },
    { id: 17, name: "Melisandre", cid: "778899" },
    { id: 18, name: "Gendry", cid: "889900" },
    { id: 19, name: "Tormund Giantsbane", cid: "990011" },
    { id: 20, name: "Yara Greyjoy", cid: "101112" },
    { id: 21, name: "Missandei", cid: "121314" },
    { id: 22, name: "Grey Worm", cid: "131415" },
    { id: 23, name: "Podrick Payne", cid: "141516" },
    { id: 24, name: "Bronn", cid: "151617" },
    { id: 25, name: "Daario Naharis", cid: "161718" }
  ],
 
  addEmployeeToStation: (stationId, employeeId) => {
    const station = mockData.stations.find(station => station.id === stationId);
    const employee = mockData.employees.find(employee => employee.id === parseInt(employeeId, 10));
    if (station && employee) {
      station.assigned = true;
      station.employee = employee;
    }
  },
};