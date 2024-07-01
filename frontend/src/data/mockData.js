import { tokens } from "../theme";

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

export const mockTransactions = [
  { txId: 1, user: "Jon Snow", date: "2024-01-01", cost: 100 },
  { txId: 2, user: "Daenerys Targaryen", date: "2024-01-02", cost: 200 },
  { txId: 3, user: "Arya Stark", date: "2024-01-03", cost: 150 },
  { txId: 4, user: "Tyrion Lannister", date: "2024-01-04", cost: 250 },
  { txId: 5, user: "Cersei Lannister", date: "2024-01-05", cost: 300 },
  { txId: 6, user: "Jaime Lannister", date: "2024-01-06", cost: 220 },
  { txId: 7, user: "Sansa Stark", date: "2024-01-07", cost: 180 },
  { txId: 8, user: "Bran Stark", date: "2024-01-08", cost: 190 },
  { txId: 9, user: "Samwell Tarly", date: "2024-01-09", cost: 210 },
  { txId: 10, user: "Brienne of Tarth", date: "2024-01-10", cost: 240 },
  { txId: 11, user: "Jorah Mormont", date: "2024-01-11", cost: 170 },
  { txId: 12, user: "Petyr Baelish", date: "2024-01-12", cost: 260 },
  { txId: 13, user: "Sandor Clegane", date: "2024-01-13", cost: 230 },
  { txId: 14, user: "Varys", date: "2024-01-14", cost: 140 },
  { txId: 15, user: "Theon Greyjoy", date: "2024-01-15", cost: 200 },
  { txId: 16, user: "Davos Seaworth", date: "2024-01-16", cost: 160 },
  { txId: 17, user: "Melisandre", date: "2024-01-17", cost: 210 },
  { txId: 18, user: "Gendry", date: "2024-01-18", cost: 250 },
  { txId: 19, user: "Tormund Giantsbane", date: "2024-01-19", cost: 220 },
  { txId: 20, user: "Yara Greyjoy", date: "2024-01-20", cost: 180 },
  { txId: 21, user: "Missandei", date: "2024-01-21", cost: 230 },
  { txId: 22, user: "Grey Worm", date: "2024-01-22", cost: 190 },
  { txId: 23, user: "Podrick Payne", date: "2024-01-23", cost: 160 },
  { txId: 24, user: "Bronn", date: "2024-01-24", cost: 210 },
  { txId: 25, user: "Daario Naharis", date: "2024-01-25", cost: 200 }
];
export const mockBarData = [
  {
    country: "AD",
    "hot dog": 137,
    "hot dogColor": "hsl(229, 70%, 50%)",
    burger: 96,
    burgerColor: "hsl(296, 70%, 50%)",
    kebab: 72,
    kebabColor: "hsl(97, 70%, 50%)",
    donut: 140,
    donutColor: "hsl(340, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 55,
    "hot dogColor": "hsl(307, 70%, 50%)",
    burger: 28,
    burgerColor: "hsl(111, 70%, 50%)",
    kebab: 58,
    kebabColor: "hsl(273, 70%, 50%)",
    donut: 29,
    donutColor: "hsl(275, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 109,
    "hot dogColor": "hsl(72, 70%, 50%)",
    burger: 23,
    burgerColor: "hsl(96, 70%, 50%)",
    kebab: 34,
    kebabColor: "hsl(106, 70%, 50%)",
    donut: 152,
    donutColor: "hsl(256, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 133,
    "hot dogColor": "hsl(257, 70%, 50%)",
    burger: 52,
    burgerColor: "hsl(326, 70%, 50%)",
    kebab: 43,
    kebabColor: "hsl(110, 70%, 50%)",
    donut: 83,
    donutColor: "hsl(9, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 81,
    "hot dogColor": "hsl(190, 70%, 50%)",
    burger: 80,
    burgerColor: "hsl(325, 70%, 50%)",
    kebab: 112,
    kebabColor: "hsl(54, 70%, 50%)",
    donut: 35,
    donutColor: "hsl(285, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 66,
    "hot dogColor": "hsl(208, 70%, 50%)",
    burger: 111,
    burgerColor: "hsl(334, 70%, 50%)",
    kebab: 167,
    kebabColor: "hsl(182, 70%, 50%)",
    donut: 18,
    donutColor: "hsl(76, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 80,
    "hot dogColor": "hsl(87, 70%, 50%)",
    burger: 47,
    burgerColor: "hsl(141, 70%, 50%)",
    kebab: 158,
    kebabColor: "hsl(224, 70%, 50%)",
    donut: 49,
    donutColor: "hsl(274, 70%, 50%)",
  },
];

