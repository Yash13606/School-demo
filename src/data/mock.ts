import type { Admission, Book, Circular, Exam, FeePayment, Homework, Notification, School, Staff, Student } from '../types'

export const SCHOOL = {
  id: 'sch-1',
  name: 'Green Valley Academy',
  code: 'GREENVALLEY',
  tagline: 'Nurturing minds since 1987',
  founded: 1987,
  students: 1248,
  staff: 86,
  teachers: 72,
  campusArea: '8 acres',
  passRate: 96,
  address: '12 Ridge Road, Dehradun, Uttarakhand 248001',
  phone: '+91 135 274 8800',
  email: 'hello@greenvalley.edu',
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.0!2d78.0322!3d30.3165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDE4JzU5LjQiTiA3OMKwMDEnNTYuMCJF!5e0!3m2!1sen!2sin!4v1',
  officeHours: 'Mon–Fri 8:30 AM – 4:30 PM · Sat 9:00 AM – 12:30 PM',
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
  },
}

export const schools: School[] = [
  { id: 'sch-1', name: 'Green Valley Academy', code: 'GREENVALLEY', status: 'Active', modules: ['attendance', 'fees', 'library', 'transport', 'exams'], createdAt: '2021-04-12', address: SCHOOL.address, phone: SCHOOL.phone, email: SCHOOL.email },
  { id: 'sch-2', name: 'Sunrise Public School', code: 'SUNRISE', status: 'Active', modules: ['attendance', 'fees', 'exams'], createdAt: '2022-08-03', address: 'Sector 14, Noida', phone: '+91 120 445 2200', email: 'admin@sunrise.edu' },
  { id: 'sch-3', name: 'Heritage International', code: 'HERITAGE', status: 'Inactive', modules: ['attendance', 'fees'], createdAt: '2020-01-20', address: 'MG Road, Bengaluru', phone: '+91 80 221 9900', email: 'office@heritage.edu' },
]

export const students: Student[] = [
  { id: 'st-1', name: 'Arjun Mehta', className: 'Class 10', section: 'A', rollNo: '14', admissionNo: 'GVA-2021-0142', parent: 'Meera Mehta', status: 'Active', gender: 'Male', attendancePct: 94 },
  { id: 'st-2', name: 'Isha Kapoor', className: 'Class 10', section: 'A', rollNo: '22', admissionNo: 'GVA-2020-0098', parent: 'Raj Kapoor', status: 'Active', gender: 'Female', attendancePct: 91 },
  { id: 'st-3', name: 'Rohan Das', className: 'Class 9', section: 'B', rollNo: '08', admissionNo: 'GVA-2022-0201', parent: 'Anita Das', status: 'Active', gender: 'Male', attendancePct: 88 },
  { id: 'st-4', name: 'Saanvi Nair', className: 'Class 8', section: 'C', rollNo: '03', admissionNo: 'GVA-2023-0315', parent: 'Priya Nair', status: 'Active', gender: 'Female', attendancePct: 97 },
]

export const staff: Staff[] = [
  { id: 'sf-1', name: 'Priya Sharma', employeeId: 'EMP-104', role: 'Teacher', department: 'Mathematics', phone: '+91 98765 43210', status: 'Active' },
  { id: 'sf-2', name: 'Amit Verma', employeeId: 'EMP-087', role: 'Teacher', department: 'Science', phone: '+91 98765 11223', status: 'Active' },
  { id: 'sf-3', name: 'Kavita Joshi', employeeId: 'EMP-056', role: 'Accountant', department: 'Finance', phone: '+91 98765 99887', status: 'Active' },
]

export const admissions: Admission[] = [
  { id: 'adm-1', applicant: 'Vihaan Patel', applyingFor: 'Class 6', parentName: 'Nisha Patel', phone: '+91 98100 22334', appliedDate: '2026-06-28', status: 'Pending' },
  { id: 'adm-2', applicant: 'Ananya Reddy', applyingFor: 'Class 9', parentName: 'Suresh Reddy', phone: '+91 98100 55667', appliedDate: '2026-06-25', status: 'Under Review' },
  { id: 'adm-3', applicant: 'Kabir Singh', applyingFor: 'Class 1', parentName: 'Harpreet Singh', phone: '+91 98100 77889', appliedDate: '2026-06-20', status: 'Approved' },
]

