# 🍽️ Restaurant POS & Reservation System

ระบบจัดการร้านอาหารแบบครบวงจร (Cashier System) พัฒนาด้วย **Node.js** รองรับการจัดการการสั่งอาหาร ระบบแคชเชียร์ และระบบจองโต๊ะล่วงหน้า ออกแบบมาเพื่อให้ใช้งานง่ายและสามารถขยายสเกลได้ในอนาคต

---

## ✨ Features (ความสามารถหลัก)

- **🛒 Cashier & POS System**
  - จัดการเปิด-ปิดบิล และคำนวณราคาสุทธิ (รวม VAT / Service Charge)
  - รองรับการชำระเงินหลายรูปแบบ (เงินสด, โอนเงิน)
  - ออกใบเสร็จรับเงิน (Receipt Generation)
- **📅 Table Reservation (ระบบจองโต๊ะ)**
  - ดูสถานะโต๊ะแบบ Real-time (ว่าง, มีลูกค้านั่ง, จองแล้ว)
  - สร้าง แก้ไข และยกเลิกการจองโต๊ะ
  - ระบบแจ้งเตือนเมื่อถึงเวลาจองโต๊ะ
- **🍔 Order Management (ระบบสั่งอาหาร)**
  - เพิ่มเมนูลงในออเดอร์ของแต่ละโต๊ะ
  - อัปเดตสถานะอาหาร (รอคิว, กำลังปรุง, เสิร์ฟแล้ว)
- **🔐 Authentication & Authorization**
  - ระบบเข้าสู่ระบบสำหรับพนักงาน (Admin, Cashier, Waiter) ด้วย JWT

---

## 🛠️ Tech Stack (เครื่องมือที่ใช้พัฒนา)

- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL (หรือ MySQL)
- **ORM:** Prisma
- **Authentication:** JSON Web Tokens (JWT) & bcryptjs
- **Validation:** Zod หรือ Joi

---

## 📋 Prerequisites (สิ่งที่ต้องมีก่อนติดตั้ง)

- [Node.js](https://nodejs.org/) (v18 หรือใหม่กว่า)
- [PostgreSQL](https://www.postgresql.org/)
- npm หรือ yarn หรือ pnpm

---