export const mockLineData = [
  {
    id: "japan",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "plane",
        y: 101,
      },
      {
        x: "helicopter",
        y: 75,
      },
      {
        x: "boat",
        y: 36,
      },
      {
        x: "train",
        y: 216,
      },
      {
        x: "subway",
        y: 35,
      },
      {
        x: "bus",
        y: 236,
      },
      {
        x: "car",
        y: 88,
      },
      {
        x: "moto",
        y: 232,
      },
      {
        x: "bicycle",
        y: 281,
      },
      {
        x: "horse",
        y: 1,
      },
      {
        x: "skateboard",
        y: 35,
      },
      {
        x: "others",
        y: 14,
      },
    ],
  },
  {
    id: "france",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "plane",
        y: 212,
      },
      {
        x: "helicopter",
        y: 190,
      },
      {
        x: "boat",
        y: 270,
      },
      {
        x: "train",
        y: 9,
      },
      {
        x: "subway",
        y: 75,
      },
      {
        x: "bus",
        y: 175,
      },
      {
        x: "car",
        y: 33,
      },
      {
        x: "moto",
        y: 189,
      },
      {
        x: "bicycle",
        y: 97,
      },
      {
        x: "horse",
        y: 87,
      },
      {
        x: "skateboard",
        y: 299,
      },
      {
        x: "others",
        y: 251,
      },
    ],
  },
  {
    id: "us",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: "plane",
        y: 191,
      },
      {
        x: "helicopter",
        y: 136,
      },
      {
        x: "boat",
        y: 91,
      },
      {
        x: "train",
        y: 190,
      },
      {
        x: "subway",
        y: 211,
      },
      {
        x: "bus",
        y: 152,
      },
      {
        x: "car",
        y: 189,
      },
      {
        x: "moto",
        y: 152,
      },
      {
        x: "bicycle",
        y: 8,
      },
      {
        x: "horse",
        y: 197,
      },
      {
        x: "skateboard",
        y: 107,
      },
      {
        x: "others",
        y: 170,
      },
    ],
  },
];