export const circulars: Circular[] = [
  { id: 'cir-1', title: 'Monsoon term fee reminder', priority: 'High', audience: 'Parents', date: '2026-07-10', content: 'Second installment for Term II is due by 20 July. Pay via the parent portal or at the accounts office.' },
  { id: 'cir-2', title: 'Science exhibition — volunteer judges', priority: 'Normal', audience: 'Teachers', date: '2026-07-08', content: 'We need four faculty volunteers for the inter-house science exhibition on 18 July.' },
  { id: 'cir-3', title: 'Sports day schedule published', priority: 'Urgent', audience: 'All', date: '2026-07-05', content: 'Annual sports day is on 25 July. Event-wise timings are attached.' },
]

export const homework: Homework[] = [
  { id: 'hw-1', title: 'Quadratic equations worksheet', className: 'Class 10', subject: 'Mathematics', teacher: 'Priya Sharma', dueDate: '2026-07-15', submissions: 28, totalStudents: 32 },
  { id: 'hw-2', title: 'Photosynthesis lab report', className: 'Class 9', subject: 'Science', teacher: 'Amit Verma', dueDate: '2026-07-14', submissions: 19, totalStudents: 30 },
]

export const books: Book[] = [
  { id: 'bk-1', title: 'Concepts of Physics', author: 'H.C. Verma', subject: 'Science', total: 12, available: 4 },
  { id: 'bk-2', title: 'India After Gandhi', author: 'Ramachandra Guha', subject: 'History', total: 8, available: 2 },
  { id: 'bk-3', title: 'Wings of Fire', author: 'A.P.J. Abdul Kalam', subject: 'Biography', total: 15, available: 11 },
]

export const feePayments: FeePayment[] = [
  { id: 'fp-1', student: 'Arjun Mehta', amount: 18500, mode: 'UPI', date: '2026-07-02', receiptNo: 'RCP-2026-1842', collectedBy: 'Kavita Joshi' },
  { id: 'fp-2', student: 'Isha Kapoor', amount: 18500, mode: 'Bank Transfer', date: '2026-07-01', receiptNo: 'RCP-2026-1839', collectedBy: 'Kavita Joshi' },
  { id: 'fp-3', student: 'Rohan Das', amount: 9200, mode: 'Cash', date: '2026-06-28', receiptNo: 'RCP-2026-1821', collectedBy: 'Kavita Joshi' },
]

export const exams: Exam[] = [
  { id: 'ex-1', name: 'Mid-Term Examination 2026', year: '2025-26', startDate: '2026-08-12', endDate: '2026-08-22', published: false },
  { id: 'ex-2', name: 'Unit Test II', year: '2025-26', startDate: '2026-06-10', endDate: '2026-06-14', published: true },
]

export const notifications: Notification[] = [
  { id: 'n-1', title: 'Fee installment due', body: 'Term II fee due in 7 days', read: false, time: '2h ago' },
  { id: 'n-2', title: 'Homework submitted', body: 'Arjun submitted Mathematics worksheet', read: false, time: '5h ago' },
  { id: 'n-3', title: 'New admission application', body: 'Vihaan Patel applied for Class 6', read: true, time: '1d ago' },
]

export const feeChart = [
  { month: 'Feb', collected: 4.2, pending: 1.1 },
  { month: 'Mar', collected: 5.1, pending: 0.8 },
  { month: 'Apr', collected: 4.8, pending: 0.9 },
  { month: 'May', collected: 5.4, pending: 0.6 },
  { month: 'Jun', collected: 4.9, pending: 1.0 },
  { month: 'Jul', collected: 3.2, pending: 1.4 },
]

export const attendanceChart = Array.from({ length: 14 }, (_, i) => ({
  day: `Jul ${i + 1}`,
  rate: 88 + Math.round(Math.sin(i / 2) * 4),
}))

export const galleryImages = [
  'Morning assembly on the central lawn',
  'Science lab — robotics club',
  'Annual sports day relay',
  'Library reading corner',
  'Art room exhibition',
  'School band at founders day',
]

