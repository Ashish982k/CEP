export const studentStats = {
  monthPercent: 86,
  weekCount: 4,
  weekTotal: 5,
  weeklyOverview: [3, 4, 2, 5, 4, 0, 0],
};

export const todaysClassesStudent = [
  { id: 'c1', subject: 'Data Structures', time: '09:00 - 10:00', status: 'completed' },
  { id: 'c2', subject: 'Operating Systems', time: '10:15 - 11:15', status: 'upcoming' },
  { id: 'c3', subject: 'DBMS', time: '12:00 - 13:00', status: 'upcoming' },
];

export const notifications = [
  {
    id: 'n1',
    type: 'success',
    title: 'Attendance marked',
    description: 'Your attendance for Data Structures has been recorded.',
    time: '2m ago',
  },
  {
    id: 'n2',
    type: 'warning',
    title: 'Low attendance alert',
    description: 'You are at 71% in Operating Systems. Attend next class to improve.',
    time: '1h ago',
  },
  {
    id: 'n3',
    type: 'info',
    title: 'Class rescheduled',
    description: 'DBMS is moved to 12:00 - 13:00 today.',
    time: 'Yesterday',
  },
  {
    id: 'n4',
    type: 'info',
    title: 'Upcoming class',
    description: 'Operating Systems starts in 20 minutes.',
    time: 'Yesterday',
  },
];

export const teacherStats = {
  studentsCount: 62,
  classesCount: 5,
  avgAttendance: 88,
  donut: { present: 46, absent: 12, late: 4 },
};

export const todaysClassesTeacher = [
  {
    id: 't1',
    subject: 'Data Structures',
    time: '09:00 - 10:00',
    attendanceCount: '38/42',
  },
  {
    id: 't2',
    subject: 'Operating Systems',
    time: '10:15 - 11:15',
    attendanceCount: '0/40',
  },
  {
    id: 't3',
    subject: 'DBMS',
    time: '12:00 - 13:00',
    attendanceCount: '0/39',
  },
];

export const teacherClasses = [
  { id: 'k1', label: 'Data Structures (Section A)' },
  { id: 'k2', label: 'Operating Systems (Section B)' },
  { id: 'k3', label: 'DBMS (Section A)' },
];

export const durations = [
  { id: 'd1', label: '5 minutes' },
  { id: 'd2', label: '10 minutes' },
  { id: 'd3', label: '15 minutes' },
];

export const scheduleManagement = {
  stats: {
    totalClasses: 18,
    students: 62,
    activeDays: 5,
  },
  classes: [
    {
      id: 'm1',
      subject: 'Data Structures',
      time: '09:00 - 10:00',
      room: 'C-204',
      students: 42,
      day: 'Monday',
    },
    {
      id: 'm2',
      subject: 'Operating Systems',
      time: '10:15 - 11:15',
      room: 'B-110',
      students: 40,
      day: 'Tuesday',
    },
    {
      id: 'm3',
      subject: 'DBMS',
      time: '12:00 - 13:00',
      room: 'A-301',
      students: 39,
      day: 'Wednesday',
    },
  ],
};
