<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Will you be my Valentine? ❤️</title>
    <style>
        /* ตั้งค่าพื้นฐาน */
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #ffe6e6; /* สีชมพูอ่อน */
            font-family: 'Arial', sans-serif;
            overflow: hidden; /* ป้องกัน scrollbar ขึ้นตอนปุ่มเลื่อนหนี */
        }

        .container {
            text-align: center;
        }

        h1 {
            color: #d32f2f;
            font-size: 2.5rem;
            margin-bottom: 20px;
        }

        .gif-container img {
            max-width: 250px;
            border-radius: 15px;
            margin-bottom: 20px;
        }

        /* ตกแต่งปุ่ม */
        .buttons {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            flex-wrap: wrap;
        }

        button {
            padding: 15px 30px;
            font-size: 1.2rem;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s ease; /* ทำให้การเปลี่ยนแปลงลื่นไหล */
        }

        .yes-button {
            background-color: #4caf50;
            color: white;
        }

        .no-button {
            background-color: #f44336;
            color: white;
            position: relative; /* สำคัญ: เพื่อให้ขยับตำแหน่งได้ */
            z-index: 999;
        }

        /* หน้าขอบคุณ */
        .hidden {
            display: none;
        }
    </style>
</head>
<body>

    <div class="container" id="main-container">
        <div class="gif-container">
            <!-- คุณสามารถเปลี่ยน URL รูปภาพได้ตรงนี้ -->
            <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpobjZ0eG9pZzh5ZzB6Z3Z6Z3Z6Z3Z6Z3Z6Z3Z6Z3Z6Z3Z6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/c76IJLufpNUMo/giphy.gif" alt="Cute Bear">
        </div>
        <h1>Will you be my Valentine? ❤️</h1>
        <div class="buttons">
            <button class="yes-button" onclick="handleYesClick()">Yes</button>
            <button class="no-button" onclick="handleNoClick()">No</button>
        </div>
    </div>

    <script>
       const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Cookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
        ];

        let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    // 1. เปลี่ยนข้อความปุ่ม No
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // 2. ขยายปุ่ม Yes ให้ใหญ่ขึ้น
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;

    // 3. ทำให้ปุ่ม No เลื่อนหนีแบบสุ่ม
    // เปลี่ยน position เป็น fixed เพื่อให้ย้ายไปได้ทั่วหน้าจอ
    noButton.style.position = 'fixed';

    // คำนวณพื้นที่ที่ปุ่มสามารถไปได้ (ไม่ให้เลยขอบจอ)
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
</body>
</html>
