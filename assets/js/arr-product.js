// mảng sản phẩm
const productInLocalStorage = localStorage.getItem("product");
let product;
if (productInLocalStorage != null) // kiểm tra xem localstore có mảng product chưa
{
  product = JSON.parse(localStorage.getItem("product"));
  // fix loi khong load dc product sau khi add items...
  //localStorage.clear;
}
else {
  product = [
    {
      id: "1",
      type: "keyboard",
      name: "Bàn Phím Bluetooth Logitech K380 - Hàng Chính Hãng",
      price: "599000",
      description: "Logitech - Không dây Bluetooth",
      detail: `Bàn Phím Bluetooth Logitech K380 có thiết kế gọn nhẹ và độc đáo với các nút phím tròn mang nét cổ điển nhưng rất ấn tượng. Vì không có bàn phím số nên sản phẩm khá nhỏ gọn giúp bạn có thể dễ dàng mang theo bên mình và sử dụng bất cứ khi nào.`,
      img: "/assets/img/622f03e09e1dbaa5b3d96506236f5a84.png.webp",
    },
    {
      id: "2",
      type: "mouse",
      name: "Chuột Gaming Yindiao A5",
      description: "Bluetooth/Wireless,pin Sạc E-sports, Led RBG 7 màu - Chính Hãng",
      detail: ``,
      img: "/assets/img/ChuộtGamingYindiaoA5.webp",
      price: "269000",
    },
    {
      id: "3",
      type: "keyboard",
      name: "Bàn phím không dây Bluetooth Logitech MX Keys Mini - Hàng chính hãng",
      description: "Nhỏ gọn, Sạc USB-C, Phím tắt thông minh, Có bản cho Mac",
      detail: `
      • CÁC PHÍM THÔNG MINH PERFECT STROKE: Gõ trên các phím được tạo hình phù hợp với ngón tay bạn, cùng 4 phím tắt thông minh: chuyển đổi giọng nói thành văn bản, Tắt tiếng/Hủy tắt tiếng Mic và các phím Emoji và cắt nhanh màn hình.<br>
      • KÍCH CỠ MINI, HIỆU SUẤT MẠNH MẼ: Bố cục được thiết kế để dễ dàng gõ thật chính xác, với hình dáng tối giản và công thái học, có thể dễ dàng mang theo đi đến bất cứ nơi nào để cùng bạn làm việc.<br>
      • PIN SẠC USB-C: Bàn phím Bluetooth MX Keys Mini dùng được 10 ngày trong một lần sạc đầy hoặc lên tới 5 tháng khi tắt chức năng chiếu sáng nền.<br>`,
      img: "/assets/img/fa3b402ea600bb5763a6655ec50bc74b.png.webp",
      price: "699000",
    },
    {
      id: "4",
      type: "mousepad",
      name: "lót chuột pro max",
      description: "Mouse pad for wibu ",
      detail: ``,
      img: "/assets/img/mousepads.png",
      price: "169000",
    },
    {
      id: "5",
      type: "speaker",
      name: "Loa 2.1 Logitech Z213 (Đen)",
      description: "none",
      detail: `
      - Thiết Kế: Hệ Thống Loa 2.1,<br>
      - Kết Nối: Jack 3.5mm (headphone) / Jack 3.5mm (input) / Jack 3.5mm (output)<br>
      - Chức Năng: Volume Control / Bass Control<br>
      - Công Suất: 15W RMS
      `,
      img: "/assets/img/Loa LogitechZ213.webp",
      price: "499000",
    },
    {
      id: "6",
      type: "mousepad",
      name: "lót chuột siêu vjp pro",
      description: "lot chuot cho dan vjp",
      detail: ``,
      img: "/assets/img/mousepads.png",
      price: "569000",
    },
    {
      id: "7",
      type: "headphone",
      name: "tai nghe vjp pro cho dân quẩy",
      description: "tai nghe hiphop",
      detail: ``,
      img: "/assets/img/headphone.png",
      price: "569000",
    },
    {
      id: "8",
      type: "headphone",
      name: "tai nghe cho người điếc",
      description: "tai nghe magaming",
      detail: ``,
      img: "/assets/img/headphone.png",
      price: "569000",
    },
    {
      id: "9",
      type: "keyboard",
      name: "Bàn Phím chơi Game Keyboard Bosston G7 - Hàng Nhập Khẩu",
      price: "77390",
      description: "Keyboard for gamer",
      detail: `Bàn phím nghiêng 8 độ nhằm giảm thiểu tối đa tình trạng mỏi tay khi đánh máy <br>
    Các phím được khắc laser chống bay, kết hợp 8 nút xanh thời trang<br>
    Điều chỉnh độ cao tùy ý theo sở thích riêng của bạn<br>
    Thời gian đáp ứng hơn 10 triệu lần<br>
    Plug and Play<br>
    `,
      img: "/assets/img/01a6abe31c5de71032588632db2e0d69.jpg.webp",
    },
    {
      id: "10",
      type: "mouse",
      name: "Chuột gaming không dây DARE-U RGB",
      description: "Độ trễ thấp, phạm vi hoạt động hiệu quả 10m không vật cản",
      detail: ``,
      img: "/assets/img/Chuột gaming không dây DARE-U RGB.webp",
      price: "719000",
    },
    {
      id: "11",
      type: "keyboard",
      name: "Bàn phím cơ gaming mini AK33 cho máy tính",
      description: "Keyboard for gamer",
      detail: `
    - Bàn Phím Cơ mini Ajazz AK33 Gọn gàng , đơn giản và tinh tế <br>
    - Switch 82 Phím chống ồn , gõ êm , nhanh và nhạy hơn<br>
    - Led trắng đơn sắc , hỗ trợ nhiều hiệu ứng , hỗ trợ gõ chính xác trong điều kiện ánh sáng yếu<br>
    - Chip ARM 32 bit cho hiệu ứng led mượt mà<br>
    - Thiết kế Công thái học phù hợp cho tất cả nhu cầu khách hàng , đặc biệt là Gamer E-sports<br>`,
      img: "/assets/img/6bc41690ca3f941a664e1a1524a21977.jpg.webp",
      price: "659000",
    },
    {
      id: "12",
      type: "mousepad",
      name: "lót chuột pro max",
      description: "Mouse pad for wibu ",
      detail: ``,
      img: "/assets/img/mousepads.png",
      price: "169000",
    },
    {
      id: "13",
      type: "speaker",
      name: "Loa Logitech Z120 (Trắng)",
      description: "none",
      detail: `
      - Thiết Kế: Hệ Thống Loa 2.0<br>
      - Kết Nối: Jack 3.5mm (input) / USB (power)<br>
      - Chức Năng: Volume Control<br>
      - ông Suất: 3W RMS<br>
      `,
      img: "/assets/img/Loa-logitech-z120.png",
      price: "239000",
    },
    {
      id: "14",
      type: "mousepad",
      name: "lót chuột siêu vjp pro",
      description: "lot chuot cho dan vjp",
      detail: ``,
      img: "/assets/img/mousepads.png",
      price: "569000",
    },
    {
      id: "15",
      type: "headphone",
      name: "tai nghe vjp pro cho dân quẩy",
      description: "tai nghe hiphop",
      detail: ``,
      img: "/assets/img/headphone.png",
      price: "569000",
    },
    {
      id: "16",
      type: "headphone",
      name: "tai nghe cho người điếc",
      description: "tai nghe magaming",
      detail: ``,
      img: "/assets/img/headphone.png",
      price: "569000",
    },
    {
      id: "17",
      type: "keyboard",
      name: "Bàn Phím Cơ không dây mini Đa kết nối RF84 White Gaming cho máy tính",
      description: "Keyboard for gamer",
      detail: `
    - Đa Kết nối : Bluetooth 5.0 - USB 2.4G - cáp USB . Có thể tháo rời , thay thế dễ dàng<br>
    - Khoảng cách kết nối không dây lên đến 10m<br>
    - Kết nối cùng lúc lên đến 3 thiết bị , chuyển đổi nhanh thiết bị bằng phím FN+...<br>
    - Pin sạc 3000 mah , cho thời gian sử dụng rất dài , Cổng sạc Type C<br>
    - Bàn Phím có Chế độ tiết kiêm pin thông minh khi không sử dụng trong 2-3 phút<br>`,
      img: "/assets/img/70979306a536cfd53f1ca349577fd719.jpg.webp",
      price: "870000",
    },
    {
      id: "18",
      type: "mouse",
      name: "Chuột gaming Newmen G11 ",
      description: "Bi trọng lực tích hợp giúp chuột định vị chính xác trong game",
      detail: ``,
      img: "/assets/img/Chuột gaming Newmen G11.webp",
      price: "179000",
    },
    {
      id: "19",
      type: "keyboard",
      name: "Bàn Phím Cơ Máy Tính XSmart K2 Pro Màu Xanh Led RGB",
      description: "Keyboard for gamer",
      detail: `
    - 4 màu sắc thời trang và trẻ trung, tuyệt đẹp và Charming. 87 phím tiêu chuẩn, ký tự và ánh sáng mát mẻ giữa bảng. <br>
    - Bàn phím cơ sử dụng Blue switch. Cho âm thanh gõ giống như Đoạn Văn hay cảm giác cơ học, loại thân công tắc thoải mái và dễ sử dụng hơn. Âm thanh của nó sắc nét và có nhịp gõ mạnh mẽ. Nó chủ yếu phù hợp để đánh máy trong các trò chơi.<br>
    - Bàn phím nổi sáu hàng thứ tư phù hợp với quỹ đạo chuyển động của ngón tay, gõ phím thoải mái và không dễ bị mỏi.<br>
    - Cắm và chạy, đèn nền năng động và rực rỡ, các nhân vật và tấm giữa phát sáng để giải trí ban đêm, nhiều đèn Charming hơn.<br>
    - Thiết kế chống nước và chống bụi, với nhiều lỗ thoát nước ở phía dưới, có thể đẩy chất lỏng và trà càng sớm càng tốt và chăm sóc bàn phím của bạn.<br>
    `,
      img: "/assets/img/a0869744ebcc1b4b546e12468832f8af.jpg",
      price: "383000",
    },
    {
      id: "20",
      type: "mousepad",
      name: "lót chuột pro max",
      description: "Mouse pad for wibu ",
      detail: ``,
      img: "/assets/img/mousepads.png",
      price: "169000",
    },
    {
      id: "21",
      type: "speaker",
      name: "Loa Fenda F380X",
      description: "none",
      detail: `
      - Màn hình LED trắng sáng với góc nhìn tốt<br>
      - Đèn LED đa màu tự động<br>
      - Phạm vi hoạt động của Bluetooth lên đến 15 m<br>
      - Đầu đọc USB hỗ trợ giải mã định dạng kép MP3 / WMA<br>
      - Bộ nhớ FM lên đến 100 đài<br>
      `,
      img: "/assets/img/Loa Fenda F380X.webp",
      price: "1190000",
    },
    {
      id: "22",
      type: "mousepad",
      name: "lót chuột siêu vjp pro",
      description: "lot chuot cho dan vjp",
      detail: ``,
      img: "/assets/img/mousepads.png",
      price: "569000",
    },
    {
      id: "23",
      type: "headphone",
      name: "tai nghe vjp pro cho dân quẩy",
      description: "tai nghe hiphop",
      detail: ``,
      img: "/assets/img/headphone.png",
      price: "569000",
    },
    {
      id: "24",
      type: "headphone",
      name: "tai nghe cho người điếc",
      description: "tai nghe magaming",
      detail: ``,
      img: "/assets/img/headphone.png",
      price: "569000",
    },
    {
      id: "25",
      type: "keyboard",
      name: "Bàn phím giả cơ FREE WOLF K15 chơi game - hàng nhập khẩu",
      price: "144000",
      description: "Keyboard for gamer",
      detail: `
    Chiếc bàn phím giả cơ FREE WOLF K15 được làm từ vật liệu ABS bền bỉ cùng phím cắt Lazer nên có độ bền cực cao, thêm chế độ bán cơ nên khi gõ phím tạo cảm giác khá "phê" không khác gì trên chiếc bàn phím cơ đắt tiền thông thường. <br>
    Hơn thế nữa trên chiếc bàn phím bán cơ bàn tay được thiết kế một tay với phần bố trí vị trí phù hợp cho sự di chuyển linh hoạt ở các ngón tay nên tạo điều kiện thuận tiện cho bạn chơi thoải mái với các game hot nhất thị trường.<br>
    Hơn thế nữa trên chiếc bàn phím bán cơ FREE WOLF K15 còn trang bị thêm LED background giúp làm nổi bật hệ thống bàn phím khi chơi trong điều kiện thiếu ánh sáng và tốt cho đôi mắt của người chơi trong thời gian lâu dài.<br>
    `,
      img: "/assets/img/keyboard.jpg",
    },
    {
      id: "26",
      type: "mouse",
      name: "Chuột gaming Logitech G502 HERO",
      description: "Cảm biến: HERO ,độ phân giải: 16000 DPI",
      detail: ``,
      img: "/assets/img/Chuột gaming Logitech G502 HERO.webp",
      price: "999000",
    },
    {
      id: "27",
      type: "keyboard",
      name: "Bàn Phím Có Dây ROBOT RK20 Bàn Phím Máy Tính Văn Phòng - Hàng Chính Hãng",
      description: "Keyboard for gamer",
      detail: `
    Loại sản phẩm: Bàn phím có dây văn phòng <br>
    - Kích thước sản phẩm: 445,1 (L) x166 ((W) x26,5 (H) mm<br>
    - Trọng lượng sản phẩm: 498g ± 5%<br>
    - Số phím: 104: phím<br>
    - Giao diện dây: USB<br>
    - Chiều dài dây: 1.5M<br>`,
      img: "/assets/img/keyboard.jpg",
      price: "179000",
    },
    {
      id: "28",
      type: "mousepad",
      name: "lót chuột pro max",
      description: "Mouse pad for wibu ",
      detail: ``,
      img: "/assets/img/mousepads.png",
      price: "169000",
    },
    {
      id: "29",
      type: "speaker",
      name: "Loa 5.1 Logitech Z906 (Đen)",
      description: "none",
      detail: `
      - Thiết Kế: Hệ Thống Loa 5.1<br>
      - Kết Nối: Jack 3.5mm (headphone) / Jack 3.5mm (input) / RCA (input) / Jack 3.5 (surround input) / Coaxial (input) / Optical (input) / Push Ternminal (output)<br>
      - Chức Năng: Volume Control / Bass Control / 2.1 Mode / 4.1 Mode / 3D Mode / DTS Interative / Dolby Digital / THX / Loa treo tường được<br>
      - Công Suất: 500W RMS
      `,
      img: "/assets/img/Loa LogitechZ906-5.1.webp",
      price: "6400000",
    },
    {
      id: "30",
      type: "mousepad",
      name: "lót chuột siêu vjp pro",
      description: "lot chuot cho dan vjp",
      detail: ``,
      img: "/assets/img/mousepads.png",
      price: "569000",
    },
    {
      id: "31",
      type: "headphone",
      name: "tai nghe vjp pro cho dân quẩy",
      description: "tai nghe hiphop",
      detail: ``,
      img: "/assets/img/headphone.png",
      price: "569000",
    },
    {
      id: "32",
      type: "headphone",
      name: "tai nghe cho người điếc",
      description: "tai nghe magaming",
      detail: ``,
      img: "/assets/img/headphone.png",
      price: "569000",
    },
    {
      id: "33",
      type: "keyboard",
      name: "Bàn phím số không dây Mini Number Keyboard AZONE",
      description: "Keyboard for gamer",
      detail: `
    TÍNH NĂNG BÀN PHÍM SỐ MINI NUMBER KEYBOARD <br>
    - Cắm và sử dụng, không cần cài đặt driver.<br>
    - Bàn phím số không dây sử dụng kết nối 2.4G mạnh mẽ và ổn định.<br>
    - Sử dụng pin AAA 1.5V thông dụng.<br>
    - Tương thích với Windows/Linux/Mac.<br>
    `,

    img: "/assets/img/9a2a107f5df45b97a9145d9ffcfe062a.jpg.webp",
    price: "101999",
  },
  {
    id: '34',
    type: 'Laptop',
    name: "Laptop Gaming GIGABYTE G5 GD-51VN123SO i5-11400H/16GB/512GB/RTX3050/15.6",
    description: 'none',
    detail: 'none',
    img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/09/08/image-removebg-preview-24.png',
    price: '18490000'
  },
  {
    id: '35',
    type: 'Laptop',
    name: 'Laptop HP Envy 16-h0033TX 6K7F9PA-i9-12900H/16GB/512GB/RTX3060/16.0120Hz',
    description: 'none',
    detail: 'none',
    img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/09/10/image-removebg-preview-3.png',
    price: '56890000'
  },
  {
    id: '36',
    type: 'Laptop',
    name: 'Laptop Gaming MSI Katana GF66 12UCK-699VN (i5-12450H/8GB/512GB/RTX3050',
    description: 'none',
    detail: 'none',
    img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/09/27/laptop-gaming-msi-katana-gf66-12uc-699vn-removebg-preview.png',
    price: '22790000'
  },
  {
    id: '37',
    type: 'Laptop',
    name: 'Laptop HP Envy 16-h0034TX 6K7G0PA-i7-12700H/16GB/512GB/RTX 3060 6GB/16 Inch',
    description: 'none',
    detail: 'none',
    img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/08/22/image-removebg-preview-28.png',
    price: '47890000'
  },
  {
    id: '38',
    type: 'Laptop',
    name: 'Laptop Lenovo Legion 5 15ACH6 - 82JW00JPVN- R5 5600H/8GB/256GB/GTX1650',
    description: 'none',
    detail: 'none',
    img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/07/27/image-removebg-preview-20.png',
    price: '20490000'
  },
  {
    id: '39',
    type: 'Laptop',
    name: 'Laptop Gaming Lenovo Legion 5 15ARH7 - 82RE002VVN - R5 6600H/8GB/512GB',
    description: 'none',
    detail: 'none',
    img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/07/28/image-removebg-preview-4_637946022325170031.png',
    price: '28790000'
  },
  {
    id: '40',
    type: 'Laptop',
    name: 'Laptop Gaming Lenovo Legion 5 15ARH7- 82RE0035VN- R7 6800H/8GB/512GB',
    description: 'none',
    detail: 'none',
    img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/07/28/image-removebg-preview-4_637946022325170031.png',
    price: '29490000'
  },
  {
    id: '41',
    type: 'Laptop',
    name: 'Laptop ASUS TUF Gaming A15 FA507RC-HN051W,R7-6800H/8GB/512GB/15.6FHD144Hz/',
    description: 'none',
    detail: 'none',
    img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/09/05/image-removebg-preview-26.png',
    price: '22990000'
  },
  {
    id: '42',
    type: 'Laptop',
    name: 'Laptop Gaming Acer Nitro 5 Eagle AN515-57-54MV (i5-11400H/8GB/512GB PCIE)',
    description: 'none',
    detail: 'none',
    img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/09/16/image-removebg-preview-2022-09-16t144349-595.png',
    price: '21690000'
  },
  {
    id: '43',
    type: 'Laptop',
    name: 'Laptop Gaming Acer Aspire 7 A715-42G-R05G (R5-5500U/8GB/512GB PCIE)',
    description: 'none',
    detail: 'none',
    img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/10/14/image-removebg-preview-39.png',
    price: '16490000'
  },
  {
    id: '44',
    type: 'Laptop',
    name: 'Laptop ASUS TUF Gaming FX506HM-HN366W, i7-11800H/8GB/512GB/RTX3060/15.6FHD1',
    description: 'none',
    detail: 'none',
    img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/09/05/image-removebg-preview-34.png',
    price: '27890000'
  },
  {
    id: '45',
    type: 'Laptop',
    name: 'Macbook Pro M2 13" 2022 - 256GB - Chính hãng Apple Việt Nam ',
    description: 'none',
    detail: 'none',
    img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/06/07/macbook-pro-m2-silver-3.png',
    price: '30490000'
  },
  {
    id: '46',
    type: 'Laptop',
    name: 'Macbook Pro M2 13" 2022 - 16GB/256GB - Chính hãng Apple Việt Nam',
    description: 'none',
    detail: 'none',
    img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/06/07/macbook-pro-m2-silver-3.png',
    price: '36990000'
  },
  {
    id: '47',
    type: 'Laptop',
    name: 'Laptop Gaming Asus Rog Strix G15 G513RC HN038W - R7-6800H/8GB/512GB',
    description: 'none',
    detail: 'none',
    img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/08/10/image-removebg-preview-3_637957422088528878.png',
    price: '24490000'
  },
  {
    id: '48',
    type: 'Laptop',
    name: 'Laptop HP Gaming VICTUS 16 - d0198TX - 4R0U0PA -i7-11800H/8GB RAM/512GB SSD',
    description: 'none',
    detail: 'none',
    img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2021/11/11/laptop-hp-gaming-victus-16-d0197tx-2.png',
    price: '26890000'
  },
  {
    id: '49',
    type: 'Laptop',
    name: 'Laptop HP Gaming VICTUS 16 - e0168AX - 4R0U6PA  (R7-5800H/8GD4/512GB SSD',
    description: 'none',
    detail: 'none',
    img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2021/11/11/laptop-hp-gaming-victus-16-d0197tx-2.png',
    price: '21890000'
  },
  {
    id: '50',
    type: 'Laptop',
    name: 'Laptop HP VICTUS 16-d0294TX- 5Z9R5PA - i5-11400H/8GB/512GB/ RTX 3050Ti 4GB',
    description: 'none',
    detail: 'none',
    img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/08/01/image-removebg-preview.png',
    price: '18990000'
  },
  {
    id: '51',
    type: 'Laptop',
    name: 'Laptop Acer Gaming Aspire 7 A715-43G-R8GA (R5-5625U/8GB/512GB/15.6FHD144HZ',
    description: 'none',
    detail: 'none',
    img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/10/18/image-removebg-preview-52_638017091789031630.png',
    price: '19390000'
  },
  {
    id: '52',
    type: 'Laptop',
    name: 'Laptop ASUS TUF Gaming Dash F15 FX517ZE-HN045W (i5-12450H/8GB/512GB/3050Ti)',
    description: 'none',
    detail: 'none',
    img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/07/05/gaming-tuf-dash-f15-fx517ze-hn045w-1.png',
    price: '24190000'
  },
  {
    id: '53',
    type: 'Laptop',
    name: 'Laptop MSi Gaming GF63 11UC 443VN - Chính hãng - I5-11400H/8GB/512GB PCIE',
    description: 'none',
    detail: 'none',
    img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/06/18/msi-gaming-gf63-12.png',
    price: '21790000'
  },
{
    id: '54',
    type: 'speaker',
    name: 'Loa Soundmax A140 (2.0)',
    description: 'none',
    detail: `
    - Thiết kế nhỏ gọn với hai loa nhỏ hình hộp chữ nhật<br>
    - Nút điều chỉnh âm lượng thiết kế ngay trước mặt điều chỉnh nhanh chóng<br>  
    - Công suất 10W , âm thanh mạnh mẽ, trong trẻo đủ thỏa mãn nhu cầu giải trí
    `,
    img: '/assets/img/Loa SoundmaxA104.webp',
    price: '350000'
  },
  {
    id: '55',
    type: 'speaker',
    name: 'Loa Thanh Soundbar LG SNH5 ',
    description: 'none',
    detail: `
    - Trải nghiệm đắm chìm trong âm thanh siêu thực<br>
    - DTS Virtual:X - Cảm nhận sự khác biệt với âm thanh 3D ngập tràn<br>
    - Trải nghiệm căn phòng ngập tràn âm thanh như trong rạp<br>
    - LG ThinQ - TV và Loa thanh trở thành trung tâm điều khiển của bạn<br>
    - AI Sound Pro - Âm thanh phù hợp với nội dung bạn xem
    `,
    img: '/assets/img/Loa Thanh Soundbar LG SNH5.webp',
    price: '3850000'
  },
  {
    id: '56',
    type: 'speaker',
    name: 'Loa Bluetooth Microtek X-216BT (2.1)',
    description: 'none',
    detail: `
    - Trang bị hệ thống loa Portable 2.1<br>
    - Nguồn : 220V - 50Hz<br>
    - Tỷ số nén nhiễu : > 65dB<br>
    - Điều chỉnh âm lượng : Volume tổng , treble, bass và Remote điều khiển

    `,
    img: '/assets/img/Loa Bluetooth Microtek X-216BT.webp',
    price: '1999000'
  },
  {
    id: '57',
    type: 'speaker',
    name: 'Loa 2.1 Bose Companion 2 Series III (Đen)',
    description: 'none',
    detail: `
    - Thiết Kế: Hệ Thống Loa 2.0<br>
    - Kết Nối: Jack 3.5mm (headphone) / Jack 3.5mm (input)<br>
    - Chức Năng: Volume Control<br>
    - Công Suất: 22W RMS
    `,
    img: '/assets/img/Loa 2.1 Bose Companion 2 Series III (Đen).webp',
    price: '3690000'
  },
  {
    id: '58',
    type: 'speaker',
    name: 'Loa Soundbar Samsung HW-S800B/XV',
    description: 'none',
    detail: `
    - Thiết kế thanh mảnh<br>
    - Âm thanh vòm Dolby Audio / DTS Virtual:X<br>
    -	Âm Thanh Vòm Chuẩn 3.1.2 kênh<br>
    `,
    img: '/assets/img/Loa Soundbar Samsung HW-S800BXV.webp',
    price: '14490000'
  },
  {
    id: '59',
    type: 'speaker',
    name: 'Loa Bluetooth JBL Bar 5.1 Surround BAR51IMBLKAS (Đen)',
    description: 'none',
    detail: `
    - Thiết kế dạng thanh vuông dài, mang trên mình đến 9 loa con tạo hiệu ứng Stereo<br>
    - Phía trên là dải nút điều khiển, phía trước là màn hình LED hiển thị<br>
    - Hai loa vòm không dây chạy bằng pin có thể tháo rời<br>
    - Thời gian chơi 10 giờ, tổng công suất hệ thống 510W<br>
    - Được lập trình để có thể điều khiển mọi thứ bằng điều khiển TV từ xa<br>
    `,
    img: '/assets/img/Loa Bluetooth JBL Bar 5.1 Surround BAR51IMBLKAS (Đen).jpg',
    price: '14900000'
  },
  {
    id: '60',
    type: 'speaker',
    name: 'Loa Soundbar Samsung HW-B550/XV',
    description: 'none',
    detail: `
    -	Loa siêu trầm tích hợp<br>
    -	Chế độ tăng cường âm trầm Bass Boost<br>
    -	Tự động tối ưu âm thanh với nội dung bằng AI<br>
    `,
    img: '/assets/img/Loa Soundbar Samsung HW-B550XV.webp',
    price: '5790000'
  },
  {
    id: '61',
    type: 'speaker',
    name: 'Loa Máy Tính Bluetooth Z407 ',
    description: 'none',
    detail: `
    - Nguồn điện 80 watt tham gia vào quá trình xử lý tín hiệu kỹ thuật số chính xác (DSP) để đem lại âm thanh đắm chìm, chân thực.<br> 
    - Nghe các nốt cao rõ ràng, các âm trung và thấp mạnh mẽ cùng tất cả âm trầm bạn có thể xử lý.<br>
    `,
    img: '/assets/img/Loa Logitech Z407.jpg',
    price: '2310000 '
  },
  {
    id: '62',
    type: 'speaker',
    name: 'G560 LIGHTSYNC RGB ',
    description: 'none',
    detail: `
    - Hệ thống loa 2.1 với LIGHTSYNC RGB toàn dải phản ứng với hành động và âm thanh trong trò chơi. <br>
    - Âm thanh vòm định hướng DTS:X đem lại âm thanh bùng nổ cho loa siêu trầm hướng xuống và hai loa vệ tinh với các màng loa góc rộng.<br>
    `,
    img: '/assets/img/Loa g560-gallery-1.webp',
    price: '5499000'
  },
  {
    id: '63',
    type: 'speaker',
    name: 'Loa Microlab M-108 ',
    description: 'none',
    detail: `
    -	Thiết kế thân thiện và gọn gàng, tinh tế<br>
    -	Công suất loa 11W cho âm thanh lớn và rõ ràng<br>
    -	Jack kết nối 3.5mm thông dụng với nhiều thiết bị<br>
    -	Tùy chỉnh âm thanh dễ dàng với nút điều chỉnh âm lượng<br>
    -	Loa có chân đế chống rung và chống trượt<br> 
    -	Đem đến trải nghiệm nghe nhạc xem phim cực chất<br>

    `,
    img: '/assets/img/Loa Microlab M-108.jpg',
    price: '535000'
  },
  {
    id: '64',
    type: 'speaker',
    name: 'Loa Microlab B56 (2.0)(Đen)',
    description: 'none',
    detail: `
    - Thiết kế thời trang, ấn tượng<br> 
    - Chất lượng âm thanh chất lượng<br> 
    - Kích thước nhỏ gọn, kết nối đơn giản  
    `,
    img: '/assets/img/Microlab B56 (2.0).webp',
    price: '310000đ'
  },
  {
    id: '65',
    type: 'speaker',
    name: 'Loa Microlab M106BT 2.1(Đen)',
    description: 'none',
    detail: `
    - Thiết Kế: Hệ Thống Loa 2.1<br>
    - Kết Nối: Jack 3.5mm (input) / RCA (output) / Bluetooth (audio)<br>
    - Chức Năng: Volume Control / Bass Control<br>
    - Công Suất: 10W RMS
 
    `,
    img: '/assets/img/Loa bluetooth 2.1 Microlab M106BT.webp',
    price: '600000đ'
  },
  ];
  localStorage.setItem("product", JSON.stringify(product));
}
