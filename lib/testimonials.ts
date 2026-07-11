/**
 * Testimonial schema — the heart of each card is a numeric before/after,
 * not a floating compliment. See CONCEPT/creative-direction rule #5.
 */
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  beforeAfter: {
    before: string;
    after: string;
    /** short metric headline, e.g. "ประหยัด 8,000 บ./เดือน" */
    metric: string;
  };
  photoUrl: string;
  course?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "พิมพ์ชนก ศรีวิไล",
    role: "เจ้าของร้านคาเฟ่ · ไม่เคยเขียนโค้ด",
    quote:
      "ไม่คิดว่าคนที่ไม่มีพื้นฐานอะไรเลยจะเอา AI มาใช้กับร้านได้จริงขนาดนี้ ตอนนี้ทำคอนเทนต์เองหมด ไม่ต้องรอใคร",
    beforeAfter: {
      before: "จ้างเขียน caption เดือนละ 8,000 บาท",
      after: "ทำเองใน 20 นาที ต่อสัปดาห์",
      metric: "ประหยัด 96,000 บ./ปี",
    },
    photoUrl: "",
    course: "CLAUDE OPERATOR",
  },
  {
    id: "t2",
    name: "กิตติพงษ์ วัฒนเดชา",
    role: "เจ้าของธุรกิจนำเข้า · สาย Business",
    quote:
      "เมื่อก่อนกว่าจะได้งานกราฟิกแต่ละชิ้นคือรอเป็นวัน ตอนนี้ร่างเองได้ก่อน แล้วค่อยส่งทีมเก็บรายละเอียด เร็วขึ้นคนละเรื่อง",
    beforeAfter: {
      before: "รอทีมกราฟิก 3 วัน ต่อ 1 draft",
      after: "ได้ draft แรกใน 10 นาที",
      metric: "เร็วขึ้น ~430 เท่า",
    },
    photoUrl: "",
    course: "CLAUDE GODMODE",
  },
  {
    id: "t3",
    name: "อรวรรณ ภักดีโชติ",
    role: "ผู้จัดการฝ่ายขาย · องค์กร",
    quote:
      "งานสรุปประชุมกับทำรายงานที่เคยกินเวลาครึ่งวัน ตอนนี้ Claude จัดการให้เกือบหมด เหลือแค่ตรวจกับกดส่ง",
    beforeAfter: {
      before: "สรุปประชุม + รายงาน 2 ชม./ครั้ง",
      after: "เหลือ 5 นาที ต่อครั้ง",
      metric: "คืนเวลา ~40 ชม./เดือน",
    },
    photoUrl: "",
    course: "CLAUDE CO-WORKER",
  },
];
