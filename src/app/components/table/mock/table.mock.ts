export interface IEmployee {
  name: string
  position: string
  office: string
  age: number
  startDate: string | Date
  salary: number
}

export interface IBasicTableData {
  data: IEmployee[]
}

export const BasicTableData: IBasicTableData = {
  data: [
    {
      name: 'Tiger Nixon',
      position: 'System Architect',
      office: 'Edinburgh',
      age: 61,
      startDate: '2011/04/05',
      salary: 320.8,
    },
    {
      name: 'Garret Winters',
      position: 'Accountant',
      office: 'Tokyo',
      age: 63,
      startDate: '2011/07/25',
      salary: 170.75,
    },
    {
      name: 'Ashton Cax',
      position: 'Junior Technical Author',
      office: 'San Francisco',
      age: 66,
      startDate: '2009/01/12',
      salary: 86.0,
    },
    {
      name: 'Cedric Kelly',
      position: 'Senior Javascript Developer',
      office: 'Edinburgh',
      age: 22,
      startDate: '2012/03/29',
      salary: 433.06,
    },
    {
      name: 'Airi Satou',
      position: 'Accountant',
      office: 'Tokyo',
      age: 33,
      startDate: '2008/11/28',
      salary: 167.7,
    },
    {
      name: 'Brielle Williamson',
      position: 'Integration Specialist',
      office: 'New York',
      age: 61,
      startDate: '2012/12/02',
      salary: 372.0,
    },
    {
      name: 'Herrod Chandler',
      position: 'Sales Assistant',
      office: 'San Francisco',
      age: 39,
      startDate: '2012/08/06',
      salary: 137.5,
    },
    {
      name: 'Jadir Junior',
      position: 'Senior Javascript Developer',
      office: 'São Paulo',
      age: 33,
      startDate: '2012/08/06',
      salary: 120,
    },
  ],
}