export const announcements = [
  { title: 'Admissions open for 2026-27', date: 'Jul 8', category: 'Admissions' },
  { title: 'Parent-teacher meet — Class 10', date: 'Jul 5', category: 'Academic' },
  { title: 'Monsoon sports schedule updated', date: 'Jul 3', category: 'Sports' },
  { title: 'Holiday notice — Independence Day', date: 'Jul 1', category: 'Holiday' },
]

export const events = [
  { title: 'Open house for prospective parents', date: 'Jul 20, 2026', time: '10:00 AM', venue: 'Main auditorium' },
  { title: 'Inter-house science exhibition', date: 'Jul 18, 2026', time: '9:00 AM', venue: 'Science block' },
  { title: 'Annual sports day', date: 'Jul 25, 2026', time: '8:00 AM', venue: 'Sports complex' },
  { title: 'Founders Day concert', date: 'Aug 2, 2026', time: '5:30 PM', venue: 'Open-air amphitheatre' },
]

export const achievements = [
  { title: 'CBSE Class 10 district topper', detail: 'Isha Kapoor — 98.4%', year: '2025' },
  { title: 'National robotics qualifier', detail: 'Team Circuit Breakers — top 12 nationally', year: '2025' },
  { title: 'State basketball champions', detail: 'Under-17 girls team', year: '2024' },
]

export const holidayNotices = [
  { title: 'Independence Day', dates: 'Aug 15, 2026', note: 'School closed' },
  { title: 'Gandhi Jayanti', dates: 'Oct 2, 2026', note: 'School closed' },
  { title: 'Diwali break', dates: 'Oct 20–24, 2026', note: 'No classes' },
]

export const testimonials = [
  { quote: 'The parent portal means I never miss a fee deadline or PTM. Everything is in one place.', name: 'Meera Mehta', role: 'Parent, Class 10' },
  { quote: 'Our daughter found her voice in debate and science club. Teachers know every child by name.', name: 'Raj Kapoor', role: 'Parent, Class 10' },
  { quote: 'Green Valley gave me the foundation for engineering — rigorous maths and supportive mentors.', name: 'Arjun Mehta', role: 'Alumnus, IIT Roorkee' },
]

export const whyChooseUs = [
  { title: 'Small sections', body: 'Average 28 students per class so teachers can actually know your child.' },
  { title: 'Whole-child focus', body: 'Academics, sports, arts, and service learning woven into daily rhythm.' },
  { title: 'Transparent communication', body: 'Circulars, fees, attendance, and results visible to families in real time.' },
  { title: 'Safe hillside campus', body: 'Gated grounds, CCTV, trained staff, and structured dismissal procedures.' },
]

export const facilities = [
  { title: 'Science & robotics labs', body: 'Physics, chemistry, biology, and a maker space for STEM clubs.' },
  { title: 'Library & media centre', body: '14,000 volumes, quiet reading rooms, and digital research stations.' },
  { title: 'Sports complex', body: 'Cricket nets, basketball courts, athletics track, and indoor badminton.' },
  { title: 'Performing arts', body: 'Music rooms, art studio, and a 400-seat auditorium.' },
]

export const curriculum = {
  board: 'CBSE',
  approach: 'Inquiry-led classrooms with continuous assessment and term examinations.',
  streams: ['Science (PCM/PCB)', 'Commerce', 'Humanities'],
  highlights: ['NEP-aligned life skills', 'French & Sanskrit options', 'Career counselling from Class 9'],
}

export const classesOffered = [
  { level: 'Pre-primary', grades: 'Nursery – KG', age: '3–5 years' },
  { level: 'Primary', grades: 'Classes 1 – 5', age: '6–10 years' },
  { level: 'Middle', grades: 'Classes 6 – 8', age: '11–13 years' },
  { level: 'Secondary', grades: 'Classes 9 – 10', age: '14–15 years' },
  { level: 'Senior secondary', grades: 'Classes 11 – 12', age: '16–17 years' },
]

