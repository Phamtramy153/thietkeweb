//Khoi tao danh sach san pham
function createProduct() {
    if (localStorage.getItem('products') == null) {
        let products = [{
            id: 1,
            status: 1, 
            title: 'Bó hoa Len 4 loại tone hồng',
            img: 'assets/img/products/hoalen1.jpg',
            category: 'HOA LEN',
            price: 230000,
            desc: 'Bó hoa len 4 loại tone hồng gồm hoa hồng, hoa tulip, hoa linh đan, hoa lưu ly'
        },
        {
            id: 2,
            status: 1, 
            title: 'Bó hoa tulip len tone tím',
            img: 'assets/img/products/hoalen2.jpg',
            category: 'HOA LEN',
            price: 250000,
            desc: 'Bó hoa tulip len 12 bông tone tím siêu xinh'
        },
        {
            id: 3,
            status: 1, 
            title: 'Bó hoa tulip len tone hồng trắng',
            img: 'assets/img/products/hoalen3.jpg',
            category: 'HOA LEN',
            price: 250000,
            desc: 'Bó hoa tulip len 12 bông tone hồng trắng'
        },
        {
            id: 4,
            status: 1, title: 'Bó hoa len 4 loại tone xanh',
            img: 'assets/img/products/hoalen4.jpg',
            category: 'HOA LEN',
            price: 699000,
            desc: 'Bó hoa tulip len tone xanh gồm hoa hồng, hoa tulip, hoa linh đan, hoa lưu ly '
        },
        {
            id: 5,
            status: 1, 
            title: 'Cơm chiên cua',
            img: './assets/img/products/com_chien_cua.png',
            category: 'Món mặn',
            price: 280000,
            desc: 'Cơm nấu từ gạo ST25 dẻo, hạt cơm tơi ngon, thịt cua tươi chắc nịch, bếp đảo cho săn hạt cơm, rồi đổ cua đã xào thơm vào, xúc miếng cơm chiên cua đầy đặn có thêm hành phi giòn rụm, món ngon như vậy đảm bảo tranh nhau đến miếng cuối cùng.'
        },

        {
            id: 6,
            status: 1, 
            title: 'Súp bào ngư hải sâm (1 phần)',
            img: './assets/img/products/sup-bao-ngu-hai-sam.jpeg',
            category: 'Món mặn',
            price: 540000,
            desc: 'Súp bào ngư Bếp Hoa có bào ngư kết hợp cùng sò điệp, tôm tươi... được hầm trong nhiều giờ với rau củ & nấm đông trùng tạo ra vị ngọt tự nhiên hiếm thấy. Một món ăn khiến cả người ốm cũng thấy ngon miệng đó ạ.'
        },

        {
            id: 7,
            status: 1, 
            title: 'Tai cuộn lưỡi',
            category: 'Món mặn',
            img: './assets/img/products/tai-cuon-luoi.jpeg',
            price: 340000,
            desc: 'Tai heo được cuộn bên trong cùng phần thịt lưỡi heo. Phần tai bên ngoài giòn dai, phần thịt lưỡi bên trong vẫn mềm, có độ ngọt tự nhiên của thịt. Tai cuộn lưỡi được chấm với nước mắm và tiêu đen.'
        },

        {
            id: 8,
            status: 1, 
            title: 'Xíu mại tôm thịt 10 viên',
            img: './assets/img/products/xiu_mai_tom_thit_10_vien.jpg',
            category: 'Món mặn',
            price: 140000,
            desc: 'Quý khách hấp chín trước khi ăn. Những miếng há cảo, sủi cảo, hoành thánh với phần nhân tôm, sò điệp, hải sản tươi ngon hay nhân thịt heo thơm ngậy chắc chắn sẽ khiến bất kỳ ai thưởng thức đều cảm thấy rất ngon miệng.'
        },

        {
            id: 9,
            status: 1, 
            title: 'Trà phô mai kem sữa',
            category: "Nước uống",
            img: './assets/img/products/tra-pho-mai-kem-sua.jpg',
            price: 34000,
            desc: 'Món Nước uống vừa béo ngậy, chua ngọt đủ cả mà vẫn có vị thanh của trà.',
        },
        {
            id: 10,
            status: 1, 
            title: 'Trà đào chanh sả',
            category: "Nước uống",
            img: './assets/img/products/tra-dao-chanh-sa.jpg',
            price: 25000,
            desc: 'Trà đào chanh sả có vị đậm ngọt thanh của đào, vị chua chua dịu nhẹ của chanh và hương thơm của sả.',
        },
        {
            id: 11,
            status: 1, 
            title: 'Bánh chuối nướng',
            category: 'Món tráng miệng',
            img: './assets/img/products/banh-chuoi-nuong.jpeg',
            price: 60000,
            desc: 'Bánh chuối nướng béo ngậy mùi nước cốt dừa cùng miếng chuối mềm ngon sẽ là Món tráng miệng phù hợp với mọi người.'
        },
        {
            id: 12,
            status: 1, 
            title: 'Há cảo sò điệp (10 viên)',
            img: './assets/img/products/ha_cao.jpg',
            category: 'Món mặn',
            price: 140000,
            desc: 'Những miếng há cảo, sủi cảo, hoành thánh với phần nhân tôm, sò điệp, hải sản tươi ngon hay nhân thịt heo thơm ngậy chắc chắn sẽ khiến bất kỳ ai thưởng thức đều cảm thấy rất ngon miệng.'
        },
        { 
            id: 13,
            status: 1, 
            title: 'Tulip mix Ly Trendy',
            img: './assets/img/products/hoakem1.jpg',
            category: 'HOA KẼM NHUNG',
            price: 160000,
            desc: 'Bó hoa mix các loại hoa Tulip, hoa Ly, hoa Cúc với tone màu chủ đạo là hồng phấn chắc chắn sẽ làm xiêu lòng các bạn nữ'
        },
         {
            id: 14,
            status: 1, 
            title: 'Hướng Dương ngược nắng',
            img: 'assets/img/products/hoakem2.jpg',
            category: 'HOA KẼM NHUNG',
            price: 180000,
            desc: 'Một bó hướng dương chắc chắn sẽ là kỉ niệm đẹp không thể quên ngày tốt nghiệp, có lẽ bởi vậy mà nó được ưa chuộng nhất là vào dịp hè.'
        },
        {
            id: 15,
            status: 1, 
            title: 'Anh Đào nở rộ bốn mùa',
            img: 'assets/img/products/hoakem3.jpg',
            category: 'HOA KẼM NHUNG',
            price: 200000,
            desc: 'Vẫn lấy hồng phấn làm màu chủ đạo cho bó hoa bên cạnh đó tô điểm bằng những bông hoa anh đào nhỏ xinh mà bắt mắt đủ đốn tim những thiếu nữ.'
        },
        {
            id: 16,
            status: 1, 
            title: 'Sắc Đỏ Quý Phái',
            img: 'assets/img/products/hoakem4.jpg',
            category: 'HOA KẼM NHUNG',
            price: 155000,
            desc: 'Mỗi bông hoa là một câu chuyện. Sắc màu của yêu thương, gửi gắm tình cảm trọn vẹn.'
        },
        {
            id: 17,
            status: 1, 
            title: 'Gương Tulip Rực Rỡ',
            img: 'assets/img/products/hoakem5.jpg',
            category: 'HOA KẼM NHUNG',
            price: 100000,
            desc: 'Cần gì phải nói nhiều, chỉ cần một bó hoa đẹp là bạn đã thể hiện được tình cảm của mình rồi!'
        },
        {
            id: 18,
            status: 1, 
            title: 'Tulip đỏ chứng tỏ rất xinh',
            img: 'assets/img/products/hoakem6.jpg',
            category: 'HOA KẼM NHUNG',
            price: 90000,
            desc: 'Màu đỏ không chỉ phù hợp với hoa hồng mà còn phù hợp với cả tulip nữa, bạn nam tặng bạn nữ chắc chắn phù hợp vào mọi dịp lễ.'
        },
        {
            id: 19,
            status: 1, 
            title: 'Hoàng Hôn Nhiệt Đới',
            img: 'assets/img/products/hoakem7.jpg',
            category: 'HOA KẼM NHUNG',
            price: 80000,
            desc: 'Với cách mix màu cực kì nhiệt đới cộng thêm giấy bó với tone màu trầm làm nổi bật nội dung chính là những bông hoa màu sắc rực rỡ'
        },
        {
            id: 20,
            status: 1, 
            title: 'Ánh Dương Tím',
            img: 'assets/img/products/hoakem8.jpg',
            category: 'HOA KẼM NHUNG',
            price: 70000,
            desc: 'Nhận custom bó hoa theo màu sắc yêu cầu của khách hàng, tuy là những bó hoa đơn sắc nhưng nhan sắc chắc chắn không thua những bó hoa sặc sỡ đầy màu sắc.'
        },
        {
            id: 21,
            status: 1, 
            title: 'Tím Thủy Chung',
            category: 'HOA KẼM NHUNG',
            img: 'assets/img/products/hoakem9.jpg',
            price: 99000,
            desc: 'Nhiều bạn ưa thích tone màu chủ đạo tím chắc chắn không thể bỏ qua. Màu tím lavender chủ đạo, điểm xuyết thêm những cánh hoa tulip nhỏ nhắn, bó hoa này mang lại cảm giác bình yên và thơ mộng.'
        },
        {
            id: 22,
            status: 1, 
            title: 'Bông Cúc Tím',
            category: 'HOA KẼM NHUNG',
            img: 'assets/img/products/hoakem10.jpg',
            price: 140000,
            desc: 'Với những bông cúc tím đan xen với lá xanh khiến ta mường tượng như được đắm chìm vào một không gian mở nơi dẫn đến khu vườn của những bông cúc tuy nhỏ mà xinh.'
        },

        {
            id: 23,
            status: 1, 
            title: 'Hello Teddy',
            category: 'HOA KẼM NHUNG',
            img: 'assets/img/products/hoakem11.jpg',
            price: 105000,
            desc: 'Kết hợp giữa chú gấu Teddy làm tâm điểm cùng những bông cúc đủ màu, là điều thu hút những tâm hồn yêu cái đẹp của thiếu nữ.'
        },

        {
            id: 24,
            status: 1, 
            title: 'Tulip Ánh Sao',
            img: 'assets/img/products/hoakem12.jpg',
            category: 'Món mặn',
            price: 210000,
            desc: 'Với tulip hồng làm chủ đạo, bó hoa được tô điểm bởi những ngọn đèn lấp lánh, tạo nên vẻ đẹp rực rỡ và lung linh trong đêm. '
        },
        {
            id: 25,
            status: 1, 
            title: 'Bó hồng mix 2 màu trắng hồng tặng người yêu bằng giấy nhún',
            category: 'HOA GIẤY',
            img: './assets/img/products/hoagiay12.png',
            price: 300000,
            desc: 'Một bó hoa hồng mix hai màu trắng và hồng, được làm từ giấy nhún, tặng người yêu. Mỗi bông hoa được chế tác tinh xảo với cánh hoa mềm mại, màu trắng tinh khôi hòa quyện cùng màu hồng dịu dàng. Bó hoa thể hiện tình cảm chân thành và lãng mạn, mang thông điệp về sự thuần khiết và tình yêu ngọt ngào. Đây là món quà hoàn hảo để gửi gắm những cảm xúc đặc biệt đến người yêu thương.'
        },
        {
            id: 26,
            status: 1, 
            title: 'Hoa tulip bằng giấy nhún hồng',
            category: 'HOA GIẤY',
            img: './assets/img/products/hoagiay1.jpg',
            price: 45000,
            desc: 'Một bông hoa tulip làm bằng giấy nhún màu hồng mềm mại, cánh hoa xếp lớp tạo nên vẻ đẹp tinh tế và nhẹ nhàng.'
        },

        {
            id: 27,
            status: 1, 
            title: 'Bó tulip bằng giấy màu nghệ thuật origami',
            category: 'HOA GIẤY',
            img: './assets/img/products/hoagiay2.jpg',
            price: 500000,
            desc: 'Một bó hoa tulip làm bằng giấy nghệ thuật origami, với những cánh hoa sắc sảo và tinh tế, từng bông hoa được gấp tỉ mỉ từ giấy màu tươi sáng, tạo nên một tác phẩm nghệ thuật sống động và đầy màu sắc.'
        },

        {
            id: 28,
            status: 1, 
            title: 'Bó cúc trắng bằng giấy màu nghệ thuật origami',
            category: 'HOA GIẤY',
            img: './assets/img/products/hoagiay3.jpg',
            price: 500000,
            desc: 'Một bó hoa cúc trắng được tạo nên từ nghệ thuật origami, từng cánh hoa trắng tinh khôi được gấp tỉ mỉ và chính xác, mang đến vẻ đẹp thanh thoát và trang nhã. Những bông hoa cúc bằng giấy này toát lên sự tinh tế và tươi mới, là biểu tượng của sự thuần khiết và thanh lịch.'
        },

        {
            id: 29,
            status: 1, 
            title: 'Bó tulip bằng giấy nhún hồng phớt',
            category: 'HOA GIẤY',
            img: './assets/img/products/hoagiay4.jpg',
            price: 420000,
            desc: 'Bó hoa tulip hồng phớt bằng giấy nhún là món quà tinh tế và đầy ý nghĩa dành cho những người phụ nữ yêu thích sự nhẹ nhàng và lãng mạn.'
        },

        {
            id: 30,
            status: 1, 
            title: 'Bó hồng vàng bằng giấy nhún',
            category: 'HOA GIẤY',
            img: './assets/img/products/'hoagiay5.jpg,
            price: 500000,
            desc: 'Bó hoa hồng vàng bằng giấy nhún là món quà sang trọng và đẳng cấp, tượng trưng cho sự giàu sang, phú quý và may mắn. Từng bông hoa được làm thủ công tỉ mỉ từ giấy nhún cao cấp, mô phỏng sống động hình ảnh hoa hồng thật với cánh hoa mềm mại, màu sắc rực rỡ và hương thơm tinh tế.'
        },

        {
            id: 31,
            status: 1, 
            title: 'Bó hồng sặc sỡ mix 4 màu bằng giấy nhún',
            category: 'HOA GIẤY',
            img: './assets/img/products/hoagiay6.jpg',
            price: 450000,
            desc: 'Bó hoa hồng sặc sỡ mix 4 màu bằng giấy nhún là món quà độc đáo và ấn tượng, mang đến niềm vui và hạnh phúc cho người nhận. Bó hoa được tạo nên từ sự kết hợp hài hòa của 4 màu sắc rực rỡ: đỏ, xanh, vàng và hồng, tượng trưng cho tình yêu nồng nàn, sự nhiệt huyết, niềm vui và sự may mắn.'
        },

        {
            id: 32,
            status: 1, 
            title: 'Bó hồng đỏ bằng giấy nhún',
            category: 'HOA GIẤY',
            img: './assets/img/products/hoagiay7.jpg',
            price: 600000,
            desc: 'Bó hoa hồng đỏ bằng giấy nhún là món quà ý nghĩa và sang trọng, tượng trưng cho tình yêu nồng nàn, sự lãng mạn và lòng chung thủy. Từng bông hoa được làm thủ công tỉ mỉ từ giấy nhún cao cấp, mô phỏng sống động hình ảnh hoa hồng thật với cánh hoa mềm mại, màu đỏ rực rỡ.'
        },

        {
            id: 33,
            status: 1, 
            title: 'Bó hồng mix 3 màu bằng giấy nhún',
            category: 'HOA GIẤY',
            img: './assets/img/products/hoagiay8.png',
            price: 600000,
            desc: 'Bó hoa hồng mix 3 màu bằng giấy nhún là món quà tinh tế và đầy ý nghĩa, mang đến sự kết hợp hoàn hảo giữa sắc màu rực rỡ và cảm xúc thăng hoa. Từng bông hoa được làm thủ công tỉ mỉ từ giấy nhún cao cấp, mô phỏng sống động hình ảnh hoa hồng thật với cánh hoa mềm mại, màu sắc đa dạng.'
        },

        {
            id: 34,
            status: 1, 
            title: 'Bó hồng đỏ bằng giấy nhún giấy bọc đen sang trọng',
            category: 'HOA GIẤY',
            img: './assets/img/products/hoagiay9.png',
            price: 290000,
            desc: 'Bó hoa hồng đỏ bằng giấy nhún, giấy bọc đen sang trọng là sự kết hợp hoàn hảo giữa vẻ đẹp kiêu sa của hoa hồng đỏ và sự bí ẩn, sang trọng của giấy bọc đen. Món quà này không chỉ thu hút ánh nhìn bởi vẻ ngoài độc đáo mà còn ẩn chứa thông điệp đầy ý nghĩa về tình yêu nồng nàn.'
        },

        {
            id: 35,
            status: 1, 
            title: 'Bó hồng mix 3 màu đỏ hồng trắng bằng giấy nhún',
            category: 'HOA GIẤY',
            img: './assets/img/products/hoagiay10.png',
            price: 300000,
            desc: 'Một bó hoa hồng được làm từ giấy nhún, kết hợp ba màu sắc rực rỡ: đỏ, hồng và trắng. Mỗi bông hoa được chế tác tỉ mỉ với các cánh hoa mềm mại, tạo nên sự hài hòa giữa màu sắc và kết cấu. Bó hoa không chỉ đẹp mắt mà còn toát lên vẻ lãng mạn và tinh tế, là món quà hoàn hảo để biểu đạt tình cảm và sự quan tâm.'
        },

        {
            id: 36,
            status: 1, 
            title: 'Bó hồng vàng sang trọng bằng giấy nhún',
            category: 'HOA GIẤY',
            img: './assets/img/products/hoagiay11.png',
            price: 280000,
            desc: 'Một bó hoa hồng vàng sang trọng, được chế tác tỉ mỉ từ giấy nhún. Mỗi cánh hoa vàng rực rỡ được tạo hình mềm mại và tự nhiên, tạo nên vẻ đẹp lộng lẫy và quyến rũ. Bó hoa không chỉ mang đến cảm giác ấm áp và tươi sáng, mà còn toát lên sự quý phái và đẳng cấp, là món quà hoàn hảo cho những dịp đặc biệt và trang trọng.'
        },

        {
            id: 37,
            status: 1, 
            title: 'Vườn Cổ Tích',
            category: 'HOA ĐẤT SÉT',
            img: 'assets/img/products/hoadatset1.jpg',
            price: 240000,
            desc: 'Bó hoa đất sét với màu tím chủ đạo mang đến cảm giác như lạc vào khu vườn cổ tích, với nhiều loại hoa rực rỡ và các động vật, thực vật dễ thương, tạo nên một khung cảnh huyền ảo.'
        },
        {
            id: 38,
            status: 1, 
            title: 'Ngày Nhà Giáo',
            category: 'HOA ĐẤT SÉT',
            img: 'assets/img/products/hoadatset2.jpg',
            price: 180000,
            desc: 'Một bó hoa bằng đất sét với tuổi đời cao chắc chắn sẽ thích hợp để thầy cô trưng bày trong góc làm việc của mình, với tone màu chủ đạo tím cùng hình ảnh cô giáo ở giữa chính là thông điệp cô là tâm điểm trao cho học sinh nhiều hành trang quan trọng.'
        },
        
        {
            id: 39,
            status: 1, 
            title: 'Vũ Điệu Muông Thú',
            category: 'HOA ĐẤT SÉT',
            img: 'assets/img/products/hoadatset3.jpg',
            price: 220000,
            desc: 'Với màu sắc chủ đạo tím mộng mơ, bó hoa này là một bữa tiệc sắc màu tím mix vàng với nhiều loài hoa và động vật nhảy múa, tạo nên một không gian vui tươi và đầy sức sống'
        },

        {
            id: 40,
            status: 1, 
            title: 'Giai Điệu Mùa Xuân',
            category: 'HOA ĐẤT SÉT',
            img: 'assets/img/products/hoadatset4.jpg',
            price: 240000,
            desc: 'Bó hoa đất sét với màu sắc chủ đạo là xanh dương khiến ta thấy tràn ngập sắc hoa mùa xuân và những bông hoa vô tri, mang đến một không gian tươi mới và tràn đầy sức sống.'
        },

        {
            id: 41,
            status: 1, 
            title: 'Khu Rừng Nhiệt Đới',
            category: 'HOA ĐẤT SÉT',
            img: 'assets/img/products/hoadatset5.jpg',
            price: 28000,
            desc: 'Bó hoa đất sét với tone màu cam sặc sỡ, các loại hoa và động vật kỳ lạ, mang lại vẻ đẹp huyền ảo và đầy bí ẩn, như một khu vườn trong mơ'
        },
        {
            id: 42,
            status: 1, 
            title: 'PEPPA PIG',
            category: "HOA ĐẤT SÉT",
            img: 'assets/img/products/hoadatset6.jpg',
            price: 29000,
            desc: 'Bó hoa có sự kết hợp độc đáo giữa sắc hồng ngọt ngào của hoa cúc và vẻ ngộ nghĩnh của những chú heo tạo nên một món quà tuyệt vời, mang lại niềm vui và nụ cười cho bất kỳ ai nhận được.',
        },
        {
            id: 43,
            status: 1, 
            title: 'Người Ngoài Hành Tinh',
            category: "HOA ĐẤT SÉT",
            img: 'assets/img/products/hoadatset7.jpg',
            price: 35000,
            desc: 'Sự kết hợp độc đáo giữa hoa và nhân vật đặc biệt trong trí tưởng tượng mang lại vẻ đẹp mới lạ và thu hút, chắc chắn sẽ khiến ai nhìn cũng phải thích thú và tò mò.',
        },
        {
            id: 44,
            status: 1, 
            title: 'Heo Đi Học',
            category: "HOA ĐẤT SÉT",
            img: 'assets/img/products/hoadatset8.jpg',
            price: 35000,
            desc: 'Hình ảnh chú heo đội nón cùng bông hoa cúc nhỏ xinh gợi ta tưởng tượng heo đi học trên cánh đồng đầy hoa cúc.',
        },
        {
            id: 45,
            status: 1, 
            title: 'Rừng Xanh Kỳ Bí',
            category: "HOA ĐẤT SÉT",
            img: 'assets/img/products/hoadatset9.jpg',
            price: 90000,
            desc: 'Một bó hoa đất sét mang vẻ đẹp kỳ bí của rừng xanh, với nhiều loài hoa và động vật quen thuộc mà lại lạ mắt, tạo nên một không gian đầy sự dễ thương.',
        },
        {
            id: 46,
            status: 1, 
            title: 'Vũ Điệu Muôn Thú',
            category: "HOA ĐẤT SÉT",
            img: 'assets/img/products/hoadatset10.jpg',
            price: 150000,
            desc: 'Bó hoa đất sét này kết hợp sắc xanh dương rực rỡ cùng những động vật và hoa tươi thắm. Những chú chim, chuột và những bông hoa tạo nên một không gian sinh động và tươi mới.',
        },
        {
            id: 47,
            status: 1, 
            title: 'Cam Không Ham Không Được',
            category: "HOA ĐẤT SÉT",
            img: 'assets/img/products/hoadatset11.jpg',
            price: 1450000,
            desc: 'Những đóa cúc và tulip tươi thắm cùng chú sư tử, bao quanh đám mây mềm mại, tạo nên một bức tranh sống động.',
        },
        {
            id: 48,
            status: 1, 
            title: 'Thỏ Ăn Cỏ',
            category: "HOA ĐẤT SÉT",
            img: 'assets/img/products/hoadatset12.jpg',
            price: 35000,
            desc: 'Đơn giản là thỏ và thỏ thích ăn cỏ.',
        },
        {
            id: 49,
            status: 1, 
            title: 'Xôi xéo',
            category: "Món chay",
            img: './assets/img/products/xoi-xeo.png',
            price: 80000,
            desc: 'Xôi xéo đậu xanh bếp dùng nếp cái hoa vàng hạt mẩy, ngâm với nước nghệ và đồ 2 lần cho hạt nếp chín mềm và thơm, đậu xanh sên mịn cắt tơi trộn cùng xôi, khi ăn rắc hành phi đưa vị, rất hấp dẫn.',
        },
        {
            id: 50,
            status: 1, 
            title: 'Chả quế chay',
            category: "Món chay",
            img: './assets/img/products/cha-que-chay.png',
            price: 70000,
            desc: '',
        },
        {
            id: 51,
            status: 1, 
            title: 'Nem chay',
            category: "Món chay",
            img: './assets/img/products/nem-chay.png',
            price: 160000,
            desc: 'Nem chay thơm ngon, thanh thuần bếp trưởng sử dụng rau củ bào tươi, đậu xanh, khoai môn, miến, mộc nhĩ và nấm hương, tất cả xào thơm cho lên vị, sau đó cuộn với bánh đa nem mỏng, chiên giòn vỏ, chấm mắm chua ngọt chay ăn kèm rau thơm rất hấp dẫn.',
        },
        {
            id: 52,
            status: 1, 
            title: 'Bánh tráng trộn',
            category: "Món ăn vặt",
            img: './assets/img/products/banh-trang-tron.jpg',
            price: 20000,
            desc: 'Bánh tráng trộn là món ăn ngon không chỉ nổi danh đất Sài Thành mà ngay khi xuất hiện tại Hà Nội, nó cũng đã trở thành món ăn “hot trend” rất được giới trẻ yêu thích. ',
        },
        {
            id: 53,
            status: 1, 
            title: 'Bánh tráng nướng',
            category: "Món ăn vặt",
            img: './assets/img/products/banh-trang-nuong.jpg',
            price: 10000,
            desc: 'Khác với món bánh tráng trộn, bánh tráng nướng được phết một lớp trứng chút lên bề mặt bánh tráng cùng thịt băm, mỡ hành, nướng đến khi có màu vàng ruộm. ',
        },
        {
            id: 54,
            status: 1, 
            title: 'Ốc thập cẩm (1 suất)',
            category: "Món ăn vặt",
            img: './assets/img/products/oc-thap-cam.jpg',
            price: 50000,
            desc: 'Được chế biến đủ các món ốc ngon khác nhau, như: ốc hấp, ốc luộc, ốc xào, ốc bỏ lò,.. với đủ các gia vị như tỏi, hành, ớt, tiêu, rau răm,…',
        },
        {
            id: 55,
            status: 1, 
            title: 'Cơm cháy chà bông',
            category: "Món ăn vặt",
            img: './assets/img/products/com-chay-cha-bong.jpg',
            price: 60000,
            desc: 'Cơm cháy chà bông có thể bảo quản cả tháng mà ăn vẫn ngon và đóng gói rất tiện.',
        },
        {
            id: 56,
            status: 1, 
            title: 'Phá lấu (1 suất)',
            category: "Món ăn vặt",
            img: './assets/img/products/pha-lau.jpg',
            price: 99000,
            desc: 'Cứ mỗi lần hỏi “Ăn gì ở Sài Gòn ngon, rẻ ?” là người ta nhớ ngay món phá lấu.',
        },
        {
            id: 57,
            status: 1, 
            title: 'Bột chiên (1 suất)',
            category: "Món ăn vặt",
            img: './assets/img/products/bot-chien.jpg',
            price: 49000,
            desc: 'Cùng với nước chấm đặc biệt, bột chiên để lại hương vị khó tả cho thực khách sau khi thưởng thức.',
        },
        {
            id: 58,
            status: 1, 
            title: 'Gỏi khô bò (1 suất)',
            category: "Món ăn vặt",
            img: './assets/img/products/goi-bo-kho.jpg',
            price: 60000,
            desc: 'Thơm ngon đến từng sợi bò.',
        },
        {
            id: 59,
            status: 1, 
            title: 'Hoành thánh tôm (10 viên)',
            img: './assets/img/products/hoanh_thanh.jpg',
            category: 'Món mặn',
            price: 130000,
            desc: 'Những miếng há cảo, sủi cảo, hoành thánh với phần nhân tôm, sò điệp, hải sản tươi ngon hay nhân thịt heo thơm ngậy chắc chắn sẽ khiến bất kỳ ai thưởng thức đều cảm thấy rất ngon miệng.'
        },
        {
            id: 60,
            status: 1, 
            title: 'Nước ép dâu tây',
            img: './assets/img/products/nuoc-ep-dau-tay.jpg',
            category: 'Nước uống',
            price: 100000,
            desc: 'Dâu tây ăn nguyên quả ngon ngọt, có cả quả dôn dốt chua, màu đỏ mọng trông cực yêu. Không chỉ ngon miệng mà đồ uống từ dâu tây còn có công dụng bảo vệ sức khỏe, sáng mắt, đẹp da, thon gọn vóc dáng. Làm giảm nguy cơ mắc bệnh về mỡ máu, chống viêm,…'
        },
        ]
        localStorage.setItem('products', JSON.stringify(products));
    }
}

// Create admin account 
function createAdminAccount() {
    let accounts = localStorage.getItem("accounts");
    if (!accounts) {
        accounts = [];
        accounts.push({
            fullname: "Hoàng Gia Bảo",
            phone: "hgbaodev",
            password: "123456",
            address: 'https://github.com/hgbaodev',
            email: 'musicanime2501@gmail.com',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        accounts.push({
            fullname: "Trần Nhật Sinh",
            phone: "0123456789",
            password: "123456",
            address: '',
            email: '',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }
}

window.onload = createProduct();
window.onload = createAdminAccount();
window.onload = deleteProduct(id);