export const mockGeographyData = [
  {
    id: "AFG",
    value: 520600,
  },
  {
    id: "AGO",
    value: 949905,
  },
  {
    id: "ALB",
    value: 329910,
  },
  {
    id: "ARE",
    value: 675484,
  },
  {
    id: "ARG",
    value: 432239,
  },
  {
    id: "ARM",
    value: 288305,
  },
  {
    id: "ATA",
    value: 415648,
  },
  {
    id: "ATF",
    value: 665159,
  },
  {
    id: "AUT",
    value: 798526,
  },
  {
    id: "AZE",
    value: 481678,
  },
  {
    id: "BDI",
    value: 496457,
  },
  {
    id: "BEL",
    value: 252276,
  },
  {
    id: "BEN",
    value: 440315,
  },
  {
    id: "BFA",
    value: 343752,
  },
  {
    id: "BGD",
    value: 920203,
  },
  {
    id: "BGR",
    value: 261196,
  },
  {
    id: "BHS",
    value: 421551,
  },
  {
    id: "BIH",
    value: 974745,
  },
  {
    id: "BLR",
    value: 349288,
  },
  {
    id: "BLZ",
    value: 305983,
  },
  {
    id: "BOL",
    value: 430840,
  },
  {
    id: "BRN",
    value: 345666,
  },
  {
    id: "BTN",
    value: 649678,
  },
  {
    id: "BWA",
    value: 319392,
  },
  {
    id: "CAF",
    value: 722549,
  },
  {
    id: "CAN",
    value: 332843,
  },
  {
    id: "CHE",
    value: 122159,
  },
  {
    id: "CHL",
    value: 811736,
  },
  {
    id: "CHN",
    value: 593604,
  },
  {
    id: "CIV",
    value: 143219,
  },
  {
    id: "CMR",
    value: 630627,
  },
  {
    id: "COG",
    value: 498556,
  },
  {
    id: "COL",
    value: 660527,
  },
  {
    id: "CRI",
    value: 60262,
  },
  {
    id: "CUB",
    value: 177870,
  },
  {
    id: "-99",
    value: 463208,
  },
  {
    id: "CYP",
    value: 945909,
  },
  {
    id: "CZE",
    value: 500109,
  },
  {
    id: "DEU",
    value: 63345,
  },
  {
    id: "DJI",
    value: 634523,
  },
  {
    id: "DNK",
    value: 731068,
  },
  {
    id: "DOM",
    value: 262538,
  },
  {
    id: "DZA",
    value: 760695,
  },
  {
    id: "ECU",
    value: 301263,
  },
  {
    id: "EGY",
    value: 148475,
  },
  {
    id: "ERI",
    value: 939504,
  },
  {
    id: "ESP",
    value: 706050,
  },
  {
    id: "EST",
    value: 977015,
  },
  {
    id: "ETH",
    value: 461734,
  },
  {
    id: "FIN",
    value: 22800,
  },
  {
    id: "FJI",
    value: 18985,
  },
  {
    id: "FLK",
    value: 64986,
  },
  {
    id: "FRA",
    value: 447457,
  },
  {
    id: "GAB",
    value: 669675,
  },
  {
    id: "GBR",
    value: 757120,
  },
  {
    id: "GEO",
    value: 158702,
  },
  {
    id: "GHA",
    value: 893180,
  },
  {
    id: "GIN",
    value: 877288,
  },
  {
    id: "GMB",
    value: 724530,
  },
  {
    id: "GNB",
    value: 387753,
  },
  {
    id: "GNQ",
    value: 706118,
  },
  {
    id: "GRC",
    value: 377796,
  },
  {
    id: "GTM",
    value: 66890,
  },
  {
    id: "GUY",
    value: 719300,
  },
  {
    id: "HND",
    value: 739590,
  },
  {
    id: "HRV",
    value: 929467,
  },
  {
    id: "HTI",
    value: 538961,
  },
  {
    id: "HUN",
    value: 146095,
  },
  {
    id: "IDN",
    value: 490681,
  },
  {
    id: "IND",
    value: 549818,
  },
  {
    id: "IRL",
    value: 630163,
  },
  {
    id: "IRN",
    value: 596921,
  },
  {
    id: "IRQ",
    value: 767023,
  },
  {
    id: "ISL",
    value: 478682,
  },
  {
    id: "ISR",
    value: 963688,
  },
  {
    id: "ITA",
    value: 393089,
  },
  {
    id: "JAM",
    value: 83173,
  },
  {
    id: "JOR",
    value: 52005,
  },
  {
    id: "JPN",
    value: 199174,
  },
  {
    id: "KAZ",
    value: 181424,
  },
  {
    id: "KEN",
    value: 60946,
  },
  {
    id: "KGZ",
    value: 432478,
  },
  {
    id: "KHM",
    value: 254461,
  },
  {
    id: "OSA",
    value: 942447,
  },
  {
    id: "KWT",
    value: 414413,
  },
  {
    id: "LAO",
    value: 448339,
  },
  {
    id: "LBN",
    value: 620090,
  },
  {
    id: "LBR",
    value: 435950,
  },
  {
    id: "LBY",
    value: 75091,
  },
  {
    id: "LKA",
    value: 595124,
  },
  {
    id: "LSO",
    value: 483524,
  },
  {
    id: "LTU",
    value: 867357,
  },
  {
    id: "LUX",
    value: 689172,
  },
  {
    id: "LVA",
    value: 742980,
  },
  {
    id: "MAR",
    value: 236538,
  },
  {
    id: "MDA",
    value: 926836,
  },
  {
    id: "MDG",
    value: 840840,
  },
  {
    id: "MEX",
    value: 353910,
  },
  {
    id: "MKD",
    value: 505842,
  },
  {
    id: "MLI",
    value: 286082,
  },
  {
    id: "MMR",
    value: 915544,
  },
  {
    id: "MNE",
    value: 609500,
  },
  {
    id: "MNG",
    value: 410428,
  },
  {
    id: "MOZ",
    value: 32868,
  },
  {
    id: "MRT",
    value: 375671,
  },
  {
    id: "MWI",
    value: 591935,
  },
  {
    id: "MYS",
    value: 991644,
  },
  {
    id: "NAM",
    value: 701897,
  },
  {
    id: "NCL",
    value: 144098,
  },
  {
    id: "NER",
    value: 312944,
  },
  {
    id: "NGA",
    value: 862877,
  },
  {
    id: "NIC",
    value: 90831,
  },
  {
    id: "NLD",
    value: 281879,
  },
  {
    id: "NOR",
    value: 224537,
  },
  {
    id: "NPL",
    value: 322331,
  },
  {
    id: "NZL",
    value: 86615,
  },
  {
    id: "OMN",
    value: 707881,
  },
  {
    id: "PAK",
    value: 158577,
  },
  {
    id: "PAN",
    value: 738579,
  },
  {
    id: "PER",
    value: 248751,
  },
  {
    id: "PHL",
    value: 557292,
  },
  {
    id: "PNG",
    value: 516874,
  },
  {
    id: "POL",
    value: 682137,
  },
  {
    id: "PRI",
    value: 957399,
  },
  {
    id: "PRT",
    value: 846430,
  },
  {
    id: "PRY",
    value: 720555,
  },
  {
    id: "QAT",
    value: 478726,
  },
  {
    id: "ROU",
    value: 259318,
  },
  {
    id: "RUS",
    value: 268735,
  },
  {
    id: "RWA",
    value: 136781,
  },
  {
    id: "ESH",
    value: 151957,
  },
  {
    id: "SAU",
    value: 111821,
  },
  {
    id: "SDN",
    value: 927112,
  },
  {
    id: "SDS",
    value: 966473,
  },
  {
    id: "SEN",
    value: 158085,
  },
  {
    id: "SLB",
    value: 178389,
  },
  {
    id: "SLE",
    value: 528433,
  },
  {
    id: "SLV",
    value: 353467,
  },
  {
    id: "ABV",
    value: 251,
  },
  {
    id: "SOM",
    value: 445243,
  },
  {
    id: "SRB",
    value: 202402,
  },
  {
    id: "SUR",
    value: 972121,
  },
  {
    id: "SVK",
    value: 319923,
  },
  {
    id: "SVN",
    value: 728766,
  },
  {
    id: "SWZ",
    value: 379669,
  },
  {
    id: "SYR",
    value: 16221,
  },
  {
    id: "TCD",
    value: 101273,
  },
  {
    id: "TGO",
    value: 498411,
  },
  {
    id: "THA",
    value: 506906,
  },
  {
    id: "TJK",
    value: 613093,
  },
  {
    id: "TKM",
    value: 327016,
  },
  {
    id: "TLS",
    value: 607972,
  },
  {
    id: "TTO",
    value: 936365,
  },
  {
    id: "TUN",
    value: 898416,
  },
  {
    id: "TUR",
    value: 237783,
  },
  {
    id: "TWN",
    value: 878213,
  },
  {
    id: "TZA",
    value: 442174,
  },
  {
    id: "UGA",
    value: 720710,
  },
  {
    id: "UKR",
    value: 74172,
  },
  {
    id: "URY",
    value: 753177,
  },
  {
    id: "USA",
    value: 658725,
  },
  {
    id: "UZB",
    value: 550313,
  },
  {
    id: "VEN",
    value: 707492,
  },
  {
    id: "VNM",
    value: 538907,
  },
  {
    id: "VUT",
    value: 650646,
  },
  {
    id: "PSE",
    value: 476078,
  },
  {
    id: "YEM",
    value: 957751,
  },
  {
    id: "ZAF",
    value: 836949,
  },
  {
    id: "ZMB",
    value: 714503,
  },
  {
    id: "ZWE",
    value: 405217,
  },
  {
    id: "KOR",
    value: 171135,
  },
];