export const facultyHighlights = [
  { name: 'Dr. Neha Bansal', role: 'Principal', subject: 'Education leadership' },
  { name: 'Priya Sharma', role: 'HOD Mathematics', subject: 'Mathematics' },
  { name: 'Amit Verma', role: 'HOD Science', subject: 'Physics & Chemistry' },
  { name: 'Ritu Malhotra', role: 'Senior teacher', subject: 'English & debate coach' },
]

export const admissionProcess = [
  { step: '1', title: 'Submit online application', body: 'Complete the multi-step form with student and parent details.' },
  { step: '2', title: 'Document verification', body: 'Admissions office reviews uploaded documents within 3 working days.' },
  { step: '3', title: 'Interaction / assessment', body: 'Age-appropriate interaction for pre-primary; written assessment for Class 2+.' },
  { step: '4', title: 'Offer & fee payment', body: 'Receive admission letter and pay the registration fee to confirm the seat.' },
]

export const eligibility = [
  { class: 'Nursery', age: '3 years by 31 March', notes: 'Potty-trained' },
  { class: 'KG', age: '4 years by 31 March', notes: '—' },
  { class: 'Class 1', age: '5 years by 31 March', notes: 'Birth certificate required' },
  { class: 'Class 2–8', age: 'As per previous grade', notes: 'Transfer certificate if changing schools' },
  { class: 'Class 9–12', age: 'As per CBSE norms', notes: 'Previous year report card mandatory' },
]

export const feeStructure = [
  { item: 'Registration (one-time)', amount: '₹2,500' },
  { item: 'Tuition — Primary (annual)', amount: '₹48,000' },
  { item: 'Tuition — Middle (annual)', amount: '₹62,000' },
  { item: 'Tuition — Secondary (annual)', amount: '₹74,000' },
  { item: 'Transport (optional, annual)', amount: '₹18,000 – ₹28,000' },
]

export const requiredDocuments = [
  'Birth certificate (original + copy)',
  'Previous school report card',
  'Transfer certificate (if applicable)',
  'Parent / guardian government ID',
  'Passport-size photographs (student + parents)',
  'Address proof',
]

export const admissionFaqs = [
  { q: 'When do admissions close?', a: 'Applications are reviewed on a rolling basis through August 2026, subject to seat availability.' },
  { q: 'Is there an entrance test?', a: 'Pre-primary applicants attend a brief interaction. Class 2 and above take a grade-appropriate assessment.' },
  { q: 'Can I visit the campus?', a: 'Yes — register for our open house on Jul 20 or book a weekday tour via the contact form.' },
  { q: 'Are scholarships available?', a: 'Merit-cum-means scholarships are offered for Classes 9–12 based on assessment and family income review.' },
]

export const aboutContent = {
  principalMessage: 'At Green Valley, we believe every child arrives with curiosity worth protecting. Our job is not to fill vessels but to light fires — through rigorous academics, caring relationships, and opportunities to lead.',
  principalName: 'Dr. Neha Bansal',
  vision: 'Learners who think clearly, act responsibly, and contribute to their communities.',
  mission: 'Deliver rigorous academics, character education, and inclusive opportunities on a safe hillside campus.',
  history: 'Founded in 1987 by the Ridge Education Society, Green Valley began as a single building with 120 students. Today we serve over 1,200 learners across pre-primary to Class 12, while keeping the same promise: every child known by name.',
  management: 'Governed by the Ridge Education Society board with parent representation and annual audited accounts.',
  awards: ['CBSE Excellence Award 2024', 'Green Campus Certification 2023', 'Best Sports Programme — Uttarakhand 2022'],
}

export const galleryCategories = {
  Campus: ['Main building at sunrise', 'Central lawn & amphitheatre', 'Senior wing courtyard'],
  Events: ['Founders Day 2025', 'Science exhibition', 'Independence Day assembly'],
  Sports: ['Annual sports day relay', 'Inter-school basketball', 'Cricket nets practice'],
  'Annual Day': ['Stage performance — dance', 'Chief guest address', 'Prize distribution'],
  Classrooms: ['Primary reading circle', 'Math lab session', 'Art room exhibition'],
  Videos: ['Campus tour (3 min)', 'Sports day highlights', 'Robotics club showcase'],
} as const

export type GalleryTab = keyof typeof galleryCategories
